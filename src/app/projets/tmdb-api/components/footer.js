import Link from "next/link";
import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import { Abel } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
    return (
        <section className="footer-fade">
            <div className={`flex flex-col items-center justify-center p-1 text-white ${abel.className}`}>
                <div>
                    <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-32 md:size-36 xs:size-24" />
                </div>
                <div className="flex flex-col items-center gap-5 mb-10">
                    <p className="xl:text-lg sm:text-lg xs:text-md">Still looking for something to watch ?</p>
                    <button
                        className={`py-2 w-64 text-lg border-2 shadow-2xl text-white rounded-md hover:bg-sweetpurple hover:scale-105 transform ease-in-out duration-300 ${abel.className}`}
                    >
                        Discover hidden gems
                    </button>
                </div>
            </div>
            <div className={`${abel.className} text-white footer-li xl:p-2 sm:p-2 xs:p-2 flex justify-around`}>
                <div>
                    <ul className="flex flex-col xl:gap-2 xs:gap-0.2">
                        <h1 className="xl:text-xl md:text-lg xs:text-xs font-bold">The MovieDatabase</h1>
                        <section className="flex flex-col xl:gap-2 xs:gap-2 xl:text-base md:text-base xs:text-xs mt-2 ">
                            <li>
                                <Link href="https://www.themoviedb.org/about" target="blank">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="https://developer.themoviedb.org/docs/getting-started" target="blank">
                                    Api
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.themoviedb.org/talk" target="blank">
                                    Support Forum
                                </Link>
                            </li>
                        </section>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h1 className="xl:text-xl md:text-lg xs:text-xs font-bold">Contact Us</h1>
                        <section className="flex flex-col xl:gap-2 xs:gap-2 xl:text-base md:text-base xs:text-xs mt-2">
                            <li>
                                <Link href="#">Mail</Link>
                            </li>
                            <li>
                                <Link href="#">LinkedIn</Link>
                            </li>
                            <li>
                                <Link href="#">Discord</Link>
                            </li>
                        </section>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col xl:gap-2 xs:gap-0.5">
                        <h1 className="xl:text-xl md:text-lg xs:text-xs font-bold">Legal</h1>
                        <section className="flex flex-col xl:gap-2 xs:gap-2 xl:text-base md:text-base xs:text-xs mt-2">
                            <li>
                                <Link href="#">Privacy</Link>
                            </li>
                            <li>
                                <Link href="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link href="#">Legal Notices</Link>
                            </li>
                        </section>
                    </ul>
                </div>
            </div>
        </section>
    );
}
