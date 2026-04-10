'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function SocialProofBar() {
  const t = useTranslations();

  return (
    <section className="py-6 bg-[#39aec0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white text-sm sm:text-base font-bold"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>{t.social.attended}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#ffc927]" />
            <span className="text-[#ffc927]">{t.social.demand}</span>
            <span>— {t.social.registered}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#ffc927] animate-pulse">{t.social.filling}</span>
        </motion.div>
      </div>
    </section>
  );
}
