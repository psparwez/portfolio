'use client';
import { motion } from 'motion/react';

import { SITE_CONFIG } from '@/config/site-config';
import { ICONS } from './icons';
import ScheduleButton from './schedule-button';
import AnimatedImageGrid from './animated-image-grid';
import LogosCarousel from './logos-carousel';
import CounterContainer from './counter-container';

export function HeroMain() {
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
        <AnimatedImageGrid image={SITE_CONFIG.profile.avatar} />
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1080 1080'
                width='25'
                height='25'
                preserveAspectRatio='xMidYMid slice'
              >
                <defs>
                  <clipPath id='__lottie_element_2'>
                    <rect
                      width='1080'
                      height='1080'
                      x='0'
                      y='0'
                    ></rect>
                  </clipPath>
                </defs>
                <g clipPath='url(#__lottie_element_2)'>
                  <g
                    transform='matrix(0.9783499240875244,-0.20695760846138,0.20695760846138,0.9783499240875244,458.7689208984375,548.4976806640625)'
                    opacity='1'
                  >
                    <g
                      opacity='1'
                      transform='matrix(1,0,0,1,0,0)'
                    >
                      <path
                        fill='rgb(255,220,93)'
                        fillOpacity='1'
                        d=' M302.614013671875,-40.48400115966797 C272.385009765625,-53.858001708984375 229.19900512695312,-35.930999755859375 198.64199829101562,7.408999919891357 C178.572998046875,35.862998962402344 172.66200256347656,76.37999725341797 146.3040008544922,80.60399627685547 C136.23599243164062,82.2239990234375 130.76600646972656,76.0979995727539 127.9209976196289,67.2760009765625 C124.9219970703125,52.38999938964844 125.5790023803711,29.384000778198242 131.13600158691406,-2.7909998893737793 C131.13600158691406,-2.7909998893737793 191.11099243164062,-272.35198974609375 191.11099243164062,-272.35198974609375 C195.88299560546875,-292.95001220703125 184.69900512695312,-312.8900146484375 157.7760009765625,-319.3909912109375 C130.85400390625,-325.8919982910156 110.6050033569336,-312.6940002441406 105.81199645996094,-292.09600830078125 C105.81199645996094,-292.09600830078125 52.27199935913086,-47.685001373291016 52.27199935913086,-47.685001373291016 C41.48099899291992,6.293000221252441 21.474000930786133,-3.5139999389648438 26.31100082397461,-64.64900207519531 C26.31100082397461,-64.64900207519531 26.31100082397461,-64.6709976196289 26.31100082397461,-64.6709976196289 C26.31100082397461,-64.6709976196289 41.654998779296875,-351.239990234375 41.654998779296875,-351.239990234375 C42.90299987792969,-373.3909912109375 25.87299919128418,-391.4930114746094 0.7009999752044678,-392.45599365234375 C-24.47100067138672,-393.41900634765625 -42.61600112915039,-378.3169860839844 -43.90800094604492,-356.18701171875 C-43.90800094604492,-356.18701171875 -58.529998779296875,-62.67900085449219 -58.529998779296875,-62.67900085449219 C-61.65999984741211,-3.4260001182556152 -82.87000274658203,-25.753000259399414 -87.46700286865234,-68.677001953125 C-87.46700286865234,-68.677001953125 -121.48200225830078,-306.12701416015625 -121.48200225830078,-306.12701416015625 C-124.96199798583984,-328.5190124511719 -145.95399475097656,-343.9949951171875 -171.12600708007812,-339.9670104980469 C-196.29800415039062,-335.9169921875 -211.50999450683594,-315.10101318359375 -208.02999877929688,-292.7090148925781 C-208.02999877929688,-292.7090148925781 -175.30599975585938,-75.7030029296875 -175.30599975585938,-75.7030029296875 C-162.3260040283203,7.145999908447266 -179.29100036621094,30.086000442504883 -207.2209930419922,-59.87699890136719 C-207.2209930419922,-59.87699890136719 -242.11099243164062,-191.75799560546875 -242.11099243164062,-191.75799560546875 C-247.802001953125,-212.9250030517578 -268.6619873046875,-226.0570068359375 -294.8630065917969,-218.7030029296875 C-321.0639953613281,-211.34800720214844 -332.3590087890625,-190.27000427246094 -326.69000244140625,-169.10299682617188 C-326.69000244140625,-169.10299682617188 -292.5870056152344,-45.145999908447266 -292.5870056152344,-45.145999908447266 C-278.3370056152344,44.09600067138672 -278.3370056152344,79.31199645996094 -278.3370056152344,140.75399780273438 C-278.3370056152344,202.1999969482422 -250.0780029296875,392.5010070800781 -33.92599868774414,392.5010070800781 C182.22799682617188,392.5010070800781 226.68099975585938,172.92999267578125 228.74099731445312,159.0330047607422 C228.74099731445312,159.0330047607422 231.43299865722656,126.63600158691406 254.04400634765625,96.31999969482422 C286.1960144042969,53.220001220703125 308.7659912109375,27.240999221801758 322.4469909667969,11.699000358581543 C329.38299560546875,3.8410000801086426 336.12799072265625,-25.665000915527344 302.614013671875,-40.48400115966797z'
                      ></path>
                    </g>
                    <g
                      opacity='1'
                      transform='matrix(1,0,0,1,0,0)'
                    >
                      <path
                        fill='rgb(239,150,69)'
                        fillOpacity='1'
                        d=' M139.23500061035156,80.38800048828125 C132.66799926757812,77.71700286865234 127.11100006103516,70.84300231933594 126.45099639892578,55.89099884033203 C85.03900146484375,61.560001373291016 29.024999618530273,73.16100311279297 -14.074000358581543,115.3219985961914 C-70.02200317382812,170.01800537109375 -79.56400299072266,229.14300537109375 -79.1050033569336,268.6960144042969 C-78.73300170898438,300.58599853515625 -61.33100128173828,315.6919860839844 -56.23099899291992,268.4339904785156 C-49.81800079345703,208.74099731445312 -6.281000137329102,90.19400024414062 139.23500061035156,80.38800048828125z'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
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
            {SITE_CONFIG.profile.displayName}
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
          {SITE_CONFIG.profile.description}
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
          className='relative flex h-min w-full items-start justify-start gap-3 p-0 sm:gap-5'
        >
          <EmailButton handleClick={handleClick} />

          <ScheduleButton label='Schedule call' />
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
        <div className='relative flex h-5 w-5 items-center justify-center opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <ICONS.email />
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

export function HeroContainer() {
  return (
    <>
      {/* middle  */}
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
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        <LogosCarousel />
        {/* bottom  */}
        <CounterContainer />
      </motion.div>
    </>
  );
}
