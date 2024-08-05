import Image from "next/image";
import BackgroundChanger from "./components/backgroundchanger";
import { Montagu_Slab } from "next/font/google";
import { Monda } from "next/font/google";

import GithubIcon from "/public/icons/github.svg";
import MailIcon from "/public/icons/mail.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";
import ArrowDown from "/public/icons/arrowdown.svg";
import FigmaIcon from "/public/stackicons/figma.svg";
import GitIcon from "/public/stackicons/git.svg";
import JsIcon from "/public/stackicons/js.svg";
import MysqlIcon from "/public/stackicons/mysql.svg";
import NextIcon from "/public/stackicons/next.svg";
import PhpIcon from "/public/stackicons/php.svg";
import ReactIcon from "/public/stackicons/react.svg";
import TailwindIcon from "/public/stackicons/tailwind.svg";
import TrelloIcon from "/public/stackicons/trello.svg";
import NodeIcon from "/public/stackicons/node.svg";

const montagu = Montagu_Slab({ subsets: ["latin"] });
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <BackgroundChanger>
            <main className="relative  text-white">
                <div className={montagu.className}>
                    <h1 className="text-center text-9xl mx-20 mt-20 mb-20">Victor Lobbé</h1>
                </div>

                <hr className="w-full h-1/2 bg-white"></hr>

                <div className={monda.className}>
                    <div className="mx-60 my-12">
                        <p className="text-2xl leading-10">
                            Développeur web à la recherche d'une entreprise pour réaliser une alternance d'un an en tant que Concepteur
                            Développeur d'Application
                        </p>
                        <p className="text-2xl mt-5">
                            Rythme : <span className="font-bold">3 semaines entreprise / 1 semaine école</span>
                        </p>
                    </div>

                    <hr className="w-full h-1/2 bg-white "></hr>

                    <div className={monda.className}>
                        <p className="text-lg mx-60 my-12">
                            Je suis curieux et créatif. Je passe beaucoup de temps à me tenir au courant des dernières tendances, des
                            technologies actuelles, et des innovations en matière de design. Même si j'adore apprendre de nouveaux langages,
                            je veux vraiment me spécialiser davantage.
                        </p>
                    </div>

                    <hr className="w-full h-1/2 bg-white"></hr>

                    <div className={monda.className}>
                        <p className="font-bold text-lg mx-60  my-12">Tool Stack</p>

                        <div className="">
                            <div className="flex">
                                <Image src={JsIcon} alt="Js" height={74} width={74}></Image>

                                <Image src={GitIcon} alt="Git" height={74} width={74}></Image>

                                <Image src={ReactIcon} alt="ReactJs" height={74} width={74}></Image>

                                <Image src={NextIcon} alt="NextJs" height={74} width={74}></Image>

                                <Image src={TrelloIcon} alt="Linkedin" height={74} width={74}></Image>

                                <Image src={MysqlIcon} alt="MySql" height={74} width={74}></Image>

                                <Image src={TailwindIcon} alt="Tailwind" height={74} width={74}></Image>

                                <Image src={PhpIcon} alt="Php" height={74} width={74}></Image>

                                <Image src={FigmaIcon} alt="Figma" height={74} width={74}></Image>

                                <Image src={NodeIcon} alt="Figma" height={74} width={74}></Image>
                            </div>
                        </div>
                    </div>

                    <div className="flex  gap-5 absolute right-10 -top-14">
                        <a href="https://www.linkedin.com/in/victor-lobb%C3%A9-999848296/" target="blank">
                            <Image src={LinkedinIcon} alt="Linkedin" height={33} width={33}></Image>
                        </a>
                        <a href="https://github.com/DiscoMajor" target="blank">
                            <Image src={GithubIcon} alt="GitHub" height={33} width={33}></Image>
                        </a>
                        <a href="mailto:victorlobbe@gmail.com">
                            <Image src={MailIcon} alt="Mail" height={33} width={33}></Image>
                        </a>
                    </div>

                    <div className="absolute">
                        <Image src={ArrowDown} alt="ArrowDown" height={33} width={33}></Image>
                    </div>
                </div>
            </main>
        </BackgroundChanger>
    );
}
