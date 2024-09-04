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
        { icon: FaGithub, link: "https://github.com/yourusername", label: "GitHub" },
        { icon: FaInstagram, link: "https://instagram.com/yourusername", label: "Instagram" },
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

            <div className="flex flex-col items-center justify-center">
                <motion.div
                    className="w-full max-w-3xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-8">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Trever"
                            fill
                            className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
                        />
                    </div>
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-blue-300 mb-2">Trever</h3>
                        <p className="text-xl text-gray-300">IT Specialist & Web Developer</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <method.icon size={40} className="text-blue-400 mb-3" />
                                <span className="text-sm text-gray-300">{method.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;