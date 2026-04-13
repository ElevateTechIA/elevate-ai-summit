'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, Calendar, Clock, Timer } from 'lucide-react';
import { useTranslations } from '@/app/hooks/useTranslations';
import CountdownTimer from '../CountdownTimer';

const EVENT_DATE = '2026-05-15T18:00:00Z';

interface HeroProps {
  onOpenForm: () => void;
}

export default function HeroSection({ onOpenForm }: HeroProps) {
  const t = useTranslations();

  return (
    <>
      {/* Top gold banner */}
      <div className="bg-[#ffca00] py-2.5 text-center">
        <p className="text-[#174a5b] font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          {t.hero.tagline}
        </p>
      </div>

      {/* Hero - navy to amber gradient like original */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3350 30%, #4a3a2a 65%, #8a6530 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - text */}
            <div>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <p className="text-white text-2xl font-bold leading-tight">
                  Elevate AI
                  <br />
                  <span className="text-white">Masterclass </span>
                  <span className="text-[#e85b03] font-extrabold">2026</span>
                </p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold text-white leading-[1.15] mb-6"
              >
                {t.hero.headline}
                <br />
                But Someone Using It
                <br />
                <span className="text-[#ffca00]">Effectively Will</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-lg"
              >
                {t.hero.sub}
              </motion.p>

              {/* Event detail pills - outlined */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <div className="flex items-center gap-2 border border-white/40 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
                  <Calendar className="w-4 h-4 text-white/60" />
                  {t.hero.date}
                </div>
                <div className="flex items-center gap-2 border border-white/40 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
                  <Clock className="w-4 h-4 text-white/60" />
                  {t.hero.time}
                </div>
                <div className="flex items-center gap-2 border border-white/40 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
                  <Timer className="w-4 h-4 text-white/60" />
                  {t.hero.duration}
                </div>
              </motion.div>

              {/* CTA gold button */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={onOpenForm}
                className="btn-gold px-10 py-4 rounded-full text-lg flex items-center gap-3 animate-pulse-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-5 h-5" />
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Available / Free / Virtual */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex items-center gap-3 mt-5 text-sm text-white/70"
              >
                <span className="w-2 h-2 bg-[#7be054] rounded-full" />
                <span>{t.hero.seats}</span>
                <span>•</span>
                <span>{t.hero.free}</span>
                <span>•</span>
                <span>{t.hero.virtual}</span>
              </motion.div>
            </div>

            {/* Right - speaker image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block"
            >
              <img
                src="/images/hero image.png"
                alt="Speakers"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaker name ticker */}
      <div className="bg-white py-3 overflow-hidden border-b border-gray-100">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {['Cesar Vega', 'AI Strategy Expert', 'Automation Specialist', 'Growth Hacker', 'Data Scientist', 'UX Designer', 'Cloud Architect', 'DevOps Lead'].map((name, i) => (
            <span key={i} className="mx-8 text-[#174a5b] font-bold text-sm tracking-wide">
              {name}
            </span>
          ))}
          {['Cesar Vega', 'AI Strategy Expert', 'Automation Specialist', 'Growth Hacker', 'Data Scientist', 'UX Designer', 'Cloud Architect', 'DevOps Lead'].map((name, i) => (
            <span key={`dup-${i}`} className="mx-8 text-[#174a5b] font-bold text-sm tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
