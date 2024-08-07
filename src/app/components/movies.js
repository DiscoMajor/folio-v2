"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Movie() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const query = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const response = await query.json();
            setMovieList(response.results);
            console.log(response);
        };
        getData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl p-5 font-bold">Discover section</h1>
            <div className="flex justify-center flex-wrap gap-5 p-5">
                {movieList.map((movie) => (
                    <div key={movie.id} className="flex flex-col border-sky-100 border p-5 rounded-md max-w-60 gap-3">
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={200} height={300} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>

            <h1 className="text-2xl p-5 font-bold">Popular Movies</h1>
        </div>
    );
}

/* {movieList.slice(0, 10) affiche 10 films maximum. */
/* {movieList.map((movie) parcours tous les films à découvrir */
