/**
 * Utility for handling and optimizing payment receipt screenshots
 * Resizes images client-side to ensure smooth performance, fast rendering,
 * and safe storage inside browser storage without exceeding quotas.
 */

export interface ProcessedImage {
  dataUrl: string;
  fileName: string;
  fileSizeFormatted: string;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export async function processPaymentScreenshot(
  file: File,
  maxWidth = 1200,
  maxHeight = 1200,
  quality = 0.82
): Promise<ProcessedImage> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Selected file is not an image. Please select a PNG, JPG, or WEBP image.'));
      return;
    }

    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };

    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => {
        // Fallback: resolve with raw base64 dataUrl
        resolve({
          dataUrl: e.target?.result as string,
          fileName: file.name,
          fileSizeFormatted: formatFileSize(file.size)
        });
      };

      img.onload = () => {
        try {
          let { width, height } = img;

          // Scale down if larger than max dimensions
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve({
              dataUrl: e.target?.result as string,
              fileName: file.name,
              fileSizeFormatted: formatFileSize(file.size)
            });
            return;
          }

          // Render image onto canvas
          ctx.drawImage(img, 0, 0, width, height);

          // Export compressed JPEG
          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

          // Estimate compressed size
          const stringLength = compressedDataUrl.length - 'data:image/jpeg;base64,'.length;
          const compressedBytes = Math.round((stringLength * 3) / 4);

          resolve({
            dataUrl: compressedDataUrl,
            fileName: file.name,
            fileSizeFormatted: formatFileSize(compressedBytes)
          });
        } catch {
          // Fallback if canvas has issues
          resolve({
            dataUrl: e.target?.result as string,
            fileName: file.name,
            fileSizeFormatted: formatFileSize(file.size)
          });
        }
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}
