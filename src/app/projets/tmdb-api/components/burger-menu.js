import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BurgerIcon from "/public/tmdb/icons/burger-menu.svg";
import BurgerMenuClose from "/public/tmdb/icons/burger-close.svg";

export default function BurgerMenu() {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen((open) => !open);
    };

    return (
        <section className="button-burger ">
            <div className="flex justify-center items-center gap-5">
                <button onClick={toggleMenu}>
                    <Image src={BurgerIcon} width={20} height={20} alt="open burger menu" className="size-5 " />
                </button>
            </div>

            <ul
                className={`bg-burger-fade rounded-md absolute z-50 left-5 top-14 transition-opacity ease-in-out duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <button onClick={toggleMenu} className="absolute top-3 right-3 z-50 drop-shadow-4xl">
                    <Image src={BurgerMenuClose} width={20} height={20} alt="close burger menu" className="size-3" />
                </button>
                <section className="flex flex-col items-center justify-between p-5 gap-3 text-base drop-shadow-4xl">
                    <Link href="/">
                        <li>Home</li>
                        <li>Discover Section</li>
                        <li>Upcoming Films</li>
                        <li>Notifications</li>
                    </Link>
                </section>
            </ul>
        </section>
    );
}
