"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const dockItems = [
    { name: "Home", icon: FaHome, color: "#60A5FA", href: "#hero", tooltip: "回到頂部" },
    { name: "About", icon: FaUser, color: "#38B2AC", href: "#skills", tooltip: "關於我" },
    { name: "Experience", icon: FaBriefcase, color: "#ED8936", href: "#experience", tooltip: "工作經驗" },
    { name: "Projects", icon: FaCode, color: "#4299E1", href: "#projects", tooltip: "專案作品" },
    { name: "Contact", icon: FaEnvelope, color: "#48BB78", href: "#contact", tooltip: "聯絡我" }
];

const DockBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const isSkillsVisible = rect.top <= window.innerHeight / 2;
                setIsVisible(isSkillsVisible || isMobile);
            }
        };

        const handleResize = () => {
            const newIsMobile = window.innerWidth < 768;
            setIsMobile(newIsMobile);
            setIsVisible(newIsMobile);
            if (!newIsMobile) {
                handleScroll();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const handleClick = async (href) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href.startsWith('http')) {
            window.open(href, '_blank');
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-4 left-1/2 z-50"
                    initial={{ y: 100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: 100, x: "-50%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <motion.div
                        className="flex space-x-2 bg-gray-900 bg-opacity-60 backdrop-blur-md p-3 rounded-full shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {dockItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <motion.button
                                    className="p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleClick(item.href)}
                                    animate={controls}
                                >
                                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                                </motion.button>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 bg-opacity-90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {item.tooltip}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DockBar;
