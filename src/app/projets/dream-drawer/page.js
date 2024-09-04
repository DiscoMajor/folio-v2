"use client";
import { Monda } from "next/font/google";

const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <main className={`bg-slate-800 h-screen flex items-center justify-center  text-white`}>
            <h1>HOME PAGE !</h1>
        </main>
    );
}
