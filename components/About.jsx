"use client";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import AboutTitle from './about/AboutTitle';
import WhoIAm from './about/WhoIAm';
import SkillsSection from './about/SkillsSection';
import LottieAnimation from './about/LottieAnimation';

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

    return (
        <motion.div
            ref={ref}
            id="about"  // 添加這個 id
            style={{ opacity }}
            className="container mx-auto py-8 sm:py-12 md:py-16 px-4 min-h-screen flex flex-col justify-center relative w-full overflow-hidden"
        >
            <AboutTitle isInView={isInView} containerVariants={containerVariants} />
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 sm:gap-6 lg:gap-8">
                <LottieAnimation y={y} />
                <motion.div
                    className="w-full lg:w-3/5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <WhoIAm containerVariants={containerVariants} />
                    <SkillsSection containerVariants={containerVariants} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;