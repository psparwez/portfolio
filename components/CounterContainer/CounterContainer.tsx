"use client"

import React from 'react'
import { counterLists } from '@/data/index'
import { motion } from "framer-motion"

import CountUp from 'react-countup'
export default function CounterContainer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-none gap-5 flex-nowrap h-min justify-start py-5 relative px-0 overflow-visible items-start border-b border-dashed border-t border-dark-gray-4 w-full ">
            <ul className=' grid grid-cols-2 sm:flex items-center gap-2 justify-between w-full' >
                {
                    counterLists.map(list => (
                        <li key={list.id} className="w-full">
                            <div className="flex-1 flex  flex-nowrap gap-[4px] h-min p-0 relative items-center overflow-visible justify-center  ">

                                <div className="flex-none h-auto relative w-auto">
                                    <div className="items-start justify-start text-[28px] font-bold text-very-light-gray ">
                                        <CountUp end={list.value} />
                                    </div>
                                </div>
                                <div className="flex flex-shrink-0 flex-col justify-start float-none h-auto relative whitespace-pre w-auto">
                                    <h1 className='text-[34px] font-bold text-white '>+</h1>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 flex-col justify-start w-full flex-none relative whitespace-pre-wrap break-words">
                                <p className=' text-center text-light-gray-2 font-medium text-[15px]  '>{list.title}</p>
                            </div>

                        </li>
                    ))


                }
            </ul>
        </motion.div>
    )
}
