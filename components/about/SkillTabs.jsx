import { motion } from 'framer-motion';
import { BsFillGrid3X3GapFill, BsBarChartFill } from 'react-icons/bs';

const SkillTabs = ({ activeTab, setActiveTab }) => {
    const switcherVariants = {
        left: { x: 0 },
        right: { x: '100%' }
    };

    return (
        <div className="relative w-36 h-10 bg-gray-700 rounded-full p-1 flex items-center">
            <motion.div
                className="absolute w-1/2 h-8 bg-blue-500 rounded-full"
                variants={switcherVariants}
                animate={activeTab === 0 ? 'left' : 'right'}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <button
                className={`relative z-10 flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setActiveTab(0)}
            >
                <BsFillGrid3X3GapFill className="text-sm" />
            </button>
            <button
                className={`relative z-10 flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                onClick={() => setActiveTab(1)}
            >
                <BsBarChartFill className="text-sm" />
            </button>
        </div>
    );
};

export default SkillTabs;
