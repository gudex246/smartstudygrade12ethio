import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  Eye,
  AlertCircle,
  FileCheck,
  RefreshCw
} from 'lucide-react';
import { processPaymentScreenshot } from '../../utils/imageUtils';

interface PaymentScreenshotUploadProps {
  screenshotUrl: string;
  screenshotName: string;
  screenshotSize?: string;
  onScreenshotChange: (dataUrl: string, fileName: string, sizeFormatted: string) => void;
  onRemoveScreenshot: () => void;
  onPreviewClick: () => void;
  required?: boolean;
}

export const PaymentScreenshotUpload: React.FC<PaymentScreenshotUploadProps> = ({
  screenshotUrl,
  screenshotName,
  screenshotSize,
  onScreenshotChange,
  onRemoveScreenshot,
  onPreviewClick,
  required = true
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setErrorMessage(null);

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (PNG, JPG, JPEG, or WEBP).');
      return;
    }

    // Limit original file size to 15MB
    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage('Image is too large. Please select a file under 15MB.');
      return;
    }

    try {
      setIsProcessing(true);
      const processed = await processPaymentScreenshot(file);
      onScreenshotChange(processed.dataUrl, processed.fileName, processed.fileSizeFormatted);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to process the screenshot. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerSelectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-bold text-slate-300">
          Upload Payment Receipt Screenshot:
          {required && <span className="text-amber-400 ml-1">*</span>}
        </label>
        {screenshotUrl && (
          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Receipt Attached</span>
          </span>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        onChange={handleInputChange}
        className="hidden"
      />

      {screenshotUrl ? (
        /* Image Attached Preview Card */
        <div className="bg-slate-900/90 border border-emerald-500/40 rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            {/* Thumbnail */}
            <div
              onClick={onPreviewClick}
              className="relative w-14 h-14 rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shrink-0 cursor-pointer group"
              title="Click to zoom screenshot"
            >
              <img
                src={screenshotUrl}
                alt="Receipt thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Eye className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* File Info */}
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate max-w-[180px] sm:max-w-xs">
                {screenshotName || 'Payment_Receipt.jpg'}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                {screenshotSize && <span>{screenshotSize}</span>}
                <span className="text-emerald-400 font-medium">• Ready for Admin</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onPreviewClick}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-colors border border-slate-700 cursor-pointer"
              title="Inspect Screenshot"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Preview</span>
            </button>

            <button
              type="button"
              onClick={triggerSelectFile}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700 cursor-pointer"
              title="Replace Screenshot"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onRemoveScreenshot}
              className="p-1.5 bg-slate-800 hover:bg-rose-900/30 text-rose-400 hover:text-rose-300 rounded-lg transition-colors border border-slate-700 hover:border-rose-700/50 cursor-pointer"
              title="Remove Screenshot"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Empty Upload Dropzone */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerSelectFile}
          className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-amber-400 bg-amber-500/10 scale-[1.01]'
              : 'border-slate-700/90 hover:border-amber-500/60 bg-slate-900/60 hover:bg-slate-900'
          }`}
        >
          {isProcessing ? (
            <div className="py-2 flex flex-col items-center justify-center gap-2">
              <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-amber-300 font-medium">Processing payment screenshot...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-0.5">
                <UploadCloud className="w-5 h-5 text-amber-400" />
              </div>

              <div className="text-xs">
                <span className="font-bold text-white hover:underline text-amber-300">
                  Click to select screenshot
                </span>{' '}
                <span className="text-slate-400 hidden sm:inline">or drag and drop it here</span>
              </div>

              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Attach your transfer slip from <strong className="text-slate-200">CBE Mobile Banking</strong>, <strong className="text-slate-200">Telebirr</strong>, or <strong className="text-slate-200">E-Birr</strong>
              </p>

              <span className="text-[10px] text-slate-500 mt-1 uppercase font-mono">
                PNG, JPG, JPEG, WEBP • Max 15MB
              </span>
            </div>
          )}
        </div>
      )}

      {errorMessage && (
        <div className="flex items-center gap-1.5 text-[11px] text-rose-400 bg-rose-950/30 border border-rose-500/30 rounded-lg px-2.5 py-1.5 mt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
