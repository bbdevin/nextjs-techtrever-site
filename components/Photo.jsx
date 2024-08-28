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
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}

                    className="  h-[298px] w-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten "

                >
                    <Image
                        className="object-contain"
                        quality={100}
                        placeholder="blur"
                        src={avatar}
                        alt="My Photo"
                        fill
                        priority />
                    <div className="relative  h-[330px] w-[330px] overflow-hidden xl:w-[510px] xl:h-[510px] mix-blend-lighten rounded-full">

                        <BorderBeam

                            duration={4}
                            delay={3}
                            borderWidth={3}

                        />
                    </div>
                </motion.div>
            </motion.div>

        </div >
    )
}

export default Photo