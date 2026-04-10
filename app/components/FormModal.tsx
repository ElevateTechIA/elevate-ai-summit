'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Loader2, CheckCircle, User, Mail, Phone } from 'lucide-react';
import { leadSchema, type LeadFormData } from '@/app/lib/schema';
import { saveLead } from '@/app/actions/saveLead';
import { useTranslations } from '@/app/hooks/useTranslations';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const t = useTranslations();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: '', email: '', phone: '', consent: false },
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus('loading');
    try {
      const existing = JSON.parse(localStorage.getItem('summit-leads') || '[]');
      existing.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('summit-leads', JSON.stringify(existing));

      const result = await saveLead(data);
      if (result.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-overlay" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dark header with logo */}
            <div className="bg-[#2d2d2d] px-6 py-5 text-center">
              <p className="text-white font-bold text-lg">
                Elevate AI<span className="font-light">&apos;</span> Summit{' '}
                <span className="text-[#e85b03] font-extrabold">2026</span>
              </p>
              <p className="text-white/90 text-sm mt-1 flex items-center justify-center gap-1">
                <span className="text-[#ffca00]">&#10070;</span>
                {t.form.headline}
                <span className="text-[#ffca00]">&#10070;</span>
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-10 text-center">
                <CheckCircle className="w-16 h-16 text-[#7be054] mx-auto mb-4" />
                <p className="text-xl font-bold text-[#174a5b]">{t.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <div className="relative">
                    <input
                      {...register('name')}
                      placeholder="First name"
                      className="w-full px-4 py-3.5 pr-12 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition text-base"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Best Email Address"
                      className="w-full px-4 py-3.5 pr-12 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition text-base"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <div className="relative">
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="*Optional Phone Number"
                      className="w-full px-4 py-3.5 pr-12 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition text-base"
                    />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* VIP checkbox */}
                <label className="flex items-center gap-3 cursor-pointer py-1">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-300 rounded accent-[#ffca00]"
                  />
                  <span className="text-[#2d2d2d] font-semibold text-base">{t.form.vip}</span>
                </label>

                {/* Consent - auto accepted by submitting */}
                <input type="hidden" {...register('consent', { value: true })} />

                {/* Submit - gold pill button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full py-5 rounded-full text-center disabled:opacity-60 transition-all"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.form.loading}
                    </span>
                  ) : (
                    <>
                      <span className="block text-lg font-extrabold">{t.form.cta}</span>
                      <span className="block text-sm font-semibold opacity-80 mt-0.5">{t.form.ctaSub}</span>
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-center text-red-500 text-sm">{t.form.error}</p>
                )}

                {/* Disclaimer */}
                <div className="flex gap-2 items-start pt-2">
                  <span className="text-gray-400 text-xs mt-0.5">&#128274;</span>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    {t.form.consent}{' '}
                    <a href="#" className="underline">{t.form.terms}</a> &amp;{' '}
                    <a href="#" className="underline">{t.form.privacy}</a>.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
