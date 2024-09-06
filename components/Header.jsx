import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full py-4 sm:py-6 xl:py-8 bg-transparent text-white">
            <div className="container mx-auto flex justify-between items-center z-20 px-4">
                <Link href="/" className="flex items-center text-2xl sm:text-3xl md:text-4xl font-bold relative group" aria-label="首頁">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="mr-2"
                    />
                    <span className="inline-flex items-center" aria-hidden="true">
                        <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            tech
                        </span>
                        <span className="text-white mx-1">trever</span>
                        <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            .site
                        </span>
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                <nav className="hidden md:flex flex-grow justify-center">
                    <Nav />
                </nav>

                {/* 這個空的 div 用來平衡布局，只在大屏幕顯示 */}
                <div className="hidden md:block w-[100px]"></div>
            </div>
        </header>
    );
};

export default Header;
