'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';

interface SpeakersProps {
  onOpenForm: () => void;
}

export default function SpeakersSection({ onOpenForm }: SpeakersProps) {
  const t = useTranslations();

  const speakers = [
    { name: t.speakers.s1Name, role: t.speakers.s1Role, image: '/images/cesarvega.png' },
    { name: t.speakers.s2Name, role: t.speakers.s2Role, image: null },
    { name: t.speakers.s3Name, role: t.speakers.s3Role, image: null },
  ];

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block border border-[#c8956c] text-[#c8956c] px-6 py-2 rounded-full text-sm font-semibold mb-6"
        >
          Meet your speakers
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

        {/* Speaker headshots - large circles */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mb-12">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mx-auto mb-4 bg-gradient-to-br from-[#c8956c]/20 to-[#ffc927]/20">
                {speaker.image ? (
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-[#c8956c]">
                    {speaker.name.charAt(0)}
                  </div>
                )}
              </div>
              <p className="font-bold text-[#2d2d2d] text-lg">{speaker.name}</p>
              <p className="text-sm text-[#c8956c]">{speaker.role}</p>
            </motion.div>
          ))}
        </div>

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
          Reserve My Free Seat Now
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
