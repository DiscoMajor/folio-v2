"use client";
import "animate.css";
import { Monda } from "next/font/google";
import MyName from "./components/heading.js";
import ToolStack from "./components/toolstack.js";
import SocialsIcons from "./components/socials.js";
import Alternance from "./components/alternance.js";
import DownArrow from "./components/arrowDown.js";
import Projets from "./components/projets-const.js";

const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <main className=" text-white h-screen">
            <section className="bg-gradientBg bg-cover relative">
                <SocialsIcons />
                <MyName />

                <div className={monda.className}>
                    <Alternance />
                    <hr className="w-full h-1/2 bg-white opacity-20"></hr>
                    <ToolStack />
                    <DownArrow />
                </div>
            </section>

            <section className="bg-gradientBg2 bg-cover relative h-screen" id="projets">
                <div className={monda.className}>
                    <h1 className="text-center text-5xl font-bold p-12">Projets</h1>
                    <hr className="w-full h-1/2 bg-white opacity-20"></hr>
                    <Projets />
                </div>
            </section>
        </main>
    );
}
