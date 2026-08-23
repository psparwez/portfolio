'use client';
import { FAQs } from '@/config/site-config';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';

export default function FAQsSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index]
    );
  };

  return (
    <div className='w-full'>
      <div className='grid w-full grid-cols-1 gap-5 transition-all duration-500 lg:grid-cols-2'>
        {FAQs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            className={`flex w-full select-none`}
          >
            <div className='w-full'>
              <motion.div
                onClick={() => handleToggle(index)}
                className='bg-very-dark-gray border-dark-gray-3 cursor-pointer rounded-[14px] border p-6 text-white transition-all duration-300 hover:bg-[#fff]/3'
              >
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex flex-col'>
                    <motion.p
                      animate={{
                        color: openIndices.includes(index)
                          ? 'var(--text-white)'
                          : 'var(--light-gray-2)',
                      }}
                      className='text-[17px] font-medium'
                    >
                      {faq.question}
                    </motion.p>
                  </div>
                  <motion.div className='bg-dark-gray-2 border-dark-gray-3 dark:border-dark-gray-4 flex shrink-0 items-center justify-center rounded-[10px] border p-2'>
                    <motion.svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d='M12 5V19M5 12H19'
                        className='stroke-gray-600 dark:stroke-[#d9d9d9]'
                        strokeWidth='2'
                        strokeLinecap='round'
                        style={{
                          opacity: openIndices.includes(index) ? 1 : 0.6,
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndices.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='bg-dark-gray-3 my-4 h-px w-full'
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className='text-light-gray-2 text-[16px] font-medium'
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
