'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle } from 'lucide-react';
import { leadSchema, type LeadFormData } from '@/app/lib/schema';
import { saveLead } from '@/app/actions/saveLead';
import { useTranslations } from '@/app/hooks/useTranslations';
import CountdownTimer from '../CountdownTimer';

const EVENT_DATE = '2026-05-15T18:00:00Z';

export default function FormSection() {
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

  if (status === 'success') {
    return (
      <section id="registration-form" className="py-20 bg-[#174a5b]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CheckCircle className="w-20 h-20 text-[#7be054] mx-auto mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-3">{t.form.success}</h3>
        </div>
      </section>
    );
  }

  return (
    <section id="registration-form" className="py-16 sm:py-24 bg-[#174a5b]">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Hurry text + countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-[#ef3341] font-extrabold text-lg uppercase mb-4">
            {t.hero.hurry}
          </p>
          <CountdownTimer targetDate={EVENT_DATE} dark />
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ef3341] to-[#e71222] px-6 py-5">
            <h3 className="text-white font-bold text-lg text-center">{t.form.headline}</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <input
                {...register('name')}
                placeholder={t.form.namePlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder={t.form.emailPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register('phone')}
                type="tel"
                placeholder={t.form.phonePlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[#2d2d2d] placeholder:text-gray-400 focus:outline-none focus:border-[#39aec0] focus:ring-1 focus:ring-[#39aec0] transition"
              />
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  {...register('consent')}
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-[#ef3341]"
                />
                <span className="text-xs text-gray-500 leading-relaxed">{t.form.consent}</span>
              </label>
              {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-red w-full py-4 rounded-md text-lg flex items-center justify-center gap-2 disabled:opacity-60 animate-pulse-glow"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.form.loading}
                </>
              ) : (
                t.form.cta
              )}
            </button>

            <p className="text-center text-[#ef3341] text-sm font-bold">{t.form.ctaSub}</p>

            {status === 'error' && (
              <p className="text-center text-red-500 text-sm">{t.form.error}</p>
            )}

            <div className="text-center text-xs text-gray-400 pt-3 border-t border-gray-100">
              <a href="#" className="hover:underline">{t.form.terms}</a>
              {' | '}
              <a href="#" className="hover:underline">{t.form.privacy}</a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
