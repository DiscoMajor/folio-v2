"use client";
import { Monda } from "next/font/google";
import { useState } from "react";
const monda = Monda({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    return (
        <main className={`bg-slate-800 h-screen flex items-center justify-center`}>
            <section>
                <h2 className={`text-5xl p-10 text-center ${monda.className}`}>Connexion</h2>
                <div className="flex justify-center items-center">
                    <form className="flex flex-col gap-5">
                        {isSignUpActive && <legend className={`text-3xl ${monda.className}`}>Sign Up</legend>}
                        {!isSignUpActive && <legend className={`text-3xl ${monda.className}`}>Sign In</legend>}

                        <fieldset>
                            <ul>
                                <li>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" />
                                </li>
                                <li>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" />
                                </li>
                            </ul>

                            {isSignUpActive && <button type="button">Sign Up</button>}
                            {!isSignUpActive && <button type="button">Sign In</button>}
                        </fieldset>
                        {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
                        {!isSignUpActive && <a onClick={handleMethodChange}>Create an Account</a>}
                    </form>
                </div>
            </section>
        </main>
    );
}
