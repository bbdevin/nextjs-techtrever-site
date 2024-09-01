"use client";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import firstAvatar from "../public/photo.png";
import secondAvatar from "../public/photo2.png";

const Photo = () => {
    const { scrollYProgress } = useScroll();
    const [avatar, setAvatar] = useState(firstAvatar);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0) {
            setAvatar(secondAvatar);
        } else {
            setAvatar(firstAvatar);
        }
    });

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] relative"
            >
                <Image
                    className="object-cover rounded-full"
                    quality={100}

                    src={avatar}
                    alt="My Photo"
                    fill
                    priority
                />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 opacity-30"></div>
                </div>
                <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 lg:-inset-2.5 xl:-inset-3 rounded-full overflow-hidden">
                    <BorderBeam
                        duration={4}
                        delay={3}
                        borderWidth={3}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Photo