import Image from "next/image";
import GithubIcon from "/public/icons/github.svg";
import MailIcon from "/public/icons/mail.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";

export default function SocialsIcons() {
    return (
        <div className="flex lg:gap-5 absolute lg:right-10 lg:top-10 xs:right-2 xs:top-2 xs:gap-2 xs:p-1 z-1 ">
            <a href="https://www.linkedin.com/in/victor-lobb%C3%A9-999848296/" target="blank">
                <Image src={LinkedinIcon} className="size-8 sm:size-8 xs:size-6" alt="Linkedin" height={33} width={33}></Image>
            </a>
            <a href="https://github.com/DiscoMajor" target="blank">
                <Image src={GithubIcon} className="size-8 sm:size-8 xs:size-6" alt="GitHub" height={33} width={33}></Image>
            </a>
            <a href="mailto:victorlobbe@gmail.com">
                <Image src={MailIcon} className="size-8 sm:size-8 xs:size-6" alt="Mail" height={33} width={33}></Image>
            </a>
        </div>
    );
}
