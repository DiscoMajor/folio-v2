import Image from "next/image";
import GithubIcon from "/public/icons/github.svg";
import MailIcon from "/public/icons/mail.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/victor-lobb%C3%A9-999848296/",
        src: LinkedinIcon,
        alt: "Linkedin",
    },
    {
        href: "https://github.com/DiscoMajor",
        src: GithubIcon,
        alt: "GitHub",
    },
    {
        href: "mailto:victorlobbe@gmail.com",
        src: MailIcon,
        alt: "Mail",
    },
];

export default function SocialsIcons() {
    return (
        <div className="flex absolute xl:gap-5 xs:gap-2 xl:right-8 xl:top-6 sm:right-8 sm:top-6 xs:right-1 xs:top-1 xs:p-1 z-20">
            {socialLinks.map(({ href, src, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                    <Image src={src} className="size-8 sm:size-8 xs:size-6" alt={alt} height={33} width={33} />
                </a>
            ))}
        </div>
    );
}
