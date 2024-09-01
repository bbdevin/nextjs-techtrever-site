import { motion } from 'framer-motion';
import SparklesText from "../magicui/sparkles-text";

const ExperienceTitle = () => {
    return (
        <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SparklesText text="My Experience" />
        </motion.h2>
    );
};

export default ExperienceTitle;