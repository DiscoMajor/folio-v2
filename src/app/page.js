import Image from "next/image";
import "animate.css";
import { Montagu_Slab } from "next/font/google";
import { Monda } from "next/font/google";
import ToolStack from "./components/toolstack.js";
import SocialsIcons from "./components/socials.js";
import Alternance from "./components/alternance.js";
import ArrowDown from "/public/icons/arrowdown.svg";
import Projets from "./components/projets.js";
import Movie from "./components/movies.js";

const montagu = Montagu_Slab({ subsets: ["latin"] });
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <main className="relative text-white bg-gradientBg bg-cover h-screen">
            <div className="">
                <SocialsIcons></SocialsIcons>
                <div className={montagu.className}>
                    <h1 className="text-center xl:text-8xl sm:text-7xl xs:text-4xl lg:mx-20 sm:mx-16 lg:py-10 sm:py-20 xs:py-10  animate__animated animate__fadeInDown">
                        Victor Lobbé
                    </h1>
                </div>

                <div className={monda.className}>
                    <Alternance></Alternance>

                    <hr className="w-full h-1/2 bg-white opacity-45"></hr>
                    <ToolStack></ToolStack>

                    <div className="flex justify-center arrow-down lg:p-10 xs:p-5">
                        <a href="#projets">
                            <Image src={ArrowDown} alt="ArrowDown"></Image>
                        </a>
                    </div>
                </div>
                <div class="h-screen">
                    <Projets></Projets>
                    {/* <Movie></Movie> */}
                </div>
            </div>
        </main>
    );
}
