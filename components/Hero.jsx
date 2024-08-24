import Image from "next/image";
import Header from "./Header";
import SparklesText from "./magicui/sparkles-text";
import Photo from "./Photo";

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat z-10 flex bg-[url('/background.png')] items-center justify-center text-white"

        >
            <Header />
            <div className="flex flex-col  items-center justify-center p-4 rounded-lg  text-center">

                <div className="mb-8 xl:mb-0">
                    <Photo />
                </div>



                <h1><SparklesText
                    text={'Welcome to My Portfolio'}
                    className="text-4xl md:text-6xl font-bold mb-4"
                /> </h1>
                <p className="text-lg md:text-2xl">I am a [Your Profession], and this is my work.</p>
            </div>
        </div>
    );
};

export default Hero;
