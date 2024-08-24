"use client";

import Link from "next/link"
import links from "../data/nav.json";
import { usePathname } from "next/navigation";

const Nav = () => {

    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index}
                        className={`${link.path === pathname && "text-teal-500 border-b-2 border-teal-500"
                            } text-2xl font-medium capitalize hover:text-teal-500  transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav