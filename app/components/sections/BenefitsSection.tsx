'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/app/hooks/useTranslations';

interface BenefitsProps {
  onOpenForm: () => void;
}

export default function BenefitsSection({ onOpenForm }: BenefitsProps) {
  const t = useTranslations();

  const cards = [
    { title: t.benefits.card1Title, desc: t.benefits.card1Desc, img: '/images/hero image esp.png' },
    { title: t.benefits.card2Title, desc: t.benefits.card2Desc, img: '/images/hero.png' },
    { title: t.benefits.card3Title, desc: t.benefits.card3Desc, img: '/images/cesarvega.png' },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#faf8f5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Text */}
              <div className="p-6 pb-4">
                <p className="text-[#c8956c] font-bold text-sm uppercase tracking-wider mb-3">
                  IMAGINE...
                </p>
                <p className="text-[#2d2d2d] text-lg leading-relaxed">
                  <strong>{title}</strong> {desc}
                </p>
              </div>
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
