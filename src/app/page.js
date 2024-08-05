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
        <main className="relative text-white ">
            <SocialsIcons></SocialsIcons>
            <div className={montagu.className}>
                <h1 className="text-center lg:text-9xl sm:text-7xl xs:text-5xl lg:mx-20 sm:mx-16 xs:mx-10 mt-20 mb-20 animate__animated animate__fadeInDown">
                    Victor Lobbé
                </h1>
            </div>

            <hr className="w-full h-1/2 bg-white"></hr>

            <div className={monda.className}>
                <Alternance></Alternance>

                <ToolStack></ToolStack>

                <div className="flex justify-center arrow-down mt-2">
                    <Image src={ArrowDown} alt="ArrowDown" height={33} width={33}></Image>
                </div>
            </div>
        </main>
    );
}
