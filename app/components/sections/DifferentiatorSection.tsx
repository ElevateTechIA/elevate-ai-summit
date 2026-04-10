'use client';

import { motion } from 'framer-motion';

export default function DifferentiatorSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#f5f0eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d2d2d] leading-tight mb-8"
        >
          This Event Isn&apos;t About{' '}
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl">Overwhelming</span>
          <br />
          You With Tech Demos Or Tools
          <br />
          You&apos;ll Forget About By May...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl sm:text-2xl text-[#2d2d2d]/80 leading-relaxed"
        >
          It&apos;s about showing you what&apos;s possible when you use{' '}
          <span className="font-extrabold text-[#2d2d2d] underline decoration-[#ef3341] decoration-2 underline-offset-4">
            THE RIGHT AI
          </span>
          <br />
          to reclaim your time &amp; multiply your results.
        </motion.p>
      </div>
    </section>
  );
}
