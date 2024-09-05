import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 pb-24 sm:pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <Link href="/" className="flex items-center text-2xl font-bold mb-4 sm:mb-0">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="mr-2"
                        />
                        <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            tech
                        </span>
                        <span className="text-white mx-1">trever</span>
                        <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            .site
                        </span>
                    </Link>
                    <div className="text-sm text-gray-400">
                        © {new Date().getFullYear()} TechTrever. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;