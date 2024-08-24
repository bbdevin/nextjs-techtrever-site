import Link from "next/link";
import Nav from "./Nav";
const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full py-8 xl:py-12 bg-transparent text-white">
            <div className="container mx-auto flex justify-between items-center z-20">
                <Link href="/">

                    <h1 className="text-4xl font-bold">Trever</h1>
                </Link>

                {/** desktop nav */}
                <div className="hidden xl:flex">
                    <Nav />
                </div>

            </div>
        </header>
    );
};

export default Header;
