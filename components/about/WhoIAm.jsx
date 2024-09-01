import { motion } from 'framer-motion';

const WhoIAm = ({ containerVariants }) => (
    <motion.div
        className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl mb-4 sm:mb-6 md:mb-8"
        variants={containerVariants}
    >
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">Who I Am</h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            I&apos;m a passionate developer with a keen interest in creating innovative solutions.
            With experience in both frontend and backend technologies, I strive to build
            seamless, user-friendly applications. My journey in tech has equipped me with
            a diverse skill set and a problem-solving mindset.
        </p>
    </motion.div>
);

export default WhoIAm;
