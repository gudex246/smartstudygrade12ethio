import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  RotateCw,
  CheckCircle,
  AlertCircle,
  Building2,
  Smartphone,
  Calendar,
  User,
  DollarSign
} from 'lucide-react';

interface ReceiptViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  studentName?: string;
  studentEmail?: string;
  amount?: number | string;
  currency?: string;
  paymentMethod?: string;
  date?: string;
  onApprove?: () => void;
  onReject?: () => void;
  isPending?: boolean;
}

export const ReceiptViewerModal: React.FC<ReceiptViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title = 'Payment Screenshot Receipt',
  studentName,
  studentEmail,
  amount,
  currency = 'ETB ',
  paymentMethod,
  date,
  onApprove,
  onReject,
  isPending = false
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  if (!isOpen || !imageUrl) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleReset = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `receipt-${studentName ? studentName.replace(/\s+/g, '_') : 'screenshot'}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">{title}</h3>
              {studentName && (
                <p className="text-xs text-slate-400">
                  Student: <strong className="text-indigo-300">{studentName}</strong> {studentEmail ? `(${studentEmail})` : ''}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom & rotate controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800/90 rounded-xl p-1 border border-slate-700">
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleRotate}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                title="Rotate"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              title="Download Screenshot"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          {/* Main Image Stage */}
          <div className="flex-1 bg-slate-950 p-4 flex items-center justify-center overflow-auto relative select-none">
            <div
              className="transition-transform duration-200 ease-out origin-center max-w-full max-h-full flex items-center justify-center"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`
              }}
            >
              <img
                src={imageUrl}
                alt="Student Payment Screenshot"
                className="max-h-[62vh] max-w-full object-contain rounded-xl shadow-2xl border border-slate-800 pointer-events-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Details Sidebar (if info provided) */}
          {(studentName || amount || paymentMethod) && (
            <div className="w-full md:w-80 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                  Transaction Metadata
                </h4>

                {studentName && (
                  <div className="flex items-start gap-2.5">
                    <User className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-400 block">Student</span>
                      <span className="text-xs font-bold text-white">{studentName}</span>
                    </div>
                  </div>
                )}

                {amount !== undefined && (
                  <div className="flex items-start gap-2.5">
                    <DollarSign className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-400 block">Amount Paid</span>
                      <span className="text-base font-extrabold text-emerald-400">
                        {currency}{amount}
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod && (
                  <div className="flex items-start gap-2.5">
                    {paymentMethod.toLowerCase().includes('telebirr') || paymentMethod.toLowerCase().includes('birr') ? (
                      <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    ) : (
                      <Building2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="text-[11px] text-slate-400 block">Payment Method</span>
                      <span className="text-xs font-semibold text-slate-200">{paymentMethod}</span>
                    </div>
                  </div>
                )}

                {date && (
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-400 block">Submitted Date</span>
                      <span className="text-xs font-mono text-slate-300">{date}</span>
                    </div>
                  </div>
                )}

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-400">
                  <p className="font-semibold text-slate-300 mb-1">Verification Tip:</p>
                  <p>Check the transfer reference, date, and transferred amount (300 ETB) against your CBE/Telebirr account history.</p>
                </div>
              </div>

              {/* Action Buttons for Pending Payments */}
              {isPending && (
                <div className="pt-4 border-t border-slate-800 space-y-2 mt-4">
                  {onApprove && (
                    <button
                      type="button"
                      onClick={() => {
                        onApprove();
                        onClose();
                      }}
                      className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Verify & Grant Access</span>
                    </button>
                  )}

                  {onReject && (
                    <button
                      type="button"
                      onClick={() => {
                        onReject();
                        onClose();
                      }}
                      className="w-full py-2 bg-slate-800 hover:bg-rose-900/30 text-rose-300 hover:text-rose-200 border border-slate-700 hover:border-rose-700/50 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Reject Payment
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
