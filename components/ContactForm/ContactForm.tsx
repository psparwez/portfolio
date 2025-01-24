"use client";
import type React from "react";
import { motion } from "framer-motion";
import { formVariants } from "@/animation/varients";
import FollowerLists from "../FollowerLists/FollowerLists";
import { followerData } from "@/data";
import { rightArrow } from "@/app/assets/assets";
export default function ContactForm() {

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
            <FollowerLists followerData={followerData} rightArrow={rightArrow} />

        </div>
    );
}
