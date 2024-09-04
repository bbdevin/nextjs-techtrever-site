"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import SparklesText from "./magicui/sparkles-text";
import { projects } from '../data/projectsData';

const TechButton = ({ tech, icon: Icon, color }) => (
    <div className="inline-flex items-center bg-gray-700 text-white rounded-full px-2 py-1 text-xs mr-1 mb-1 sm:px-3 sm:py-1 sm:text-sm sm:mr-2 sm:mb-2">
        <Icon style={{ color }} className="mr-1 text-xs sm:text-sm" />
        <span className="ml-1">{tech}</span>
    </div>
);

const ProjectItem = ({ title, description, technologies, link, image, isPrivate, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const defaultImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

    return (
        <motion.div
            ref={ref}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                    src={image || defaultImage}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    className="rounded-t-lg"
                />
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                {isPrivate ? (
                                    <span className="text-blue-300 text-base sm:text-lg font-bold">Private Project</span>
                                ) : (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-300 text-base sm:text-lg font-bold relative"
                                    >
                                        Visit Site
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-300 mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{description}</p>
                <h5 className="text-sm sm:text-base font-semibold text-blue-300 mb-2">使用技術：</h5>
                <div className="flex flex-wrap mb-3 sm:mb-4">
                    {technologies.map((tech, index) => (
                        <TechButton key={index} tech={tech.name} icon={tech.icon} color={tech.color} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <motion.div 
            ref={ref}
            className="container mx-auto py-8 sm:py-12 md:py-16 px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
            >
                <SparklesText text="My Projects" />
            </motion.h2>
            {isMounted && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectItem key={index} {...project} index={index} />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Projects;