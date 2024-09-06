import { motion } from 'framer-motion';
import { FaGamepad, FaChartLine, FaFilm, FaUtensils } from 'react-icons/fa';

const WhoIAm = ({ containerVariants }) => {
    const interests = [
        { name: 'Gaming', icon: FaGamepad },
        { name: 'Stock Market', icon: FaChartLine },
        { name: 'Movie', icon: FaFilm },
        { name: 'Food', icon: FaUtensils }
    ];

    return (
        <motion.div
            className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl mb-6 sm:mb-8"
            variants={containerVariants}
        >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
                我是一名網站開發者，使用 Laravel、Tailwind CSS 和 Nuxt.js 等技術。雖然還有很多不足之處，但我熱衷於嘗試新技術，並努力學習如何運用開源解決方案來為使用者提供更好的體驗。
            </p>
            <div className="mb-4">
                <p className="text-gray-300 mb-2">My Interests:</p>
                <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                        <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                            <interest.icon className="mr-2" />
                            {interest.name}
                        </span>
                    ))}
                </div>
            </div>
            <p className="text-gray-300">
                作為一位坐輪椅的身障開發者，我秉持著 做就對了 的理念，不斷挑戰自我。過去曾有機會分享身障經驗，我樂於接受各種邀約，包括演講或合作機會。我期待能與他人合作，互相學習，共同成長。如果您有任何想法，歡迎隨時與我聯繫！
            </p>
        </motion.div>
    );
};

export default WhoIAm;
