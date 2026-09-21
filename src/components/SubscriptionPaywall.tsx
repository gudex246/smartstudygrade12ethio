import React, { useState } from 'react';
import {
  X,
  Check,
  Sparkles,
  ShieldCheck,
  Copy,
  CheckCheck,
  CreditCard,
  Smartphone,
  Building2,
  Tag,
  ArrowRight,
  Gift,
  AlertCircle,
  Clock,
  PhoneCall,
  Lock,
  BadgeCheck,
  Eye,
  UploadCloud
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { User, SubscriptionPlan, PromoCode } from '../types';
import { PAYMENT_ACCOUNTS } from '../data/initialData';
import {
  getPlans,
  getPromoCodes,
  addTransaction,
  updateStudentSubscription,
  setCurrentUser
} from '../utils/storage';
import { PaymentScreenshotUpload } from './common/PaymentScreenshotUpload';
import { ReceiptViewerModal } from './common/ReceiptViewerModal';

interface SubscriptionPaywallProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
  onSubscriptionSuccess: (updatedUser: User) => void;
  onFreePreviewContinue?: () => void;
}

export const SubscriptionPaywall: React.FC<SubscriptionPaywallProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSubscriptionSuccess,
  onFreePreviewContinue
}) => {
  const plans = getPlans();
  // Default to Semester plan (300 ETB)
  const semesterPlan = plans.find((p) => p.id === 'plan-termly') || plans[0];
  const [selectedPlanId, setSelectedPlanId] = useState<string>(semesterPlan?.id || 'plan-termly');

  const [paymentChannel, setPaymentChannel] = useState<'cbe' | 'telebirr' | 'ebirr' | 'card'>('cbe');
  const [screenshotUrl, setScreenshotUrl] = useState<string>('');
  const [screenshotName, setScreenshotName] = useState<string>('');
  const [screenshotSize, setScreenshotSize] = useState<string>('');
  const [isReceiptPreviewOpen, setIsReceiptPreviewOpen] = useState<boolean>(false);
  const [senderPhoneOrName, setSenderPhoneOrName] = useState(currentUser.name || '');
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState('');
  const [formError, setFormError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [completedTxRef, setCompletedTxRef] = useState('');

  // Copy status indicators
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || semesterPlan;

  // Calculate discount
  let finalPrice = selectedPlan ? selectedPlan.price : 300;
  if (appliedPromo && appliedPromo.isActive) {
    finalPrice = Math.max(0, Math.round(finalPrice * (1 - appliedPromo.discountPercentage / 100)));
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    const availableCodes = getPromoCodes();
    const match = availableCodes.find((c) => c.code.toUpperCase() === code && c.isActive);

    if (match) {
      setAppliedPromo(match);
      setPromoError('');
    } else {
      setPromoError('Invalid or expired code. Try SMART50 or ALEMAYEHU29');
    }
  };

  const handleCompleteSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!screenshotUrl) {
      setFormError('Please upload your payment screenshot (receipt) so Admin can verify and activate your membership.');
      return;
    }

    if (!senderPhoneOrName.trim()) {
      setFormError('Please enter your full name or phone number so Admin knows who sent the payment.');
      return;
    }

    setIsProcessing(true);

    // Auto-generate internal tracking ID for database consistency (student does not need to enter one)
    const generatedRef = 'SST-' + Math.floor(100000 + Math.random() * 900000);

    const channelName =
      paymentChannel === 'cbe'
        ? `CBE Bank (Acc: ${PAYMENT_ACCOUNTS.cbeAccount})`
        : paymentChannel === 'telebirr'
        ? `Telebirr (${PAYMENT_ACCOUNTS.telebirrPhone})`
        : paymentChannel === 'ebirr'
        ? `E-Birr (${PAYMENT_ACCOUNTS.eBirrPhone})`
        : 'Online Debit/Credit';

    setTimeout(() => {
      // Create transaction in 'pending' status for admin verification with uploaded screenshot
      const tx = addTransaction({
        userId: currentUser.id,
        userEmail: currentUser.email,
        userName: senderPhoneOrName.trim() || currentUser.name,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        amount: Number(finalPrice),
        currency: 'ETB ',
        paymentMethod: channelName,
        status: 'pending',
        referenceNo: generatedRef,
        screenshotUrl: screenshotUrl,
        screenshotName: screenshotName || 'Payment_Receipt.jpg'
      });

      setCompletedTxRef(tx.referenceNo || generatedRef);

      const pendingSub = {
        status: 'pending_verification' as const,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        amountPaid: Number(finalPrice),
        paymentMethod: tx.paymentMethod,
        transactionId: tx.referenceNo,
        screenshotUrl: screenshotUrl,
        screenshotName: screenshotName || 'Payment_Receipt.jpg',
        activatedAt: new Date().toISOString().split('T')[0]
      };

      const updatedUser: User = {
        ...currentUser,
        name: senderPhoneOrName.trim() || currentUser.name,
        subscription: pendingSub
      };

      setCurrentUser(updatedUser);
      updateStudentSubscription(currentUser.id, pendingSub);

      setIsProcessing(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleFinishAndEnter = () => {
    onSubscriptionSuccess(currentUser);
    onClose();
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/90 rounded-3xl max-w-2xl w-full p-5 sm:p-7 text-slate-100 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto animate-pulse">
              <Clock className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                Payment Submitted • Pending Admin Verification
              </span>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                Receipt Received!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                Your payment submission for <strong className="text-amber-300">{selectedPlan.name} ({selectedPlan.currency}{finalPrice})</strong> has been sent to Admin <strong className="text-indigo-300">Guduru Alemayehu</strong> for verification.
              </p>
            </div>

            {/* Receipt Summary */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Student Name:</span>
                <span className="text-white font-semibold">{senderPhoneOrName || currentUser.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Plan:</span>
                <span className="text-indigo-400 font-semibold">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Amount Transferred:</span>
                <span className="text-amber-400 font-bold text-sm">ETB {finalPrice}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Payment Channel:</span>
                <span className="text-slate-300">{paymentChannel === 'cbe' ? 'CBE Bank (1000521750255)' : 'Telebirr/E-Birr (0953201048)'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Receipt Screenshot:</span>
                {screenshotUrl ? (
                  <button
                    type="button"
                    onClick={() => setIsReceiptPreviewOpen(true)}
                    className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1.5 cursor-pointer bg-amber-500/10 hover:bg-amber-500/20 px-2 py-1 rounded-lg border border-amber-500/30 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Uploaded Screenshot</span>
                  </button>
                ) : (
                  <span className="text-emerald-400 font-semibold">Attached</span>
                )}
              </div>
            </div>

            <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 max-w-md mx-auto text-left text-[11px] text-amber-200/90 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                The Admin will verify your transaction against the CBE / Telebirr statement and activate your account. You can preview free sample questions and videos while waiting.
              </span>
            </div>

            <button
              onClick={handleFinishAndEnter}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Tutorial Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div>
            {/* Header with Official Payment Notice */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Student Membership Fee & Access</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                Smart Study Semester Membership
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg mx-auto">
                Send <strong className="text-amber-400 font-bold">300 ETB for ONE SEMESTER</strong> to unlock full tutorial questions, video lessons, cheat sheets, and 24/7 AI tutor.
              </p>
            </div>

            {/* HIGHLIGHTED PAYMENT ACCOUNTS BOX */}
            <div className="bg-gradient-to-br from-indigo-950/70 via-slate-950 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 mb-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Payment Accounts for Subscription Fee</h3>
                    <p className="text-[11px] text-slate-400">Account Holder: <strong className="text-amber-300">{PAYMENT_ACCOUNTS.accountHolder}</strong></p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                    300 ETB / SEMESTER
                  </span>
                </div>
              </div>

              {/* Accounts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                {/* Commercial Bank of Ethiopia (CBE) */}
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-purple-400 block flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      <span>CBE Bank Account</span>
                    </span>
                    <p className="font-mono text-sm sm:text-base font-extrabold text-white tracking-wider">
                      {PAYMENT_ACCOUNTS.cbeAccount}
                    </p>
                    <p className="text-[10px] text-slate-400">Commercial Bank of Ethiopia</p>
                  </div>

                  <button
                    onClick={() => handleCopy(PAYMENT_ACCOUNTS.cbeAccount, 'cbe')}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1 text-xs shrink-0 cursor-pointer"
                    title="Copy CBE Account Number"
                  >
                    {copiedItem === 'cbe' ? (
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-[10px]">{copiedItem === 'cbe' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Telebirr & E-Birr */}
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block flex items-center gap-1">
                      <Smartphone className="w-3 h-3" />
                      <span>Telebirr & E-Birr</span>
                    </span>
                    <p className="font-mono text-sm sm:text-base font-extrabold text-emerald-300 tracking-wider">
                      {PAYMENT_ACCOUNTS.telebirrPhone}
                    </p>
                    <p className="text-[10px] text-slate-400">Send money via Telebirr / E-Birr app</p>
                  </div>

                  <button
                    onClick={() => handleCopy(PAYMENT_ACCOUNTS.telebirrPhone, 'phone')}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1 text-xs shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedItem === 'phone' ? (
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-[10px]">{copiedItem === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Plans Selection Carousel */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {plans.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`rounded-xl p-2.5 sm:p-3 border transition-all cursor-pointer text-center relative ${
                      isSelected
                        ? 'bg-indigo-950/60 border-amber-500 ring-2 ring-amber-500/30'
                        : 'bg-slate-800/40 border-slate-700/70 hover:bg-slate-800/80'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-2 right-2 text-[8px] uppercase font-extrabold px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950">
                        {plan.badge}
                      </span>
                    )}
                    <h4 className="font-bold text-xs text-white truncate">{plan.name}</h4>
                    <p className="text-base sm:text-lg font-extrabold text-amber-400 mt-0.5">
                      {plan.currency}{plan.price}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">{plan.billingCycle}</p>
                  </div>
                );
              })}
            </div>

            {/* Payment Verification Form */}
            <form onSubmit={handleCompleteSubscription} className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3.5 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">Confirm Your Payment & Activate Account:</span>
                <span className="text-xs text-emerald-400 font-bold">Total: ETB {finalPrice}</span>
              </div>

              {/* Choose Which Channel You Paid Through */}
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Where did you send the fee?</label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPaymentChannel('cbe')}
                    className={`py-2 px-2 rounded-xl border text-[11px] font-medium flex items-center justify-center gap-1 transition-all ${
                      paymentChannel === 'cbe'
                        ? 'bg-purple-900/40 border-purple-500 text-white font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Building2 className="w-3 h-3 text-purple-400" />
                    <span>CBE Bank</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentChannel('telebirr')}
                    className={`py-2 px-2 rounded-xl border text-[11px] font-medium flex items-center justify-center gap-1 transition-all ${
                      paymentChannel === 'telebirr'
                        ? 'bg-emerald-900/40 border-emerald-500 text-white font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Smartphone className="w-3 h-3 text-emerald-400" />
                    <span>Telebirr</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentChannel('ebirr')}
                    className={`py-2 px-2 rounded-xl border text-[11px] font-medium flex items-center justify-center gap-1 transition-all ${
                      paymentChannel === 'ebirr'
                        ? 'bg-emerald-900/40 border-emerald-500 text-white font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Smartphone className="w-3 h-3 text-sky-400" />
                    <span>E-Birr</span>
                  </button>
                </div>
              </div>

              {/* Payment Receipt Screenshot Upload (replaces reference number input) */}
              <div className="space-y-3 pt-1">
                <PaymentScreenshotUpload
                  screenshotUrl={screenshotUrl}
                  screenshotName={screenshotName}
                  screenshotSize={screenshotSize}
                  onScreenshotChange={(url, name, size) => {
                    setScreenshotUrl(url);
                    setScreenshotName(name);
                    setScreenshotSize(size);
                    setFormError('');
                  }}
                  onRemoveScreenshot={() => {
                    setScreenshotUrl('');
                    setScreenshotName('');
                    setScreenshotSize('');
                  }}
                  onPreviewClick={() => setIsReceiptPreviewOpen(true)}
                  required={true}
                />

                {/* Student Full Name or Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">
                    Student Full Name or Phone Number: <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={senderPhoneOrName}
                    onChange={(e) => {
                      setSenderPhoneOrName(e.target.value);
                      setFormError('');
                    }}
                    placeholder="e.g. Abebe Bikila / 0912345678"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Enter the name or phone used during transfer so Admin can instantly recognize your payment.
                  </p>
                </div>
              </div>

              {formError && (
                <div className="flex items-center gap-2 text-xs text-rose-300 bg-rose-950/50 border border-rose-500/40 rounded-xl p-3">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Promo Code input */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Discount / Scholarship code (optional)"
                      className="w-full pl-8 pr-2 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 uppercase font-mono focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors shrink-0 cursor-pointer"
                  >
                    Apply
                  </button>
                </div>

                {appliedPromo && (
                  <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Coupon <strong>{appliedPromo.code}</strong> applied ({appliedPromo.discountPercentage}% OFF)!</span>
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{promoError}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="complete-subscribe-btn"
                disabled={isProcessing}
                className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-extrabold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50 mt-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin"></div>
                    <span>Uploading Screenshot & Submitting...</span>
                  </>
                ) : (
                  <>
                    <BadgeCheck className="w-4 h-4 text-slate-950" />
                    <span>Submit Payment Screenshot (ETB {finalPrice})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {onFreePreviewContinue && (
              <button
                type="button"
                onClick={() => {
                  onFreePreviewContinue();
                  onClose();
                }}
                className="w-full py-1 text-center text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              >
                Explore Free Preview Practice & Video Lessons First
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal for student to preview their uploaded screenshot */}
      {isReceiptPreviewOpen && screenshotUrl && (
        <ReceiptViewerModal
          isOpen={isReceiptPreviewOpen}
          onClose={() => setIsReceiptPreviewOpen(false)}
          imageUrl={screenshotUrl}
          title="Your Uploaded Payment Screenshot"
          studentName={senderPhoneOrName || currentUser.name}
          studentEmail={currentUser.email}
          amount={finalPrice}
          paymentMethod={
            paymentChannel === 'cbe'
              ? 'CBE Bank (1000521750255)'
              : paymentChannel === 'telebirr'
              ? 'Telebirr (0953201048)'
              : 'E-Birr (0953201048)'
          }
        />
      )}
    </div>
  );
};
