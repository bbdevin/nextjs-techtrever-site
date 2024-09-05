"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat z-10 flex flex-col bg-[url('/background.png')] text-white">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-4 mt-16 sm:mt-20 md:mt-24">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center space-y-[clamp(0.5rem,2vh,1.5rem)]">
          <div className="transform scale-[clamp(0.3,0.4vh,0.8)] mb-[clamp(0.5rem,2vh,1.5rem)]">
            <Photo />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[clamp(1.25rem,3vw,2.5rem)] font-bold magic-text"
          >
            <SparklesText text={"I'm Trever"} />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2"
          >
            <p className="text-[clamp(0.75rem,2vw,1.25rem)] magic-text">
              IT Specialist & Web Developer
            </p>
            <ScrollMouseIcon />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ScrollMouseIcon = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <rect x="1" y="1" width="22" height="34" rx="11" stroke="white" strokeWidth="2" />
        <motion.rect
          x="11"
          y="8"
          width="2"
          height="6"
          rx="1"
          fill="white"
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.svg>
      <motion.span
        className="mt-1 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Scroll Down
      </motion.span>
    </div>
  );
};

export default Hero;
