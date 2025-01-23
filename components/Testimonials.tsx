"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { locationIcon, starLig, XLogo } from '@/app/assets/assets'
import { testimonials } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Testimonials() {
    return (
        <div className='flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full '>
            <div className="flex-none h-auto relative w-full">
                <SectionHeading icon={starLig} title='Words From Happy Clients' description='Discover what satisfied clients have to say about their experiences working with me.' />
            </div>

            <div className="grid flex-none gap-[10px] h-min justify-center overflow-visible p-0 relative w-full grid-cols-1 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)] ">
                {testimonials?.map((testimonial, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{
                            once: true,
                        }}
                        className="h-auto justify-self-start relative w-full" key={testimonial.id}
                    >

                        <div className="border bg-very-dark-gray border-dark-gray-3 rounded-xl flex flex-col gap-5 h-min justify-start items-start flex-nowrap overflow-visible p-5 relative ">

                            <div className="flex flex-none flex-nowrap gap-2 h-min justify-start overflow-visible p-0 relative w-full ">

                                <div className="border border-border-color bg-dark-gray-3 rounded-lg aspect-square flex flex-none items-center flex-nowrap gap-1 h-auto justify-center overflow-hidden p-0 relative w-[50px] ">
                                    <div className="flex-1 w-full overflow-visible relative ">
                                        <figure className='relative w-full h-full inset-0 rounded-[inherit] '>
                                            <Image width={50} height={50} src={testimonial.avatar} alt="Avatar" className='block w-full h-full rounded-[inherit] object-cover object-center' />

                                        </figure>
                                    </div>
                                </div>

                                <div className="flex items-start flex-1 flex-col flex-nowrap gap-1 h-min justify-center overflow-visible p-0 relative  ">
                                    <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words  ">
                                        <p className='text-light-gray-4 font-bold  text-[18px]'>{testimonial.name}</p>
                                    </div>
                                    <div className="flex gap-[2px] flex-nowrap flex-none items-center h-min justify-start overflow-visible p-0 relative w-full ">
                                        <div className="aspect-square h-auto w-5 overflow-visible relative flex-none  ">
                                            <figure className='relative w-full h-full inset-0 rounded-[inherit] '>
                                                <Image width={20} height={20} src={locationIcon} alt="star" className='block w-full h-full rounded-[inherit] object-cover object-center' />
                                            </figure>
                                        </div>
                                        <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto relative whitespace-pre-wrap w-full break-words  ">
                                            <p className='text-light-gray-2 font-medium  text-[12px]'>{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-none h-auto relative w-auto  ">
                                    <Link href={`https://x.com`} className="bg-almost-black border border-dark-gray-3 rounded-[10px] cursor-pointer gap-[10px] flex items-center flex-col justify-end overflow-visible flex-nowrap h-min relative w-min custom-padding group hover:bg-dark-gray-4 transition-all duration-500 ">
                                        <div className="opacity-70 aspect-square h-auto overflow-visible relative w-5 transition-all group-hover:opacity-100 duration-500">
                                            <figure className='relative inset-0 rounded-[inherit] '>
                                                <Image width={20} height={20} src={XLogo} alt="star" className='block w-full h-full rounded-[inherit] object-cover object-center' />

                                            </figure>
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            <div className="flex flex-none h-auto relative whitespace-pre-wrap w- break-words flex-shrink-0 justify-start ">
                                <p className='text-[15px] text-light-gray-2 font-medium '>{testimonial.description}</p>
                            </div>

                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}
