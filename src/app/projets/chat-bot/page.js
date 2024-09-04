import { Monda } from "next/font/google";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Bibliotheque() {
    return (
        <main className={monda.className}>
            <section className=" text-black h-screen bg-slate-300 text-3xl font-bold flex justify-center items-center">
                <h1 className="animate-pulse">En construction 🚧👷</h1>
            </section>
        </main>
    );
}
