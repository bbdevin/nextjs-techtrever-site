"use client";

import Link from "next/link"
import links from "../data/nav.json";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
    return (
        <ul className="flex md:flex-row md:gap-6 lg:gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <li key={index}>
                        <Link
                            href={link.path}
                            className={`
                                block py-2 px-3 md:px-2 text-base md:text-lg lg:text-xl font-medium capitalize 
                                transition-all duration-300 ease-in-out
                                relative group
                                ${isActive
                                    ? "bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                    : "text-white hover:bg-gradient-to-r hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
                                }
                            `}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Nav