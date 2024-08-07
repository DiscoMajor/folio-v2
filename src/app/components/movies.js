"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Movie() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
            const query = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const response = await query.json();
            console.log(`console log :`, response);
            setMovieList(response.results);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>MOVIES API</h1>
            <div className="flex flex-wrap gap-5 justify-around">
                {movieList.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={200} height={300} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
