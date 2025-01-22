"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, } from "framer-motion"
import { multiplyIcon } from "@/app/assets/assets"
import type { FAQ as FAQType } from "@/types"

type FAQProps = {
    data: FAQType[]
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
    const [openIndices, setOpenIndices] = useState<number[]>([])

    const handleToggle = (index: number) => {
        setOpenIndices((prevIndices) =>
            prevIndices.includes(index) ? prevIndices.filter((i) => i !== index) : [...prevIndices, index],
        )
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 transition-all duration-500 lg:grid-cols-2 gap-[20px] w-full">
                {data.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{
                            once: true,
                        }}
                        className={`flex w-full select-none `}
                    >
                        <div className="w-full">
                            <motion.div
                                onClick={() => handleToggle(index)}
                                className="cursor-pointer bg-very-dark-gray hover:bg-[#fff]/[0.03] duration-300 text-white p-6 border border-dark-gray-3 rounded-[14px] transition-all"
                            >
                                <div className="flex items-center gap-2 justify-between">
                                    <div className="flex flex-col">
                                        <motion.p
                                            animate={{
                                                color: openIndices.includes(index) ? "rgb(230, 230, 230)" : "rgb(153, 153, 153)",
                                            }}
                                            className="text-[17px]  font-medium"
                                        >
                                            {faq.question}
                                        </motion.p>
                                    </div>
                                    <motion.div
                                        className="bg-dark-gray-2 flex-shrink-0 border border-dark-gray-4 rounded-[10px] flex items-center justify-center p-2"
                                        animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                                    >
                                        <Image
                                            src={multiplyIcon || "/placeholder.svg"}
                                            alt="toggle icon"
                                            className="transition-opacity rotate-45 duration-500"
                                            style={{
                                                opacity: openIndices.includes(index) ? 1 : 0.6,
                                            }}
                                            width={20}
                                            height={20}
                                        />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndices.includes(index) && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-dark-gray-3 w-full h-[1px] my-4"
                                            />
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-light-gray-2 font-medium text-[16px]"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;
