'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/app/hooks/useTranslations';

interface CTAButtonProps {
  variant?: 'red' | 'gold' | 'teal' | 'outline';
  text?: string;
  subText?: string;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export default function CTAButton({
  variant = 'red',
  text,
  subText,
  className = '',
  onClick,
  fullWidth,
}: CTAButtonProps) {
  const t = useTranslations();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const btnClass = `btn-${variant === 'outline' ? 'outline-red' : variant}`;

  return (
    <div className={`text-center ${className}`}>
      <motion.button
        onClick={handleClick}
        className={`${btnClass} px-10 py-4 rounded-md text-lg ${fullWidth ? 'w-full' : ''} animate-pulse-glow`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {text || t.hero.cta}
      </motion.button>
      {subText !== undefined ? (
        subText && <p className="mt-2 text-sm text-gray-500 font-semibold">{subText}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-500 font-semibold">{t.hero.ctaSub}</p>
      )}
    </div>
  );
}
