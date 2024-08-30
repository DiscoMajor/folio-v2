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
        return <p className={`text-white text-2xl font-semibold flex justify-center items-center h-96`}>Chargement des données...</p>;
    }

    return (
        <section className="relative inset-0 z-40 xl:h-screen md:h-[700px] xs:h-[500px] blur-hero">
            <div className="relative h-full">
                <div key={discoverMovieList.id} className="absolute inset-0 h-full">
                    <div className="carousel h-full">
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${discoverMovieList[currentIndex].backdrop_path}`}
                            alt={discoverMovieList[currentIndex].title}
                            width={2000}
                            height={1200}
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute xl:top-36 md:top-36 sm:top-28 xs:top-24 left-1/2 transform -translate-x-1/2 z-50 drop-shadow-6xl contrast-200 ">
                            <h2
                                className={`text-white text-center xl:text-6xl sm:text-6xl xs:text-2xl contrast-200 drop-shadow-6xl  ${bebas.className}`}
                            >
                                {discoverMovieList[currentIndex].title}
                            </h2>
                        </div>

                        <div className="absolute  inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                            <p
                                className={`xl:p-40 md:p-28 sm:p-28 xs:p-9 text-justify xl:text-2xl sm:text-base xs:text-sm xl:leading-8 xs:leading-4 font-semibold ${abel.className}`}
                            >
                                {discoverMovieList[currentIndex].overview}
                            </p>

                            <div
                                className={`absolute bottom-28 z-50 xl:p-5 sm:p-3 xs:p-1 xl:text-base sm:text-sm xs:text-xxs contrast-200`}
                            >
                                <p>
                                    📅 {discoverMovieList[currentIndex].release_date} - ⭐{" "}
                                    {discoverMovieList[currentIndex].vote_average.toFixed(1)} - 🎭{" "}
                                    {getGenreNames(discoverMovieList[currentIndex].genre_ids).join(", ")}
                                </p>
                            </div>
                        </div>

                        {/* Bouton gauche carousel */}
                        <button className="p-3 absolute left-0 top-1/2 transform -translate-y-1/2 z-50" onClick={handlePrev}>
                            <Image
                                src={ArrowBack}
                                alt="ArrowBack"
                                height={18}
                                width={18}
                                className="xl:size-8 md:size-8 xs:size-4 contrast-200 drop-shadow-4xl"
                            />
                        </button>

                        {/* Bouton droit carousel */}
                        <button className="p-3 absolute right-0 top-1/2 transform -translate-y-1/2 z-50" onClick={handleNext}>
                            <Image
                                src={ArrowForward}
                                alt="ArrowForward"
                                height={18}
                                width={18}
                                className="xl:size-8 md:size-8 xs:size-4 contrast-200 drop-shadow-4xl"
                            />
                        </button>

                        {/* Indicateurs points carousel */}
                        <div className="absolute bottom-[85px] left-1/2 transform -translate-x-1/2 xl:space-x-2 xs:space-x-1 z-50 contrast-200">
                            {discoverMovieList.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavClick(index)}
                                    className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-sweetpurple" : "bg-slate-600"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
