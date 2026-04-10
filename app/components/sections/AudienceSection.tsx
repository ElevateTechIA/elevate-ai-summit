'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function AudienceSection() {
  const t = useTranslations();
  const points = [t.audience.point1, t.audience.point2, t.audience.point3, t.audience.point4];

  return (
    <section className="py-16 sm:py-24 bg-[#f5f0eb] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-16 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 opacity-15" />
      <div className="absolute top-32 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-[#c49a6c] to-[#ffca00] opacity-10" />
      <div className="absolute bottom-24 left-16 w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 opacity-15" />
      <div className="absolute bottom-16 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block border border-[#c49a6c] text-[#c49a6c] px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            TO SUM IT UP...
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-[#2d2d2d] mb-12 leading-tight"
        >
          This Free Event Is
          <br />
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl">Built For You</span> If
        </motion.h2>

        {/* Arrow */}
        <div className="text-center mb-8">
          <span className="text-[#2d2d2d]/30 text-3xl">↓</span>
        </div>

        {/* 2x2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-[#7be054] shrink-0 mt-0.5" />
                <p className="text-[#2d2d2d]/80 leading-relaxed text-base">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
