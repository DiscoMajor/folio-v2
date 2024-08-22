import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import AccountLogo from "/public/tmdb/icons/account.svg";
import NotificationLogo from "/public/tmdb/icons/bell.svg";
import BurgerMenu from "./burger-menu.js";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <>
            <header className="relative xl:p-8 sm:p-5 xs:p-3">
                <nav className={`flex justify-between items-center ${bebas.className} text-white xl:text-xl md:text-lg xs:text-sm`}>
                    {/* <BurgerMenu></BurgerMenu> */}
                    <div className="flex items-center xl:gap-16 md:gap-10 xs:gap-8 nav-menu">
                        <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-28 md:size-24 xs:size-20" />

                        <ul className="flex xl:gap-16 md:gap-10 xs:gap-5">
                            <li className="hover:scale-110 transition ease-in-out duration-300">Home</li>
                            <li className="hover:scale-110 transition ease-in-out duration-300">Discover Section</li>
                            <li className="hover:scale-110 transition ease-in-out duration-300">Upcoming Films</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex items-center xl:gap-12 md:gap-10 xs:gap-5">
                            {/* <li className="flex flex-row-reverse searchHeader  text-base">
                                <input type="text" name="search" alt="Search logo" />
                            </li> */}
                            <li className="shrink-0">
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
        </>
    );
}
