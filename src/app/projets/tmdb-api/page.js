"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Movie() {
    const [discoverMovieList, setdiscoverMovieList] = useState([]);
    const [UpcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const request = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
            const res = await request.json();
            setGenresList(res.genres);
            console.log(`GENRE :`, res);
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
            console.log(`Upcoming movies :`, res);
        };
        getUpcoming();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const query = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const response = await query.json();
            setdiscoverMovieList(response.results);
            console.log(`Discover movies :`, response);
        };
        getData();
    }, []);

    return (
        <div className="text-black bg-slate-50 relative">
            <section className="mx-10 py-10">
                <h1 className="text-2xl p-10 font-bold text-center">Upcoming Section (en construction)</h1>
                <div className="grid justify-items-center xs:gap-5 sm:gap-8 md:gap-10 xxl:gap-14 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 justify-center drop-shadow-xl">
                    {UpcomingMoviesList.slice(3, 11).map((UpcomingMovie) => (
                        <div key={UpcomingMovie.id} className="flex flex-col gap-2">
                            <div
                                className="w-[320px] h-[475px] rounded-md text-white relative group"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="flex flex-col justify-center items-center absolute bottom-0 w-full h-20 bg-slate-700 bg-opacity-50 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <p>{getGenreNames(UpcomingMovie.genre_ids).join(", ")}</p>
                                </div>

                                <div className="text-sm bg-slate-300 bg-opacity-50 rounded p-2 absolute top-3 left-3 ">
                                    <p>Score : {UpcomingMovie.vote_average}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 items-center max-w-72">
                                <h2 className="text-base font-semibold  text-center">{UpcomingMovie.title}</h2>
                                <p className="text-sm text-gray-400">Date de sortie : {UpcomingMovie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h1 className="text-2xl p-10 font-bold text-center">Discover Section (en construction)</h1>
                <div className="flex justify-center flex-wrap gap-5 p-5">
                    {discoverMovieList.slice(0, 3).map((discoverMovie) => (
                        <div key={discoverMovie.id} className="flex flex-col  bg-slate-400 p-5 rounded-md max-w-80 gap-3">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${discoverMovie.poster_path}`}
                                width={200}
                                height={300}
                                alt={discoverMovie.title}
                            />
                            <h2>{discoverMovie.title}</h2>
                            <p>Release Date: {discoverMovie.release_date}</p>
                            <p>Rating: {discoverMovie.vote_average}</p>
                            <p>{discoverMovie.original_language}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

/* {discoverMovieList.slice(0, 10) affiche 10 films maximum. */
/* {discoverMovieList.map((movie) parcours tous les films à découvrir */
