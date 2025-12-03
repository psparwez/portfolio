'use client';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';

import { multiplyIcon, multiplyIconLight } from '@/app/assets/assets';
import type { FAQ as FAQType } from '@/types';

import DynamicIcon from '../dynamic-icon';

type FAQProps = {
  data: FAQType[];
};

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index]
    );
  };

  return (
    <div className='w-full'>
      <div className='grid w-full grid-cols-1 gap-5 transition-all duration-500 lg:grid-cols-2'>
        {data.map((faq, index) => (
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
                  <motion.div
                    className='bg-dark-gray-2 border-dark-gray-4 flex shrink-0 items-center justify-center rounded-[10px] border p-2'
                    animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                  >
                    <DynamicIcon
                      darkImage={multiplyIcon}
                      lightImage={multiplyIconLight}
                      altText='toggle icon'
                      className='rotate-45 transition-opacity duration-500'
                      style={{
                        opacity: openIndices.includes(index) ? 1 : 0.6,
                      }}
                      width={20}
                      height={20}
                    />
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
};

export default FAQ;
