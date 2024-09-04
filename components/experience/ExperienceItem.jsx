import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaMicrophone } from 'react-icons/fa';
import TechButton from './TechButton';
import { useRef } from 'react';

const ExperienceItem = ({ date, title, subtitle, description, duties, technologies, index, isEducation, isAward, logo, isLeft }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const getIcon = () => {
        if (isEducation) return FaGraduationCap;
        if (isAward) {
            if (title.toLowerCase().includes('speaker')) return FaMicrophone;
            return FaTrophy;
        }
        return FaBriefcase;
    };

    const Icon = getIcon();

    return (
        <motion.div
            ref={ref}
            className={`mb-8 flex w-full ${isLeft ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <motion.div
                className={`w-full sm:w-[calc(100%-2rem)] p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg relative ${isLeft ? 'mr-4 sm:mr-8' : 'ml-4 sm:ml-8'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    className={`absolute w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center top-4 ${isLeft ? '-right-4 sm:-right-5' : '-left-4 sm:-left-5'}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                    {logo && (
                        <div className="mr-4 mb-2 sm:mb-0">
                            <Image src={logo} alt={subtitle} width={40} height={40} className="rounded-full" />
                        </div>
                    )}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-300 mb-1">{title}</h3>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-1">{subtitle}</h4>
                        <span className="text-xs sm:text-sm font-bold text-gray-400">{date}</span>
                    </div>
                </div>

                {description && (
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
                )}

                {!isEducation && !isAward && (
                    <>
                        <h5 className="text-base sm:text-lg font-semibold text-blue-300 mt-4 mb-2">Main Duties:</h5>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 mb-4">
                            {duties.map((duty, index) => (
                                <li key={index} className="mb-1">{duty}</li>
                            ))}
                        </ul>

                        {technologies && technologies.length > 0 && (
                            <>
                                <h5 className="text-base sm:text-lg font-semibold text-blue-300 mt-4 mb-2">Main Technologies:</h5>
                                <div className="flex flex-wrap">
                                    {technologies.map((tech, index) => (
                                        <TechButton key={index} tech={tech.name} icon={tech.icon} color={tech.color} />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ExperienceItem;