"use client";
import { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import FigmaIcon from "/public/icons/figma.svg";
import GitIcon from "/public/icons/git.svg";
import JsIcon from "/public/icons/js.svg";
import MysqlIcon from "/public/icons/mysql.svg";
import NextIcon from "/public/icons/next.svg";
import PhpIcon from "/public/icons/php.svg";
import ReactIcon from "/public/icons/react.svg";
import TailwindIcon from "/public/icons/tailwind.svg";
import TrelloIcon from "/public/icons/trello.svg";
import NodeIcon from "/public/icons/node.svg";
import { Monda } from "next/font/google";

const monda = Monda({ subsets: ["latin"], weight: ["400"] });

const ToolStackSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const scrollStep = 0.2; //
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += scrollStep;
            slider.scrollLeft = scrollAmount;

            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
                slider.scrollLeft = 0;
            }

            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

    return (
        <main>
            <div className={monda.className}>
                <p className="font-bold lg:text-2xl sm:text-xl xs:text-lg lg:mx-60 sm:mx-20 xs:mx-8 py-10">Tool Stack</p>
            </div>

            <div className="relative overflow-hidden max-w-[600px] mx-auto blur-overlay p-5">
                <div ref={sliderRef} className="flex gap-5 whitespace-nowrap overflow-hidden">
                    {[...Array(8)].map((_, index) => (
                        <React.Fragment key={index}>
                            <Image src={JsIcon} alt="Js" height={60} width={60} />
                            <Image src={GitIcon} alt="Git" height={60} width={60} />
                            <Image src={ReactIcon} alt="ReactJs" height={60} width={60} />
                            <Image src={NextIcon} alt="NextJs" height={60} width={60} />
                            <Image src={TrelloIcon} alt="Linkedin" height={60} width={60} />
                            <Image src={MysqlIcon} alt="MySql" height={60} width={60} />
                            <Image src={TailwindIcon} alt="Tailwind" height={60} width={60} />
                            <Image src={PhpIcon} alt="Php" height={60} width={60} />
                            <Image src={FigmaIcon} alt="Figma" height={60} width={60} />
                            <Image src={NodeIcon} alt="Node" height={60} width={60} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ToolStackSlider;
