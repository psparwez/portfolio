"use client"
import { briefcaseIconley } from '@/app/assets/assets'
import { myExperience } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionHeading from '../SectionHeading'
import { motion } from "framer-motion"

export default function MyExperience() {
    return (
        <div className='flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full '>
            <div className="flex-none h-auto relative w-full">
                <SectionHeading icon={briefcaseIconley} title='My experience' description='Navigating diverse environments with adaptability and expertise for holistic solutions.' />
            </div>
            <div className="w-full">
                <motion.ul
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    className='flex flex-none flex-col gap-[10px] h-min justify-start overflow-visible p-0 relative w-full flex-nowrap items-start '>
                    {
                        myExperience?.map((exp, index) => (
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{
                                    once: true,
                                }}
                                key={exp.id} className='bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-6 relative'>
                                <div className="w-full flex justify-between flex-none items-center h-min flex-nowrap overflow-visible p-0 relative">
                                    <div className="flex items-center flex-1 gap-2 h-min justify-start overflow-visible p-0 relative ">
                                        <div className="bg-dark-gray-4 border border-border-color rounded-lg flex float-none gap-[10px] h-min justify-center items-center overflow-visible p-[10px] relative w-min ">
                                            <div className="flex-none aspect-square h-auto overflow-visible relative w-[30px] ">
                                                <figure className='block absolute inset-0'>
                                                    <Image width={30} height={30} src={exp.logo} alt="icon" className='block w-full h-full rounded-[inherit] object-cover object-center ' />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="flex float-none flex-nowrap items-start gap-[6px] h-min justify-center overflow-visible p-0 relative w-min ">
                                            <div className="gap-0 flex h-min justify-start overflow-visible items-start flex-col flex-nowrap">
                                                <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start flex-shrink-0">
                                                    <p className='font-bold  text-[20px]  text-light-gray-4'>
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start flex-shrink-0">
                                                    <Link href={exp.link} className='font-medium cursor-pointer  text-[15px]  text-light-gray-2'>
                                                        {exp.link}
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="bg-dark-gray-2 border border-dark-gray-3 flex flex-none items-center justify-start flex-nowrap gap-[10px] h-min overflow-visible p-[4px_10px] relative w-min rounded-3xl ">
                                                <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start flex-shrink-0">
                                                    <p className='font-medium text-[14px]  text-light-gray-2'>
                                                        {exp.label}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex flex-nowrap gap-[10px] h-min overflow-visible p-0 w-min items-center flex-none whitespace-pre">
                                        <h3 className='text-light-gray-4 font-bold text-[22px] leading-[1.2em] '>
                                            {exp.year}

                                        </h3>
                                    </div>
                                </div>
                                <div className="border border-dark-gray-3 rounded-xl bg-darkest-gray flex flex-none flex-col flex-nowrap gap-1 h-min justify-start overflow-visible p-4 relative w-full">
                                    <div className="flex flex-none flex-shrink-0 flex-col justify-start relative whitespace-pre-wrap w-full break-words">
                                        <p className='text-light-gray-4 text-base font-bold'>
                                            {exp.title}
                                        </p>
                                    </div>
                                    <div className="flex flex-none flex-shrink-0 flex-col justify-start relative whitespace-pre-wrap w-full break-words">
                                        <p className='text-light-gray-2 text-[15px] text-base font-medium '>
                                            {exp.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>

        </div>
    )
}
