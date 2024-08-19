import Image from "next/image";
import ArrowDown from "/public/icons/arrowdown.svg";

export default function DownArrow() {
    return (
        <div className="mx-auto arrow-down lg:p-12 xs:p-5">
            <Image src={ArrowDown} alt="ArrowDown" />
        </div>
    );
}
