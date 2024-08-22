import { Montagu_Slab } from "next/font/google";
const montagu = Montagu_Slab({ subsets: ["latin"], display: "swap", adjustFontFallback: false });

export default function MyName() {
    return (
        <h1
            className={`text-center xl:text-9xl sm:text-7xl xs:text-4xl lg:mx-20 sm:mx-16 lg:py-10 sm:py-20 xs:py-10  animate__animated animate__fadeInDown ${montagu.className}`}
        >
            Victor Lobbé
        </h1>
    );
}
