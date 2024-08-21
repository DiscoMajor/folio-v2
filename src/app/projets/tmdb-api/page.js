"use client";
import Carousel from "@/app/components/discoverMoviesCarousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import { Bungee } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const jersey = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const bungee = Bungee({ subsets: ["latin"], weight: ["400"] });

export default function Movie() {
    const [UpcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const request = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
            const res = await request.json();
            setGenresList(res.genres);
        };
        getGenres();
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => {
                const genre = genresList.find((g) => g.id === id);
                return genre ? genre.name : null;
            })
            .filter(Boolean);
    };

    useEffect(() => {
        const getUpcoming = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
            const res = await request.json();
            setUpcomingMoviesList(res.results);
            // console.log(`Upcoming movies :`, res);
        };
        getUpcoming();
    }, []);

    return (
        <div className="bg-slate-100 relative">
            <Analytics />
            <section className="flex flex-col justify-center">
                <h1 className={`xl:text-5xl md:text-5xl xs:text-xl p-5 mt-10 font-bold text-center ${bungee.className}`}>
                    Discover Section
                </h1>
                <Carousel></Carousel>
            </section>

            <section className="mx-10 py-5">
                <h1 className={`xl:text-5xl md:text-5xl xs:text-xl p-3 xl:mb-12 font-bold text-center ${bungee.className}`}>
                    Upcoming Section
                </h1>
                <div className="grid justify-items-center xs:gap-5 sm:gap-8 md:gap-10 xxl:gap-14 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 justify-center drop-shadow-xl">
                    {UpcomingMoviesList.slice(3, 11).map((UpcomingMovie) => (
                        <div key={UpcomingMovie.id} className="flex flex-col flex-wrap gap-2  items-center xl:scale-100 xs:scale-90">
                            <div
                                className="w-[320px] h-[475px] rounded-md text-white relative group overflow-hidden"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path})`,
                                }}
                            >
                                <div
                                    className="movie-poster-zoom"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path})`,
                                    }}
                                ></div>
                                <div className="flex flex-col justify-center items-center text-center absolute bottom-0 w-full h-20 bg-slate-700 bg-opacity-50 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <p className="text-sm font-semibold">{getGenreNames(UpcomingMovie.genre_ids).join(", ")}</p>
                                </div>

                                <div className="bg-slate-200 bg-opacity-60 rounded p-2 absolute top-3 left-3 ">
                                    <p className="text-sm font-semibold text-black">⭐ {UpcomingMovie.vote_average}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-center max-w-72">
                                <h2 className={`text-lg  text-center ${jersey.className}`}>{UpcomingMovie.title}</h2>
                                <p className="text-sm text-gray-400">📅 {UpcomingMovie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

/* {discoverMovieList.slice(0, 10) affiche 10 films maximum. */
/* {discoverMovieList.map((movie) parcours tous les films à découvrir */
