'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function CredibilitySection() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-24 bg-[#2d2d2d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8"
            >
              We Did The Work...
              <br />
              You Get The <span className="font-script text-4xl sm:text-5xl lg:text-6xl">Shortcut</span>.
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-white/75 leading-relaxed"
              >
                Our team spent hundreds of hours sitting down with top AI founders, researchers, and builders.{' '}
                <strong className="text-white">Not to chase hype... but to understand what actually works.</strong>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-white/75 leading-relaxed"
              >
                They{' '}
                <strong className="text-[#c49a6c]">studied the tools, the breakthroughs, and the real-world ways AI is already helping</strong>{' '}
                entrepreneurs, business owners, and professionals move faster and think bigger.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-white/75 leading-relaxed"
              >
                Then they distilled everything into one simple mission:{' '}
                <strong className="text-white">make AI practical, clear, and immediately useful</strong>{' '}
                so you can apply it in your life and business without the overwhelm.
              </motion.p>
            </div>
          </div>

          {/* Right - photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <img src="/images/cesarvega.png" alt="Speaker" className="rounded-xl w-full h-48 object-cover object-top" />
            <img src="/images/hero image.png" alt="Speaker" className="rounded-xl w-full h-48 object-cover mt-8" />
            <img src="/images/hero image esp.png" alt="Speaker" className="rounded-xl w-full h-48 object-cover -mt-4" />
            <img src="/images/cesarvega-ori.png" alt="Speaker" className="rounded-xl w-full h-48 object-cover mt-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
