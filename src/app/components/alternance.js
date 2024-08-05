import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Alternance() {
    return (
        <main>
            <div className="lg:mx-60 sm:mx-20 xs:mx-8 my-12">
                <p className="lg:text-2xl sm:text-xl xs:text-lg">
                    Développeur web à la recherche d'une entreprise pour réaliser une alternance d'un an en tant que Concepteur Développeur
                    d'Application
                </p>
                <p className="lg:text-2xl sm:text-xl xs:text-lg  mt-5">
                    Rythme : <span className="font-bold ">3 semaines entreprise / 1 semaine école</span>
                </p>
            </div>

            <hr className="w-full h-1/2 bg-white "></hr>

            <div className={monda.className}>
                <p className="text-lg lg:mx-60 sm:mx-20 xs:mx-8 my-12 leading-10 ">
                    Je suis curieux et créatif. Je passe beaucoup de temps à me tenir au courant des dernières tendances, des technologies
                    actuelles, et des innovations en matière de design. Même si j'adore apprendre de nouveaux langages, je veux vraiment me
                    spécialiser davantage.
                </p>
            </div>
        </main>
    );
}
