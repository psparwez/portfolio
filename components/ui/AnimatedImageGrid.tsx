"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

interface AnimatedImageGridProps {
    image: string | StaticImageData;
}

const AnimatedImageGrid: React.FC<AnimatedImageGridProps> = ({ image }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            <Image
                src={image}
                alt="Profile image"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 grid grid-rows-[repeat(10,auto)] grid-cols-[repeat(10,1fr)]">
                {Array.from({ length: 100 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="bg-image-bg rounded-xl "
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isLoaded ? 0 : 1 }}
                        transition={{
                            duration: 0.5,
                            delay: Math.random() * 0.5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

        </>
    )
}

export default AnimatedImageGrid

