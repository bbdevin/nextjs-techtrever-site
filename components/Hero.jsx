"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat z-10 flex flex-col bg-[url('/background.png')] text-white">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4 rounded-lg text-center mt-12 sm:mt-16 md:mt-24 lg:mt-32">
        <div className="mb-3 sm:mb-4 md:mb-6">
          <Photo />
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4"
        >
          <SparklesText text={"I'm Trever"} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto mb-1 sm:mb-2 md:mb-3"
        >
          IT Specialist & Web Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
        >
          Passionate about creating accessible and innovative web solutions that make a difference,
          while navigating the tech world from my electric wheelchair.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
