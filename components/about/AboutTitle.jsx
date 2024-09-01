import { motion } from 'framer-motion';
import SparklesText from "../magicui/sparkles-text";

const AboutTitle = ({ isInView, containerVariants }) => (
    <motion.div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
    >
        <SparklesText text="About Me" />
    </motion.div>
);

export default AboutTitle;
