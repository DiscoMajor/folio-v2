import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });
import Link from "next/link";

export default function Alternance() {
    return (
        <main className="flex flex-col justify-center items-center text-justify ">
            <hr className="w-full h-1/2 bg-white opacity-20"></hr>
            <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12 ">
                <p className="xl:text-2xl sm:text-xl xs:text-md">
                    Développeur web à la recherche d'une entreprise pour réaliser une alternance d'un an en tant que Concepteur Développeur
                    d'Application
                </p>
                <p className="xl:text-2xl sm:text-xl xs:text-md pt-5">
                    Rythme :{" "}
                    <span className="font-bold hover:text-green-400 hover:transition duration-300 ease-in-out">
                        3 semaines entreprise / 1 semaine école
                    </span>
                </p>
            </div>

            <hr className="w-full h-1/2 bg-white opacity-20"></hr>

            <div className={monda.className}>
                <p className="xl:text-base xs:text-sm xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 px-12 pt-12 pb-3 xl:leading-10 xs:leading-6 ">
                    Je suis
                    <span className="font-bold hover:text-green-400 hover:transition duration-300 ease-in-out"> curieux et créatif. </span>
                    Je passe beaucoup de temps à me tenir au courant des dernières tendances, des technologies actuelles, et des innovations
                    en matière de design. Même si j'aime apprendre de nouveaux langages, je souhaite vraiment me spécialiser davantage.
                </p>
                <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 px-12 pb-12 text-xs ">
                    <Link href="/files/cv_lm_victor_lobbe.pdf" download="cv_lm_victor_lobbe.pdf" target="blank">
                        <span className="hover:text-green-400 underline"> Télécharger mon CV</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
