"use client"
import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, stackIcon } from '@/app/assets/assets'
import { myStack } from '@/data'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MyStack() {
    return (
        <div className='flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full '>
            <div className="flex-none h-auto relative w-full">
                <SectionHeading icon={stackIcon} title='My Stacks' description='Commitment to staying updated with the latest design trends and techniques.' />
            </div>
            <div className="w-full ">
                <motion.ul
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    className="grid gap-[10px] flex-none auto-rows-min h-min justify-center overflow-visible relative p-0 w-full grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(2,min-content)] ">
                    {
                        myStack?.map((stack, index) => (

                            <motion.li
                                key={stack.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{
                                    once: true,
                                }}
                                className="w-full">
                                <Link href={stack.link} className='w-full bg-very-dark-gray border border-dark-gray-3 rounded-xl flex cursor-pointer items-center flex-nowrap gap-[10px] h-min justify-start overflow-visible relative p-[14px_24px_14px_14px] group hover:bg-almost-black transition-all duration-500'>
                                    {/* logo  */}
                                    <div className="bg-dark-gray-4 border border-border-color rounded-[7px] flex items-center flex-none flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-2 relative w-min  ">
                                        <div className="aspect-square flex-none h-auto overflow-hidden relative w-[30px]  ">
                                            <figure className='relative inset-0 rounded-[inherit]  '>
                                                <Image src={stack.logo} alt={stack.title} className='block w-full h-full rounded-[inherit] object-cover object-center ' />

                                            </figure>
                                        </div>
                                    </div>
                                    {/* text  */}
                                    <div className="flex items-start flex-1 flex-col flex-nowrap gap-0 h-min justify-start overflow-visible p-0 relative">
                                        <div className="flex flex-col flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                                            <p className='text-light-gray-4 font-semibold text-[18px]  '>{stack.title}</p>
                                        </div>
                                        <div className="flex flex-col flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                                            <p className='text-light-gray-2 font-medium text-[15px]  '>{stack.description}</p>
                                        </div>

                                    </div>
                                    {/* arrow  */}
                                    <div className="aspect-square flex-none h-auto w-[24px] overflow-hidden relative opacity-50 group-hover:opacity-100 ">
                                        <div className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full">
                                            <Image src={rightArrow} alt='arrow' width={24} height={24} className='block w-full h-full rounded-full object-cover object-center transition-all duration-500 group-hover:-rotate-45' />
                                        </div>
                                    </div>
                                </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>

        </div>
    )
}
