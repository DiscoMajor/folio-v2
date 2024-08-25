import Link from "next/link";
import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import { Abel } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
    return (
        <section className={`${abel.className} text-white footer-fade footer-li xl:p-5 sm:p-5 xs:p-3 flex justify-around`}>
            <div className="flex items-center">
                <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-40 md:size-36 xs:size-16" />
            </div>

            <div>
                <ul className="flex flex-col xl:gap-2 xs:gap-0.5">
                    <h1 className="xl:text-xl md:text-large xs:text-xs font-bold hover:text-sweetpurple">The MovieDatabase</h1>
                    <section className="flex flex-col xl:gap-2 xs:gap-2 xl:text-base md:text-base xs:text-xs mt-2">
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
                    <h1 className="xl:text-xl md:text-large xs:text-xs font-bold hover:text-sweetpurple">Contact Us</h1>
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
                    <h1 className="xl:text-xl md:text-large xs:text-xs font-bold hover:text-sweetpurple">Legal</h1>
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
        </section>
    );
}
