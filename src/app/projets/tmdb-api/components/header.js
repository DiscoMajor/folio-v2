import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import AccountLogo from "/public/tmdb/icons/account.svg";
import NotificationLogo from "/public/tmdb/icons/bell.svg";
import BurgerMenu from "./burger-menu.js";
import { Abel } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <section className="header-fade">
            <header className="relative p-1 xl:mx-8 sm:mx-5 xs:mx-2 text-center">
                <nav className={`flex justify-between items-center ${abel.className} text-white xl:text-xl md:text-lg xs:text-xs`}>
                    <div className="flex items-center xl:gap-16 md:gap-10 xs:gap-8 ">
                        <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-28 md:size-24 xs:size-14" />
                        <BurgerMenu></BurgerMenu>
                        <section className="nav-menu">
                            <ul className="flex items-center xl:gap-16 md:gap-10 xs:gap-3">
                                <li className="hover:text-sweetpurple hover:scale-105 transition ease-in-out duration-300">Home</li>
                                <li className="hover:text-sweetpurple hover:scale-105 transition ease-in-out duration-300">
                                    Discover Section
                                </li>
                                <li className="hover:text-sweetpurple hover:scale-105 transition ease-in-out duration-300">
                                    Upcoming Films
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div>
                        <ul className="flex items-center xl:gap-12 md:gap-10 xs:gap-3">
                            <li className="flex flex-row-reverse searchHeader  text-base">
                                <input type="text" name="search" alt="Search logo" />
                            </li>

                            <li className="shrink-0 burger-menu-logos">
                                <Image
                                    src={NotificationLogo}
                                    alt="Notifications logo"
                                    height={24}
                                    width={24}
                                    className="xl:size-7 md:size-6 xs:size-5"
                                />
                            </li>
                            <li className=" shrink-0">
                                <Image
                                    src={AccountLogo}
                                    alt="Account Logo"
                                    height={24}
                                    width={24}
                                    className="xl:size-7 md:size-6 xs:size-5"
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </section>
    );
}
