"use client";
import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { FollowerData } from "@/types";
import Link from "next/link";
import { formVariants, itemVariants, listVariants } from "@/animation/varients";

interface ContactFormProps {
    followerData: FollowerData[];
    rightArrow: string;
}

export default function ContactForm({ followerData, rightArrow }: ContactFormProps) {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-5 w-full">
            {/* Form Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
                viewport={{ once: true }}
                className="flex flex-col gap-6 w-full"
            >
                <form action="" className="grid gap-4">
                    {/* Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            className="appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2"
                            name="Name"
                            placeholder="Name"
                        />
                        <input
                            className="appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2"
                            name="Email"
                            placeholder="Email"
                        />
                    </div>
                    {/* Textarea */}
                    <textarea
                        className="appearance-none w-full leading-[1.4em] outline-none border-none p-4 rounded-lg font-medium text-base placeholder:text-light-gray-1 text-very-light-gray bg-dark-gray-2 resize-y min-h-56 max-h-96"
                        name="Message"
                        placeholder="Message"
                    />
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-almost-black text-white p-4 rounded-lg font-medium hover:bg-dark-gray-4 transition-all"
                    >
                        Send Your Message
                    </button>
                </form>
            </motion.div>

            {/* Follower List Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={listVariants}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
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
        </div>
    );
}
