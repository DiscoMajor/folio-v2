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
        <main className={`bg-slate-800 h-screen flex items-center justify-center  text-white`}>
            <section>
                <h2 className={`text-5xl p-10 text-center ${monda.className}`}>Homepage</h2>
                <div className="flex justify-center items-center">
                    <form className="flex flex-col gap-5">
                        {isSignUpActive && <legend className={`text-3xl ${monda.className}`}>Sign Up</legend>}
                        {!isSignUpActive && <legend className={`text-3xl ${monda.className}`}>Sign In</legend>}

                        <fieldset className="">
                            <ul className="mt-5">
                                <li className="mb-5">
                                    <label htmlFor="email" className="text-xl">
                                        Email
                                    </label>
                                    <input type="text" id="email" className="input-ai" />
                                </li>
                                <li className="mb-5">
                                    <label htmlFor="password" className="text-xl">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="input-ai" />
                                </li>
                            </ul>

                            {isSignUpActive && (
                                <button type="button" className="button-ai">
                                    Sign Up
                                </button>
                            )}
                            {!isSignUpActive && (
                                <button type="button" className="button-ai">
                                    Sign In
                                </button>
                            )}
                        </fieldset>
                        {isSignUpActive && (
                            <a onClick={handleMethodChange} className="text-yellow-500 cursor-pointer">
                                Login
                            </a>
                        )}
                        {!isSignUpActive && (
                            <a onClick={handleMethodChange} className="text-yellow-500 cursor-pointer">
                                Create an Account
                            </a>
                        )}
                    </form>
                </div>
            </section>
        </main>
    );
}
