import { motion } from 'framer-motion';
import { skills } from '../../data/skillsData';

const SkillIcons = ({ tabVariants, containerVariants }) => (
    <motion.div
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        {skills.map((category, categoryIndex) => (
            <motion.div
                key={categoryIndex}
                className="mb-6 last:mb-0"
                variants={containerVariants}
            >
                <h4 className="text-xl font-semibold mb-3 text-blue-300">{category.category}</h4>
                <div className="flex flex-wrap -mx-1">
                    {category.items.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 m-1 shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-600"
                            whileHover={{ scale: 1.05 }}
                        >
                            <skill.icon className="mr-2 text-lg" style={{ color: skill.color }} />
                            <h3 className="text-sm font-medium text-gray-200">{skill.name}</h3>
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        ))}
    </motion.div>
);

export default SkillIcons;
