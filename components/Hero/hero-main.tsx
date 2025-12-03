'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

import {
  AvatarMe,
  calendarIcon,
  calendarIconLight,
  emailIcon,
  emailIconLight,
  handGif,
} from '@/app/assets/assets';

import DynamicIcon from '../dynamic-icon';
import AnimatedImageGrid from '../ui/AnimatedImageGrid';
import ScheduleButton from '../ui/ScheduleButton';

export default function HeroMain() {
  const handleClick = () => {
    const email = process.env.NEXT_PUBLIC_TO_EMAIL;
    const subject = 'Schedule a Call';
    const body = "Hi, I'd like to schedule a call.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className='relative flex h-min w-full flex-none flex-col flex-nowrap items-center justify-start gap-5 overflow-visible p-0 lg:flex-row'>
      {/* Left side */}
      <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-center gap-2.5 self-start overflow-hidden p-0 md:w-min md:items-center'>
        <AnimatedImageGrid image={AvatarMe} />
      </div>
      {/* Right side */}
      <div className='relative flex h-auto w-full flex-col items-start gap-2 p-0'>
        <div className='flex flex-col gap-1'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className='flex items-center gap-1'
          >
            <span>
              <Image
                src={handGif}
                className='waveHand'
                alt='Hand Gesture'
                width={25}
                height={25}
              />
            </span>
            <p className='text-light-gray-2 text-[20px] leading-[1.2em] font-bold'>Hello, I Am</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className='text-3xl leading-[1.2em] font-bold text-white sm:text-4xl'
          >
            Pragadesh V
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className='text-light-gray-2 mb-4 leading-[150%] font-medium sm:text-[18px]'
        >
          Experienced web developer from Kerala, India, with a passion for crafting seamless digital
          experiences and a proven track record.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className='relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-3 p-0 sm:gap-5'
        >
          <EmailButton handleClick={handleClick} />

          <ScheduleButton
            darkIcon={calendarIcon}
            lightIcon={calendarIconLight}
            label='Schedule call'
          />
        </motion.div>
      </div>
    </section>
  );
}

const EmailButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      onClick={handleClick}
      className={
        'bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group relative flex w-full cursor-pointer flex-row flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-[10px] border p-[14px_18px] transition-all duration-300'
      }
    >
      <div className='flex items-center justify-center gap-2'>
        {/* Icon */}
        <div className='relative aspect-square h-5 w-5 overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
            <DynamicIcon
              darkImage={emailIcon}
              lightImage={emailIconLight}
              altText='Email me'
              className='block h-full w-full object-cover object-center'
              width={20}
              height={20}
            />
          </figure>
        </div>

        {/* Text */}
        <div className='h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
          <p className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-semibold whitespace-pre uppercase'>
            Email Me
          </p>
        </div>
      </div>
    </button>
  );
};
