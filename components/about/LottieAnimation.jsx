import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ y }) => (
    <motion.div
        style={{ y }}
        className="w-full lg:w-2/5"
    >
        <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
            <DotLottieReact
                src={"https://lottie.host/6065e8b1-b953-4cdf-adf9-3f3d60eafcf7/w5VHckfHvy.json"}
                loop
                autoplay
            />
        </div>
    </motion.div>
);

export default LottieAnimation;
