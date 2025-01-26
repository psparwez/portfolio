"use client";

import { AvatarMe } from '@/app/assets/assets';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Tooltip from '../ui/Tooltop';
import { pagesLists } from '@/data';
import { motion } from "framer-motion"

interface SideNavbarProps {
    isMenuOpen?: boolean;
}

export default function SideNavbar({isMenuOpen}:SideNavbarProps) {
    const pathname = usePathname()

    return (
        <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, type: "spring" }}
        className=" absolute lg:block max-w-[13%] w-full border-r border-border-color h-screen md:sticky top-0 flex-none z-10"
        style={{
            left : isMenuOpen ? "0" : "-100%",
            maxWidth: isMenuOpen ? "140px" : "13%", 
        }}
        >
            <div className="flex items-end justify-between h-full flex-none flex-nowrap relative p-[20px_30px_40px_0px] flex-col">
                {/* top */}
                <Link
                    href="/"
                    className="bg-border-color rounded-full w-[60px] border border-zinc-800 hover:scale-95 transition-all duration-300 h-auto aspect-square p-[4px] relative overflow-hidden flex items-center justify-center flex-none flex-nowrap gap-[10px]"
                >
                    <div className="w-[50px] aspect-square h-auto rounded-full flex-none relative bg-darkest-gray">
                        <div className="absolute rounded-full inset-0">
                            <Image
                                src={AvatarMe}
                                fill
                                quality={100}                                
                                alt="Avatar"
                                className="block w-full h-full rounded-full opacity-80 object-fill object-center"
                            />
                        </div>
                    </div>
                </Link>
                {/* middle */}
                <motion.ul
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    className="flex flex-col flex-none flex-nowrap gap-[20px] h-min justify-start p-0 relative w-min z-10 items-start">
                    {pagesLists.map((page, index) => {
                        const isActive = pathname === page.href;
                        return <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{
                                once: true,
                            }}
                            key={page.id}>
                            <Link
                                href={page.href}
                                className={`p-3.5 group flex cursor-pointer border border-transparent items-center justify-center transition-all duration-300 h-min w-min  relative rounded-xl ${isActive
                                    ? 'bg-almost-black border-dark-gray-3 text-white'
                                    : 'hover:bg-very-dark-gray hover:border-dark-gray-3'
                                    }`}
                            >
                                <span className={` ${isActive ? 'text-light-gray-3' : 'text-light-gray-2'} `}>{page.icon}</span>

                                <Tooltip content={page.title} position='right' />
                            </Link>
                        </motion.li>
                    })}
                </motion.ul>
                {/* bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1,
                        type: 'spring',
                        stiffness: 120,

                    }}
                    className="relative group items-center w-full flex justify-end max-w-max">
                    <Link
                        href="#top"
                        className={`p-3.5  flex cursor-pointer border border-transparent overflow-hidden items-center justify-center h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3
                        }`}
                    >
                        <span className='text-light-gray-2'>
                            <ArrowUp size={24} />
                        </span>
                    </Link>
                    <Tooltip content="Go to Top" position='top' />
                </motion.div>
            </div>
        </motion.div>
    );
}
