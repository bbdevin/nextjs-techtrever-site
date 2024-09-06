"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat z-10 flex flex-col relative">
      <Image
        src="/background.webp"
        alt="背景圖片"
        fill
        style={{ objectFit: 'cover' }}
        quality={75}
        priority
        className="hidden sm:block"
        aria-hidden="true"
      />
      <Image
        src="/mobile-background.webp"
        alt="手機版背景圖片"
        fill
        style={{ objectFit: 'cover' }}
        quality={75}
        priority
        className="block sm:hidden"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col h-full w-full">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow px-4 py-4 mt-16 sm:mt-20 md:mt-24 w-full">
          <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <Photo />
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            >
              <SparklesText text={"I'm Trever"} />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-2"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300">
                IT Specialist & Web Developer
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-md">
                透過刻意練習深化技能，喜歡嘗試新技術開發、解決問題
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mt-4" aria-label="技能列表">
              {['Laravel', 'Vue.js', 'JavaScript', 'Tailwind CSS', 'Linux'].map((skill, index) => (
                <span key={index} className="bg-gray-800 bg-opacity-50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex space-x-4 mt-6">
              <SocialIcon href="https://github.com/bbdevin" icon={FaGithub} label="GitHub" />
              <SocialIcon href="https://instagram.com/__trever_c_c" icon={FaInstagram} label="Instagram" />
            </div>

            <ScrollMouseIcon />
          </div>
        </main>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon size={24} aria-hidden="true" />
  </motion.a>
);

const ScrollMouseIcon = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      aria-hidden="true"
    >
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
        className="mt-1 text-xs text-gray-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Scroll Down
      </motion.span>
    </motion.div>
  );
};

export default Hero;
