import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Alternance() {
    return (
        <main className="flex flex-col justify-center items-center text-justify ">
            <div className="xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12 ">
                <p className="xl:text-2xl sm:text-xl xs:text-md">
                    Développeur web à la recherche d'une entreprise pour réaliser une alternance d'un an en tant que Concepteur Développeur
                    d'Application
                </p>
                <p className="xl:text-2xl sm:text-xl xs:text-md pt-5">
                    Rythme : <span className="font-bold ">3 semaines entreprise / 1 semaine école</span>
                </p>
            </div>

            <hr className="w-full h-1/2 bg-white opacity-35"></hr>

            <div className={monda.className}>
                <p className="xl:text-2xl sm:text-xl xs:text-md xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12 xl:leading-10 xs:leading-6 ">
                    Je suis curieux et créatif. Je passe beaucoup de temps à me tenir au courant des dernières tendances, des technologies
                    actuelles, et des innovations en matière de design. Même si j'aime apprendre de nouveaux langages, je souhaite vraiment
                    me spécialiser davantage.
                </p>
            </div>
        </main>
    );
}
