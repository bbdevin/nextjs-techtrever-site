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
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            >
                <Image
                    className="object-cover rounded-full"
                    quality={100}
                    src={avatar}
                    alt="Trever - IT 專家與網頁開發者的個人照片"
                    priority
                    fill
                    sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, (max-width: 1280px) 20rem, 24rem"
                />
                <div className="absolute inset-0 overflow-hidden rounded-full">
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