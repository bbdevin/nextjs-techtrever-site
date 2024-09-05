"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SparklesText from "./magicui/sparkles-text";
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const contactMethods = [
        { icon: FaEnvelope, link: "mailto:trever1121@gmail.com", label: "Email" },
        { icon: FaInstagram, link: "https://instagram.com/__trever_c_c", label: "Instagram" },
        { icon: FaGithub, link: "https://github.com/bbdevin", label: "GitHub" },
    ];

    return (
        <motion.div 
            ref={ref}
            className="container mx-auto py-16 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SparklesText text="Let's Connect" />
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <motion.div
                    className="w-full max-w-md md:w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl transform rotate-3 transition-transform duration-300 hover:rotate-0">
                        <Image
                            src="/avatar-2.jpg"
                            alt="Trever - Black and White Portrait"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            className="transition-all duration-300"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 rounded-lg"></div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold text-blue-300 mb-2">Trever</h3>
                    <p className="text-xl text-gray-300 mb-6">IT Specialist & Web Developer</p>
                    <div className="flex flex-col gap-4 w-full">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 w-full"
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <method.icon size={24} className="text-blue-400 mr-4" />
                                <span className="text-lg text-gray-300">{method.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;