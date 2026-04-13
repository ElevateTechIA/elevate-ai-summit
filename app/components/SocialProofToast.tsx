'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = [
  { name: 'Sarah', city: 'Austin' },
  { name: 'Michael', city: 'Miami' },
  { name: 'Jessica', city: 'Denver' },
  { name: 'David', city: 'Chicago' },
  { name: 'Emily', city: 'Portland' },
  { name: 'Carlos', city: 'Houston' },
  { name: 'Anna', city: 'Seattle' },
  { name: 'James', city: 'Atlanta' },
  { name: 'Maria', city: 'Phoenix' },
  { name: 'Alex', city: 'New York' },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState<typeof names[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      const person = names[Math.floor(Math.random() * names.length)];
      setCurrent(person);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const timeout = setTimeout(show, 5000);
    const interval = setInterval(show, 15000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && current && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-6 left-6 z-40 bg-white rounded-lg shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 max-w-xs"
        >
          <div className="w-10 h-10 rounded-full bg-[#ffc927]/20 flex items-center justify-center text-[#c8956c] font-bold text-sm">
            {current.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm text-[#2d2d2d]">
              <strong>{current.name}</strong> from <strong>{current.city}</strong>
            </p>
            <p className="text-xs text-gray-500">
              enrolled in <strong>Elevate AI Masterclass</strong>
            </p>
            <p className="text-xs text-gray-400">about 1 hour ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
