import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Abel } from "next/font/google";
import ArrowForward from "/public/icons/arrow_forward.svg";
import ArrowBack from "/public/icons/arrow_back.svg";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [discoverMovieList, setDiscoverMovieList] = useState([]);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        const getDiscoverList = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const query = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            const response = await query.json();
            setDiscoverMovieList(response.results.slice(0, 10)); // Limite à 10 films
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

    const handleNavClick = (index) => {
        setCurrentIndex(index);
    };

    if (discoverMovieList.length === 0 || genresList.length === 0) {
        return <p className={`text-white text-xl font-semibold flex justify-center`}>Chargement des données...</p>;
    }

    return (
        <section className="flex flex-col justify-center p-1">
            <h1 className={`xl:text-7xl md:text-5xl xs:text-4xl p-8 mt-2 mb-2 font-bold text-center text-white ${abel.className}`}>
                Find a must-watch movie.
            </h1>

            <div className="xl:p-2 xs:p-2 drop-shadow-3xl">
                <div className="relative flex justify-center items-center max-w-[1000px] mx-auto">
                    <button className="p-3 absolute xl:-left-4 sm:-left-4 xs:-left-3 z-50" onClick={handlePrev}>
                        <Image
                            src={ArrowBack}
                            alt="ArrowBack"
                            height={18}
                            width={18}
                            className="xl:size-8  md:size-8 xs:size-4 contrast-200 drop-shadow-4xl"
                        />
                    </button>

                    <div key={discoverMovieList.id} className="relative overflow-hidden rounded-lg">
                        <div className="relative carousel-cards">
                            <Image
                                src={`https://image.tmdb.org/t/p/w1280${discoverMovieList[currentIndex].backdrop_path}`}
                                alt={discoverMovieList[currentIndex].title}
                                height={500}
                                width={1000}
                                priority
                                style={{ width: "auto", height: "500" }}
                                className="object-cover"
                            />

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                <h2
                                    className={`absolute xl:text-6xl sm:text-6xl xs:text-3xl xl:top-5 sm:top-5 xs:top-2 ${bebas.className}`}
                                >
                                    {discoverMovieList[currentIndex].title}
                                </h2>
                                <p
                                    className={`xl:p-10 sm:p-10 xs:p-4 text-justify xl:text-lg sm:text-base xs:text-custom xl:leading-8 xs:leading-4 font-semibold ${abel.className}`}
                                >
                                    {discoverMovieList[currentIndex].overview}
                                </p>

                                <div className={`absolute bottom-0 xl:p-5 sm:p-3 xs:p-1 xl:text-base sm:text-sm xs:text-xxs`}>
                                    <p>
                                        📅 {discoverMovieList[currentIndex].release_date} - ⭐{" "}
                                        {discoverMovieList[currentIndex].vote_average.toFixed(1)} - 🎭{" "}
                                        {getGenreNames(discoverMovieList[currentIndex].genre_ids).join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="p-3 absolute xl:-right-4 sm:-right-4 xs:-right-3 z-50" onClick={handleNext}>
                        <Image
                            src={ArrowForward}
                            alt="ArrowForward"
                            height={18}
                            width={18}
                            className="xl:size-8 md:size-8 xs:size-4 contrast-200 drop-shadow-4xl"
                        />
                    </button>
                </div>

                {/* Points de navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                    {discoverMovieList.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavClick(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-sweetpurple" : "bg-slate-600"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
