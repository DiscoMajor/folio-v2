import Link from "next/link";
import Image from "next/image";
import SiteLogo from "/public/tmdb/icons/tmdb-logo.svg";
import { Abel } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
    return (
        <section className={`${abel.className} text-white footer-fade footer-li p-5 flex justify-evenly`}>
            <div>
                <Image src={SiteLogo} alt="Website Logo" priority className="xl:size-40 md:size-24 xs:size-14" />
            </div>

            <div>
                <ul className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold hover:text-sweetrose">The MovieDatabase</h1>
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
                        <Link href="https://status.themoviedb.org/" target="blank">
                            System Status
                        </Link>
                    </li>

                    <li>
                        <Link href="https://www.themoviedb.org/talk" target="blank">
                            Support Forum
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold  hover:text-sweetrose">Contact Us</h1>
                    <li>
                        <Link href="#">Mail</Link>
                    </li>
                    <li>
                        <Link href="#">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="#">Discord</Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold  hover:text-sweetrose">Legal</h1>
                    <li>
                        <Link href="#">Privacy</Link>
                    </li>
                    <li>
                        <Link href="#">Terms of Use</Link>
                    </li>
                    <li>
                        <Link href="#">Legal Notices</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
