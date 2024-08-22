import { useEffect, useState } from "react";
import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
export default function BurgerMenu() {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => {
        setisOpen((open) => !open);
    };

    return (
        <section className="button-burger">
            <div className="flex justify-center items-center gap-5 ">
                <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-28  xs:size-12 " />
                <button onClick={toggleMenu}>🍔</button>
            </div>

            <ul className={`flex flex-col text-xs p-3 gap-5 bg-slate-200 bg-opacity-60 absolute  ${isOpen ? "list-menu" : ""}`}>
                <li>Home</li>
                <li>Discover Section</li>
                <li>Upcoming Films</li>
            </ul>
        </section>
    );
}
