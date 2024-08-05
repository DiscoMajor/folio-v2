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
