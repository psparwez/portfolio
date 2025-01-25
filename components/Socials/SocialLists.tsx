"use client"
import { socialLists } from '@/data'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

export default function SocialLists() {
    return (
        <aside className='hidden lg:block max-w-[13%] w-full  h-screen top-0 flex-none sticky z-10 '>
            <div className="flex items-start overflow-hidden justify-center h-full flex-nowrap relative p-0 flex-col gap-2 ">
                {/* middle  */}
                <div className="flex items-start overflow-hidden justify-center h-full flex-nowrap relative p-[20px_0px_40px_30px] flex-col flex-1 border-l border-border-color">
                    <motion.ul
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        className='flex items-center gap-5 flex-col'>
                        {
                            socialLists.map((social, index) => (
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{
                                        once: true,
                                    }}
                                    key={social.id} className="flex items-center gap-10 ">
                                    <Link href={social.link} target="_blank" rel="noopener noreferrer" className='bg-very-dark-gray hover:bg-dark-gray-3 transition-all duration-300 border border-dark-gray-3 p-3 group rounded-xl'>
                                        <span className='text-light-gray-1 text-sm group-hover:text-light-gray-3 transition-all duration-300'>
                                            {social.icon}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </div>
            </div>
        </aside >
    )
}
