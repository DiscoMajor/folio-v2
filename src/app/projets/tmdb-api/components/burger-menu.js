import { useState } from "react";
import Image from "next/image";
import BurgerIcon from "/public/tmdb/icons/burger-menu.svg";
import BurgerMenuClose from "/public/tmdb/icons/burger-close.svg";

export default function BurgerMenu() {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen((open) => !open);
    };

    return (
        <section className="button-burger">
            <div className="flex justify-center items-center gap-5">
                <button onClick={toggleMenu}>
                    <Image src={BurgerIcon} width={20} height={20} alt="open burger menu" className="size-5" />
                </button>
            </div>

            <ul
                className={`bg-gray-900 bg-opacity-85 rounded-sm absolute z-50 w-screen left-0 top-14 transition-opacity ease-in-out duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <button onClick={toggleMenu} className="absolute top-5 right-10">
                    <Image src={BurgerMenuClose} width={20} height={20} alt="close burger menu" className="size-3" />
                </button>
                <section className="flex flex-col items-center justify-between p-10 gap-5 w-screen h-70 text-lg">
                    <li>Home</li>
                    <li>Discover Section</li>
                    <li>Upcoming Films</li>
                    <li>Notifications</li>
                </section>
            </ul>
        </section>
    );
}
