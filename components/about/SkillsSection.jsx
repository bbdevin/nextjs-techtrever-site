import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SkillTabs from './SkillTabs';
import SkillIcons from './SkillIcons';
import SkillLevels from './SkillLevels';

const SkillsSection = ({ containerVariants }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        let interval;
        if (isInView) {
            interval = setInterval(() => {
                setActiveTab((prev) => (prev === 0 ? 1 : 0));
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isInView]);

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <motion.div
            ref={ref}
            className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl w-full overflow-hidden"
            variants={containerVariants}
        >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-300">My Skills</h3>
                <SkillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="min-h-[300px] w-full">
                <AnimatePresence mode="wait">
                    {isMounted && (
                        <motion.div
                            key={activeTab}
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            {activeTab === 0 ? (
                                <SkillIcons containerVariants={containerVariants} />
                            ) : (
                                <SkillLevels />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default SkillsSection;
