"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SparklesText from "./magicui/sparkles-text";
import { FaJs, FaCss3Alt, FaHtml5, FaPhp, FaLaravel, FaDocker, FaPython, FaVuejs, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiNuxtdotjs, SiNextdotjs, SiTailwindcss, SiNginx, SiCentos } from 'react-icons/si';
import { BsFillGrid3X3GapFill, BsBarChartFill } from 'react-icons/bs';

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ]
  },
  {
    category: "DevOps & Server Management",
    items: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "CentOS", icon: SiCentos, color: "#262577" },
      { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ]
  }
];

const skillLevels = [
    { name: "HTML & CSS", level: 90 },  
  { name: "Laravel", level: 80 },
  { name: "Nuxt.js", level: 35 },
  { name: "Next.js", level: 20 },
  { name: "JavaScript", level: 65 },

];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: false });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    const switcherVariants = {
        left: { x: 0 },
        right: { x: '100%' }
    };

    return (
        <motion.div 
            ref={ref}
            style={{ opacity }}
            className="container mx-auto py-16 px-4 min-h-screen flex flex-col justify-center relative"
        >
            <motion.div 
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <SparklesText text="About Me" />
            </motion.div>
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8">
                <motion.div 
                    style={{ y }}
                    className="w-full lg:w-2/5"
                >
                    <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
                        <DotLottieReact
                            src={"https://lottie.host/6065e8b1-b953-4cdf-adf9-3f3d60eafcf7/w5VHckfHvy.json"}
                            loop
                            autoplay
                        />
                    </div>
                </motion.div>
                <motion.div 
                    className="w-full lg:w-3/5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div 
                        className="bg-gray-800 rounded-2xl p-6 shadow-2xl mb-8"
                        variants={containerVariants}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-blue-300">Who I Am</h3>
                        <p className="text-base leading-relaxed text-gray-300">
                            I'm a passionate developer with a keen interest in creating innovative solutions. 
                            With experience in both frontend and backend technologies, I strive to build 
                            seamless, user-friendly applications. My journey in tech has equipped me with 
                            a diverse skill set and a problem-solving mindset.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800 rounded-2xl p-6 shadow-2xl"
                        variants={containerVariants}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-blue-300">My Skills</h3>
                            <div className="relative w-36 h-10 bg-gray-700 rounded-full p-1 flex items-center">
                                <motion.div 
                                    className="absolute w-1/2 h-8 bg-blue-500 rounded-full"
                                    variants={switcherVariants}
                                    animate={activeTab === 0 ? 'left' : 'right'}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                                <button
                                    className={`relative z-10 flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                                    onClick={() => setActiveTab(0)}
                                >
                                    <BsFillGrid3X3GapFill className="text-sm" />
                                </button>
                                <button
                                    className={`relative z-10 flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    <BsBarChartFill className="text-sm" />
                                </button>
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            {activeTab === 0 ? (
                                <motion.div
                                    key="skillIcons"
                                    variants={tabVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {skills.map((category, categoryIndex) => (
                                        <motion.div 
                                            key={categoryIndex}
                                            className="mb-6 last:mb-0"
                                            variants={containerVariants}
                                        >
                                            <h4 className="text-xl font-semibold mb-3 text-blue-300">{category.category}</h4>
                                            <div className="flex flex-wrap -mx-1">
                                                {category.items.map((skill, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 m-1 shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-600"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <skill.icon className="mr-2 text-lg" style={{ color: skill.color }} />
                                                        <h3 className="text-sm font-medium text-gray-200">{skill.name}</h3>
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="skillLevels"
                                    variants={tabVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {skillLevels.map((skill, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-base font-medium text-blue-300">{skill.name}</span>
                                                <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <motion.div 
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;