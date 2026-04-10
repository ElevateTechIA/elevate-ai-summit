'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';

interface NavbarProps {
  onOpenForm: () => void;
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-[#e5610e]" />
            <span className="font-bold text-[#2d2d2d] text-sm leading-tight">
              Elevate AI
              <br />
              <span>Summit </span>
              <span className="text-[#e5610e]">2026</span>
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1 text-sm text-[#2d2d2d]/60 hover:text-[#2d2d2d]"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={onOpenForm}
              className="btn-red px-6 py-2.5 rounded-full text-sm flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              {t.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="text-[#2d2d2d]/60"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2d2d2d]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 py-4"
          >
            <button
              onClick={() => { onOpenForm(); setIsOpen(false); }}
              className="btn-red w-full py-3 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              {t.hero.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
