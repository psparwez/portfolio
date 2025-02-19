"use client"
import { AvatarMe, calendarIcon, handGif } from '@/app/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Mail } from 'lucide-react'
import Button from '../ui/Button'

import { motion } from "framer-motion"
import AnimatedImageGrid from '../ui/AnimatedImageGrid'
import Brandcontainer from '../Brandcontainer/Brandcontainer'
import CounterContainer from '../CounterContainer/CounterContainer'
import ScheduleButton from '../ui/ScheduleButton'

export default function Hero() {
    const handleClick = () => {
        const email = process.env.NEXT_PUBLIC_TO_EMAIL;
        const subject = "Schedule a Call";
        const body = "Hi, I'd like to schedule a call.";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <div className="flex flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible p-0 relative w-full ">
            {/* top  */}
            <section className="flex flex-col lg:flex-row items-center flex-none flex-nowrap gap-[20px] h-min justify-start overflow-visible p-0 relative w-full ">
                <div className="flex items-start w-full md:items-center flex-none flex-nowrap flex-col gap-[10px] h-min justify-center p-0 relative md:w-min overflow-hidden">
                    <div
                        className="aspect-auto flex-none h-auto w-[260px] relative bg-image-bg rounded-lg">
                        <figure className='h-full w-full'>
                            <Image src={AvatarMe} alt='Avatar' width={300} height={300} className='w-full h-full object-cover' />
                            <AnimatedImageGrid image={AvatarMe} />
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 p-0 relative w-full h-auto">
                    <div className="flex flex-col gap-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-1">
                            <span>
                                <Image src={handGif} className='waveHand' alt="Hand Gesture" width={25} height={25} />
                            </span>
                            <p className="text-light-gray-2 font-bold leading-[1.2em] text-[20px]">Hello, I Am</p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl leading-[1.2em] font-bold text-white">
                            Pragadesh V
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-[18px] text-light-gray-2 font-medium leading-[150%] mb-4">
                        Experienced web developer from Kerala, India, with a passion for crafting seamless digital experiences and a proven track record.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex  items-start flex-none flex-nowrap  w-full gap-5 h-min justify-start p-0 relative">
                        <Button onClick={handleClick} position='left' icon={<Mail size={18} />} title='Email Me' />
                        {/* <Button position='left' icon={<Calendar1 size={18} />} 
                        title='Schedule Call' /> */}
                        <ScheduleButton icon={calendarIcon} label='Schedule call' />
                    </motion.div>
                </div>
            </section>
            {/* middle  */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <Brandcontainer />
                {/* bottom  */}
                <CounterContainer />

            </motion.div>
        </div>
    )
}
