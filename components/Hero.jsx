"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat z-10 flex flex-col bg-[url('/background.png')] text-white">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-4">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-2 text-center sm:space-y-3 md:space-y-4">
          <div className="transform scale-50 sm:scale-60 md:scale-75 lg:scale-90">
            <Photo />
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold magic-text sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <SparklesText text={"I'm Trever"} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs magic-text sm:text-sm md:text-base lg:text-lg"
          >
            IT Specialist & Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md text-xs sm:text-sm md:text-base lg:text-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            Passionate about creating accessible and innovative web solutions that make a difference,
            while navigating the tech world from my electric wheelchair.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
