'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

interface FinalCTAProps {
  onOpenForm: () => void;
}

export default function FinalCTASection({ onOpenForm }: FinalCTAProps) {
  const t = useTranslations();

  return (
    <section className="bg-white pb-0">
      {/* CTA text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d2d2d] leading-tight mb-6"
        >
          We Can&apos;t Wait To See You{' '}
          <span className="font-script text-3xl sm:text-4xl lg:text-5xl">May 15th - 17th</span>
          {' '}For This Once A Year Global Elevate AI Live Masterclass
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base font-bold text-[#2d2d2d] uppercase tracking-[0.15em] mb-8"
        >
          CLICK BELOW &amp; SAVE YOUR SEAT NOW.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onClick={onOpenForm}
          className="btn-gold px-10 py-4 rounded-full text-lg inline-flex items-center gap-3 animate-pulse-glow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Zap className="w-5 h-5" />
          Enroll For Free Now
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Speaker photo - warm gradient bg like original */}
      <div className="bg-gradient-to-b from-white via-[#f5e6d0] to-[#d4b896] pt-8">
        <div className="max-w-3xl mx-auto flex justify-center">
          <img
            src="/images/cesarvega.png"
            alt="Cesar Vega - Elevate AI"
            className="h-auto object-contain"
            style={{ maxHeight: '320px' }}
          />
        </div>
      </div>
    </section>
  );
}
