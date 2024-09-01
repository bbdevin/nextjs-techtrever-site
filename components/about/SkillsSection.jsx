import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillTabs from './SkillTabs';
import SkillIcons from './SkillIcons';
import SkillLevels from './SkillLevels';

const SkillsSection = ({ containerVariants }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const tabVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <motion.div
            className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl"
            variants={containerVariants}
        >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-300">My Skills</h3>
                <SkillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <AnimatePresence mode="wait">
                {activeTab === 0 ? (
                    <SkillIcons key="skillIcons" tabVariants={tabVariants} containerVariants={containerVariants} />
                ) : (
                    <SkillLevels key="skillLevels" tabVariants={tabVariants} />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SkillsSection;
