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
import ApiIcon from "/public/icons/apifetch.svg";
import CssIcon from "/public/icons/css.svg";

const icons = [JsIcon, GitIcon, ReactIcon, NextIcon, CssIcon, TrelloIcon, MysqlIcon, TailwindIcon, PhpIcon, FigmaIcon, ApiIcon];

const ToolStackSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const scrollStep = 0.2;
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
            <div className="font-bold lg:text-2xl sm:text-xl xs:text-md xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">Tool Stack</div>
            <div className="relative overflow-hidden max-w-[600px] mx-auto blur-overlay p-2">
                <div ref={sliderRef} className="flex xl:gap-5 xs:gap-3 overflow-hidden z-50">
                    {[...Array(8)].flatMap((_, index) =>
                        icons.map((icon, idx) => (
                            <Image
                                key={`${index}-${idx}`}
                                className="xl:size-[60px] xs:size-[52px]"
                                src={icon}
                                alt={`Icon ${index}-${idx}`}
                                height={60}
                                width={60}
                            />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default ToolStackSlider;
