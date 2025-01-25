import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { itemVariants, listVariants } from "@/animation/varients";
import { motion } from "framer-motion";
import { FollowerData } from '@/types';


interface ContactFormProps {
    followerData: FollowerData[];
    rightArrow: string;
}


export default function FollowerLists({ followerData, rightArrow }: ContactFormProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            viewport={{ once: true }}
            className="hidden  lg:flex flex-col gap-4"
        >
            <ul className="flex flex-col gap-4">
                {followerData.map((data, index) => (
                    <motion.li key={index} variants={itemVariants}>
                        <Link
                            href={data.url}
                            className="flex items-center gap-4 p-4 bg-very-dark-gray border border-dark-gray-3 rounded-xl hover:bg-almost-black transition-all group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-dark-gray-4 border border-border-color rounded-lg flex items-center justify-center">
                                <Image
                                    src={data.icon || "/placeholder.svg"}
                                    alt={data.platform}
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            {/* Follower Info */}
                            <div className="flex flex-col">
                                <p className="text-light-gray-4 font-semibold text-lg">{data.followers}</p>
                                <p className="text-light-gray-2 font-medium text-sm capitalize">{data.platform}</p>
                            </div>
                            {/* Right Arrow */}
                            <div className="ml-auto w-6 h-6 opacity-50 group-hover:opacity-100 transition-all">
                                <Image
                                    src={rightArrow || "/placeholder.svg"}
                                    alt="Right Arrow"
                                    width={24}
                                    height={24}
                                    className="group-hover:-rotate-45 duration-500 transition-all "
                                />
                            </div>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}
