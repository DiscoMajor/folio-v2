"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Movie() {
    const [discoverMovieList, setdiscoverMovieList] = useState([]);
    const [UpcomingMoviesList, setUpcomingMoviesList] = useState([]);

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
        <div className="text-white bg-teal-950">
            <section>
                <h1 className="text-2xl p-10 font-bold text-center">Discover Section</h1>
                <div className="flex justify-center flex-wrap gap-5 p-5">
                    {discoverMovieList.slice(0, 3).map((discoverMovie) => (
                        <div key={discoverMovie.id} className="flex flex-col border-sky-100 border p-5 rounded-md max-w-80 gap-3">
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

            <section className="mx-10 ">
                <h1 className="text-2xl p-10 font-bold text-center">Upcoming Section</h1>
                <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {UpcomingMoviesList.slice(0, 14).map((UpcomingMovie) => (
                        <div key={UpcomingMovie.id} className="flex flex-col border-sky-100 border p-5 rounded-md max-w-60 gap-3">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path}`}
                                width={200}
                                height={300}
                                alt={UpcomingMovie.title}
                            />
                            <h2>{UpcomingMovie.title}</h2>
                            <p>Release Date: {UpcomingMovie.release_date}</p>
                            <p>Rating: {UpcomingMovie.vote_average}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

/* {discoverMovieList.slice(0, 10) affiche 10 films maximum. */
/* {discoverMovieList.map((movie) parcours tous les films à découvrir */
