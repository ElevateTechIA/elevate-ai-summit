'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function ValueSection() {
  const t = useTranslations();

  return (
    <section id="value" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d2d2d] mb-8 leading-tight"
            >
              AI Is <span className="font-script text-4xl sm:text-5xl lg:text-6xl">Moving</span> At
              <br />Lightning Speed...
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-[#2d2d2d]/70 mb-6 leading-relaxed"
            >
              But you don&apos;t need every tool, every update, or every hack.{' '}
              <strong className="text-[#2d2d2d]">
                What you need is the <span className="text-[#c49a6c]">one thing</span> every business owner, entrepreneur &amp; career achiever is starving for:
              </strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 relative inline-block"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-[#2d2d2d] relative z-10">MORE TIME.</span>
              <span className="absolute inset-0 -inset-x-4 -inset-y-2 border-2 border-[#ffca00] rounded-full z-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-[#2d2d2d]/70 mb-6 leading-relaxed"
            >
              Because when you buy back time and combine it with the right leverage you accelerate everything exponentially...
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg font-bold text-[#2d2d2d] leading-relaxed"
            >
              You accelerate your productivity, your marketing, your sales, your operations, your finances and your overall success.
            </motion.p>
          </div>

          {/* Right - image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src="/images/hero image esp.png"
              alt="AI Professional"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
