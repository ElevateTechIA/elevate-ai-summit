'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

interface SpeakersProps {
  onOpenForm: () => void;
}

export default function SpeakersSection({ onOpenForm }: SpeakersProps) {
  const t = useTranslations();

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-[#c8956c] text-[#c8956c] px-6 py-2 rounded-full text-sm font-semibold mb-6"
        >
          Meet your instructor
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d2d2d] mb-4"
        >
          {t.speakers.subheadline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-[#2d2d2d]/70 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {t.speakers.intro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-[#2d2d2d] underline mb-12"
        >
          Without the overwhelm.
        </motion.p>

        {/* Single instructor headshot - larger and centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden mb-5 bg-linear-to-br from-[#c8956c]/20 to-[#ffc927]/20 ring-4 ring-[#ffca00]/30 shadow-xl">
            <img
              src="/images/cesarvega.png"
              alt={t.speakers.s1Name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="font-bold text-[#2d2d2d] text-2xl">{t.speakers.s1Name}</p>
          <p className="text-base text-[#c8956c] font-semibold">{t.speakers.s1Role}</p>
          <p className="text-sm text-[#2d2d2d]/60 max-w-lg mt-3 leading-relaxed">
            {t.speakers.s1Bio}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
    </section>
  );
}
