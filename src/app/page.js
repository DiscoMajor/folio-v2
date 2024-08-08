import Image from "next/image";
import "animate.css";
import { Montagu_Slab } from "next/font/google";
import { Monda } from "next/font/google";
import ToolStack from "./components/toolstack.js";
import SocialsIcons from "./components/socials.js";
import Alternance from "./components/alternance.js";
import ArrowDown from "/public/icons/arrowdown.svg";

const montagu = Montagu_Slab({ subsets: ["latin"] });
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <main className=" text-white">
            <section className="bg-gradientBg bg-cover relative h-screen">
                <SocialsIcons />
                <div className={montagu.className}>
                    <h1 className="text-center xl:text-9xl sm:text-7xl xs:text-4xl lg:mx-20 sm:mx-16 lg:py-10 sm:py-20 xs:py-10  animate__animated animate__fadeInDown">
                        Victor Lobbé
                    </h1>
                </div>

                <div className={monda.className}>
                    <Alternance />
                    <hr className="w-full h-1/2 bg-white opacity-20"></hr>
                    <ToolStack />
                    <div className="mx-auto arrow-down lg:p-12 xs:p-5">
                        <Image src={ArrowDown} alt="ArrowDown" />
                    </div>
                </div>
            </section>

            <section className="bg-gradientBg2 bg-cover relative h-screen">
                <div className={monda.className}>
                    <h1 className="text-center text-5xl font-bold p-12">Projets</h1>
                    <hr className="w-full h-1/2 bg-white opacity-20"></hr>
                    <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">
                        <a href="tmdb-api" className="text-white font-semibold">
                            The Movie Database API Project
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
