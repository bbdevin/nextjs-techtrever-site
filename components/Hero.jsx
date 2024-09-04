"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat z-10 flex flex-col bg-[url('/background.png')] text-white">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-4 rounded-lg text-center mt-32 sm:mt-36 md:mt-40 lg:mt-44"> {/* 增加上邊距 */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <Photo />
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <SparklesText text={"I'm Trever"} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-2xl mx-auto mb-2 sm:mb-4"
          >
            IT Specialist & Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
          >
            Passionate about creating accessible and innovative web solutions that make a difference,
            while navigating the tech world from my electric wheelchair.
          </motion.p>
        </div>
      </div>
      <div className={styles["hero-shape"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;
