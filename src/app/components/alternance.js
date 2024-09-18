import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });
import Link from "next/link";

export default function Alternance() {
    return (
        <main className="flex flex-col justify-center items-center text-justify ">
            <hr className="w-full h-1/2 bg-white opacity-20"></hr>
            <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12 ">
                <p className="xl:text-2xl sm:text-xl xs:text-md xl:leading-10 xs:leading-6">
                    Développeur Full Stack en alternance chez SOLARIOHM ☀️ en tant que Concepteur d'applications. Solariohm est une
                    entreprise engagée dans le secteur des énergies renouvelables 🌱
                </p>
            </div>

            <hr className="w-full h-1/2 bg-white opacity-20"></hr>

            <div className={monda.className}>
                <p className="xl:text-base xs:text-sm xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 px-12 pt-12  xl:leading-10 xs:leading-6 pb-12">
                    <span className="font-bold hover:text-green-400 hover:transition duration-300 ease-in-out">Je suis enthousiaste</span>
                    &nbsp;à l'idée de mettre mes compétences au service de projets ayant un impact environnemental positif ainsi que de
                    continuer à progresser dans le domaine de la transition énergétique ! 🌍
                </p>
                {/* <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 px-12 pb-12 text-xs ">
                    <Link href="/files/cv_lm_victor_lobbe.pdf" download="cv_lm_victor_lobbe.pdf" target="blank">
                        <span className="hover:text-green-400 underline"> Télécharger mon CV</span>
                    </Link>
                </div> */}
            </div>
        </main>
    );
}
