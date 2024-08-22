import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import SearchLogo from "/public/tmdb/icons/search.svg";
import AccountLogo from "/public/tmdb/icons/account.svg";
import NotificationLogo from "/public/tmdb/icons/bell.svg";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <>
            <header className="relative">
                <nav className={`flex justify-between items-center ${bebas.className} text-white text-lg`}>
                    <div>
                        <ul className="flex items-center gap-16 p-8">
                            <Image src={SiteLogo} alt="Website Logo" height={100} width={100} />
                            <li>Home</li>
                            <li>Discover Section</li>
                            <li>Upcoming Films</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex items-center gap-16 p-8 ">
                            <li className="flex flex-row-reverse searchHeader">
                                <input type="text" name="search" alt="Search logo" className="shrink-0" />
                            </li>

                            <li className="relative">
                                <span class="animate-ping absolute h-2 w-2 rounded-full  bg-white opacity-70"></span>
                                <Image src={NotificationLogo} alt="Notifications logo" height={25} width={25} className="shrink-0" />
                            </li>
                            <li>
                                <Image src={AccountLogo} alt="Account Logo" height={50} width={50} className="shrink-0" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
