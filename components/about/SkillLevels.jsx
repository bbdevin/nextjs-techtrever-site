import { motion } from 'framer-motion';
import { skillLevels } from '../../data/skillsData';

const SkillLevels = ({ tabVariants }) => (
    <motion.div
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        {skillLevels.map((skill, index) => (
            <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-300">{skill.name}</span>
                    <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                </div>
            </div>
        ))}
    </motion.div>
);

export default SkillLevels;
