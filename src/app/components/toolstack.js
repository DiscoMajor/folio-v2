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

        const scrollStep = 0.3; //
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
            <hr className="w-full h-1/2 bg-white"></hr>

            <div className={monda.className}>
                <p className="font-bold text-lg mx-60 my-12">Tool Stack</p>
            </div>

            <div className="relative overflow-hidden max-w-[600px] mx-auto blur-overlay">
                <div ref={sliderRef} className="flex gap-5 whitespace-nowrap overflow-hidden">
                    {/* Duplicate the content */}
                    {[...Array(8)].map((_, index) => (
                        <React.Fragment key={index}>
                            <Image src={JsIcon} alt="Js" height={74} width={74} />
                            <Image src={GitIcon} alt="Git" height={74} width={74} />
                            <Image src={ReactIcon} alt="ReactJs" height={74} width={74} />
                            <Image src={NextIcon} alt="NextJs" height={74} width={74} />
                            <Image src={TrelloIcon} alt="Linkedin" height={74} width={74} />
                            <Image src={MysqlIcon} alt="MySql" height={74} width={74} />
                            <Image src={TailwindIcon} alt="Tailwind" height={74} width={74} />
                            <Image src={PhpIcon} alt="Php" height={74} width={74} />
                            <Image src={FigmaIcon} alt="Figma" height={74} width={74} />
                            <Image src={NodeIcon} alt="Node" height={74} width={74} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ToolStackSlider;
