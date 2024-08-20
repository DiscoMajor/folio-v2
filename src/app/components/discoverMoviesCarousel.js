import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

//! Responsive marche pas
//! Ajouter une fade out au changement de films
//! Afficher 3-4 films maximum
//! revoir les boutons des sliders

const jersey = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [discoverMovieList, setDiscoverMovieList] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const getDiscoverList = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const query = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const response = await query.json();
            setDiscoverMovieList(response.results);
            // console.log(`Discover movies:`, response);
        };
        getDiscoverList();
    }, []);

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

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % discoverMovieList.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + discoverMovieList.length) % discoverMovieList.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Changement automatique toutes les 5 secondes
        return () => clearInterval(interval);
    }, [discoverMovieList.length]);

    if (discoverMovieList.length === 0 || genresList.length === 0) {
        return <p>Chargement des données...</p>;
    }

    return (
        <section className="p-10">
            <div className="relative flex justify-center items-center ">
                <button className=" p-5" onClick={handlePrev}>
                    ⬅️
                </button>
                <div key={discoverMovieList.id} className="relative overflow-hidden rounded-lg">
                    <div className="relative carousel-cards">
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280${discoverMovieList[currentIndex].backdrop_path}`}
                            alt={discoverMovieList[currentIndex].title}
                            height={500}
                            width={1000}
                            style={{ width: "auto", height: "auto" }}
                            className="object-cover "
                        />

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                            <h2 className={`absolute top-10 xl:text-6xl xs:text-4xl text-center ${jersey.className}`}>
                                {discoverMovieList[currentIndex].title}
                            </h2>
                            <p className="xl:p-10 xs:p-2 text-justify xl:text-lg xs:text-md xl:leading-8 xs:leading-6 font-semibold ">
                                {discoverMovieList[currentIndex].overview}
                            </p>

                            <div className={`absolute xl:bottom-5 xs:bottom-5 p-3  xl:leading-8 xs:leading-5 xl:text-base xs:text-xs`}>
                                <p>📅 {discoverMovieList[currentIndex].release_date}</p>
                                <p>⭐ {discoverMovieList[currentIndex].vote_average}</p>
                                <p>🎭 {getGenreNames(discoverMovieList[currentIndex].genre_ids).join(", ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="p-5" onClick={handleNext}>
                    ➡️
                </button>
            </div>
        </section>
    );
};

export default Carousel;
