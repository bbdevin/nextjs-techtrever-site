"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}

                    className="  h-[298px] w-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten "

                >
                    <Image
                        className="object-contain"
                        src="/photo.png"
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