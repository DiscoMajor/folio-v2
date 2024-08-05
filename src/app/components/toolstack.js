import Image from "next/image";
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
import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function ToolStack() {
    return (
        <main>
            <hr className="w-full h-1/2 bg-white"></hr>

            <div className={monda.className}>
                <p className="font-bold text-lg mx-60  my-12">Tool Stack</p>
            </div>

            <div className="flex justify-center gap-5 drop-shadow-lg">
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
        </main>
    );
}
