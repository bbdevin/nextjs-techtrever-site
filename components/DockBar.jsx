"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaHome, FaGithub, FaUser, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const dockItems = [
  { name: "Home", icon: FaHome, color: "#4A5568", action: "scrollTop" },
  { name: "GitHub", icon: FaGithub, color: "#333", href: "https://github.com/yourusername" },
  { name: "About Me", icon: FaUser, color: "#38B2AC", href: "#about" },
  { name: "Instagram", icon: FaInstagram, color: "#E1306C", href: "https://instagram.com/yourusername" },
  { name: "LinkedIn", icon: FaLinkedin, color: "#0077B5", href: "https://linkedin.com/in/yourusername" }
];

const DockBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = async (item) => {
        if (item.action === "scrollTop") {
            // 開始動畫
            await controls.start({
                y: [-10, 0, -10],
                transition: { duration: 0.5 }
            });
            // 滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (item.href) {
            if (item.href.startsWith('http')) {
                window.open(item.href, '_blank');
            } else {
                document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
            }
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
                        className="flex space-x-2 bg-gray-800 p-2 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {dockItems.map((item, index) => (
                            <motion.button 
                                key={index}
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleClick(item)}
                                animate={controls}
                            >
                                <item.icon className="w-6 h-6" style={{ color: item.color }} />
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DockBar;
