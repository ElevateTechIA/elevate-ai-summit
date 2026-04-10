'use client';

import { motion } from 'framer-motion';
import { BookOpen, Rocket, Target } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';
import CTAButton from '../CTAButton';

const dayIcons = [BookOpen, Rocket, Target];
const dayColors = ['#ef3341', '#39aec0', '#ffc927'];

interface AgendaProps {
  onOpenForm: () => void;
}

export default function AgendaSection({ onOpenForm }: AgendaProps) {
  const t = useTranslations();

  const days = [
    {
      label: t.agenda.d1Label, title: t.agenda.d1Title, date: t.agenda.d1Date,
      items: [t.agenda.d1i1, t.agenda.d1i2, t.agenda.d1i3, t.agenda.d1i4],
    },
    {
      label: t.agenda.d2Label, title: t.agenda.d2Title, date: t.agenda.d2Date,
      items: [t.agenda.d2i1, t.agenda.d2i2, t.agenda.d2i3, t.agenda.d2i4],
    },
    {
      label: t.agenda.d3Label, title: t.agenda.d3Title, date: t.agenda.d3Date,
      items: [t.agenda.d3i1, t.agenda.d3i2, t.agenda.d3i3, t.agenda.d3i4],
    },
  ];

  return (
    <section id="agenda" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#174a5b] mb-3">
            {t.agenda.headline}
          </h2>
          <p className="text-lg text-[#2d2d2d]/60">{t.agenda.subheadline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {days.map((day, i) => {
            const Icon = dayIcons[i];
            return (
              <motion.div
                key={day.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                {/* Day header */}
                <div className="p-6 text-white" style={{ background: `linear-gradient(to bottom right, ${dayColors[i]}, ${dayColors[i]}cc)` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-white/20">
                      {day.label}
                    </span>
                    <Icon className="w-6 h-6 text-white/80" />
                  </div>
                  <h3 className="text-xl font-bold">{day.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{day.date}</p>
                </div>

                {/* Day items */}
                <div className="p-6 space-y-4">
                  {day.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: dayColors[i] }}
                      />
                      <p className="text-[#2d2d2d]/70 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <CTAButton variant="red" onClick={onOpenForm} className="mt-12" />
      </div>
    </section>
  );
}
