'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, Calendar, Clock } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

interface PowerProps {
  onOpenForm: () => void;
}

export default function PowerSection({ onOpenForm }: PowerProps) {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#2d2d2d] leading-tight mb-6"
        >
          That&apos;s The <span className="font-script text-4xl sm:text-5xl lg:text-7xl">Power</span> Of AI
          <br />
          When It&apos;s Used <span className="font-script text-4xl sm:text-5xl lg:text-7xl">Right</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-[#2d2d2d]/70 font-semibold mb-8 max-w-2xl mx-auto"
        >
          In The Elevate AI Masterclass You&apos;ll Discover Exactly How To Implement AI Into{' '}
          <span className="underline font-script text-[#c49a6c] text-xl sm:text-2xl">Your</span> Life With Confidence
        </motion.p>

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-3 text-[#2d2d2d]"
        >
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <Calendar className="w-5 h-5 text-[#c49a6c]" />
            MAY 15-17, 2026
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <Clock className="w-5 h-5 text-[#c49a6c]" />
            11:00AM PT | 2:00PM ET
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-xs sm:text-sm uppercase tracking-[0.15em] text-[#2d2d2d]/50 font-semibold mb-10"
        >
          3 HOURS PER DAY | JOIN VIRTUALLY FROM ANYWHERE
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onClick={onOpenForm}
          className="btn-gold px-10 py-4 rounded-full text-lg inline-flex items-center gap-3 animate-pulse-glow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Zap className="w-5 h-5" />
          {t.hero.cta}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
