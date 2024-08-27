"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaJs, FaCss3Alt, FaHtml5, FaPhp, FaLaravel, FaDocker, FaPython, FaVuejs, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiNuxtdotjs, SiNextdotjs, SiTailwindcss, SiNginx, SiCentos } from 'react-icons/si';
import SparklesText from "./magicui/sparkles-text";

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
      { name: "Rocky Linux", icon: FaLinux, color: "#10B981" },
      { name: "CentOS", icon: SiCentos, color: "#262577" },
      { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ]
  }
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

    const itemVariantsRight = {
        animate: { 
            x: [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }
            }
        }
    };

    const itemVariantsLeft = {
        animate: { 
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            style={{ opacity }}
            className="container mx-auto py-16 px-4 min-h-screen flex flex-col justify-center relative"
        >
            <motion.div 
                className="text-5xl font-bold mb-16 text-center -mt-16"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <SparklesText text="About Me" />
            </motion.div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full">
                <motion.div 
                    style={{ y }}
                    className="w-full md:w-1/2 mb-8 md:mb-0"
                >
                    <div className="w-full h-full scale-125">
                        <DotLottieReact
                            src={"https://lottie.host/6065e8b1-b953-4cdf-adf9-3f3d60eafcf7/w5VHckfHvy.json"}
                            loop
                            autoplay
                        />
                    </div>
                </motion.div>
                <motion.div 
                    className="w-full md:w-1/2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div 
                        className="text-3xl font-semibold mb-6"
                        variants={containerVariants}
                    >
                        <SparklesText text="My Skills" />
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800 rounded-lg p-6 shadow-lg overflow-hidden"
                        variants={containerVariants}
                    >
                        {skills.map((category, categoryIndex) => (
                            <motion.div 
                                key={categoryIndex}
                                className="mb-6 last:mb-0"
                            >
                                <h4 className="text-2xl font-semibold mb-4">{category.category}</h4>
                                <motion.div 
                                    className="whitespace-nowrap"
                                    variants={categoryIndex % 2 === 0 ? itemVariantsRight : itemVariantsLeft}
                                    animate="animate"
                                    style={{ display: 'flex', width: 'max-content' }}
                                >
                                    {[...category.items, ...category.items, ...category.items].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center bg-gray-700 rounded p-3 mr-3 mb-3"
                                        >
                                            <skill.icon className="mr-2 text-2xl" style={{ color: skill.color }} />
                                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                                        </span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;