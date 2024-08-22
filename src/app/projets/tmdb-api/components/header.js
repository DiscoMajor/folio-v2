import Image from "next/image";
import SiteLogo from "/public/icons/tmdb-logo.svg";

export default function Header() {
    return (
        <>
            <nav className="flex">
                <div></div>
                <Image src={SiteLogo} alt="Website Logo" height={100} width={100}></Image>
                <ul>
                    <li>Home</li>
                    <li>Discover Section</li>
                    <li>Upcoming Films</li>
                </ul>

                <div>
                    <ul>
                        <li>Search ICO</li>
                        <li>Account Ico</li>
                        <li>Notif Ico</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
