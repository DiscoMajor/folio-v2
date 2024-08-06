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
                <p className="font-bold lg:text-2xl sm:text-xl xs:text-md xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">Tool Stack</p>
            </div>

            <div className="relative overflow-hidden max-w-[600px] mx-auto blur-overlay p-2">
                <div ref={sliderRef} className="flex xl:gap-5 xs:gap-3 overflow-hidden">
                    {[...Array(8)].map((_, index) => (
                        <React.Fragment key={index}>
                            <Image className="xl:size-[60px] xs:size-[52px]" src={JsIcon} alt="Js" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={GitIcon} alt="Git" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={ReactIcon} alt="ReactJs" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={NextIcon} alt="NextJs" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={TrelloIcon} alt="Linkedin" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={MysqlIcon} alt="MySql" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={TailwindIcon} alt="Tailwind" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={PhpIcon} alt="Php" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={FigmaIcon} alt="Figma" height={60} width={60} />
                            <Image className="xl:size-[60px] xs:size-[52px]" src={NodeIcon} alt="Node" height={60} width={60} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ToolStackSlider;
