'use client';

import { useCountdown } from '@/app/hooks/useCountdown';
import { useTranslations } from '@/app/hooks/useTranslations';

interface CountdownTimerProps {
  targetDate: string;
  compact?: boolean;
  dark?: boolean;
}

function TimeUnit({ value, label, dark }: { value: number; label: string; dark?: boolean }) {
  return (
    <div className="countdown-unit">
      <span className={`countdown-value ${dark ? '!text-white' : ''}`}>
        {String(value).padStart(2, '0')}
      </span>
      <span className={`countdown-label ${dark ? '!text-white/70' : ''}`}>{label}</span>
    </div>
  );
}

function Separator({ dark }: { dark?: boolean }) {
  return (
    <span className={`text-xl font-bold self-start mt-1 ${dark ? 'text-white/50' : 'text-[#174a5b]/30'}`}>
      :
    </span>
  );
}

export default function CountdownTimer({ targetDate, compact, dark }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const t = useTranslations();

  if (compact) {
    return (
      <div className="flex gap-2 text-sm font-bold text-[#174a5b]">
        <span>{days}d</span>
        <span>{hours}h</span>
        <span>{minutes}m</span>
        <span>{seconds}s</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <TimeUnit value={days} label={t.countdown.days} dark={dark} />
      <Separator dark={dark} />
      <TimeUnit value={hours} label={t.countdown.hours} dark={dark} />
      <Separator dark={dark} />
      <TimeUnit value={minutes} label={t.countdown.minutes} dark={dark} />
      <Separator dark={dark} />
      <TimeUnit value={seconds} label={t.countdown.seconds} dark={dark} />
    </div>
  );
}
