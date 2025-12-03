'use client';
import { motion } from 'motion/react';
import type { FormEvent } from 'react';
import { useState } from 'react';

import { formVariants } from '@/animation/varients';

import Loader from '../ui/Loader';
import SuccessForm from '../ui/SuccessForm';
export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setLoader(true);

    // TODO: API CALL

    setTimeout(() => {
      setData({
        name: '',
        email: '',
        message: '',
      });
      setLoader(false);
      setErrorOnSubmit(false);

      setTimeout(() => {
        setIsSubmitting(false);
      }, 7000);
    }, 4000);
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={formVariants as any}
      viewport={{ once: true }}
      className={`${isSubmitting ? 'gap-0' : 'gap-0'} flex w-full flex-col`}
    >
      {isSubmitting ? (
        <div className='bg-dark-gray-2 border-dark-gray-3 relative flex h-full min-h-[350px] w-full flex-col items-center justify-center rounded-xl border select-none'>
          {loader ? (
            <Loader />
          ) : (
            <>
              {' '}
              <SuccessForm action={errorOnSubmit ? 'error' : 'success'} />{' '}
            </>
          )}
        </div>
      ) : (
        <form
          method='POST'
          onSubmit={handleSubmit}
          className='grid gap-4'
        >
          {/* Input Fields */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <input
              className={`input-box`}
              name='Name'
              placeholder='Name'
              type='text'
              aria-label='Full Name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              pattern='[A-Za-z\s]{3,}'
            />
            <input
              className='input-box'
              name='Email'
              placeholder='Email'
              type='email'
              aria-label='Email Address'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            />
          </div>
          {/* Textarea */}
          <textarea
            className='input-box max-h-96 min-h-56 resize-y'
            name='Message'
            placeholder='Message'
            rows={8}
            aria-label='Message'
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          />

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-almost-black hover:bg-dark-gray-4 w-full rounded-lg p-4 font-medium text-white transition-all'
          >
            Send Your Message
          </button>
        </form>
      )}

      <div />
    </motion.div>
  );
}
