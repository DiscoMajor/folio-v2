import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import ArrowForward from "/public/icons/arrow_forward.svg";
import ArrowBack from "/public/icons/arrow_back.svg";

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

    // useEffect(() => {
    //     const interval = setInterval(handleNext, 5000);
    //     return () => clearInterval(interval);
    // }, [discoverMovieList.length]);

    if (discoverMovieList.length === 0 || genresList.length === 0) {
        return <p>Chargement des données...</p>;
    }

    return (
        <section className="xl:p-10 xs:p-3">
            <div className="relative flex justify-center items-center max-w-[1000px] mx-auto">
                <button className="p-3 absolute xl:-left-4 sm:-left-4 xs:-left-3 z-50" onClick={handlePrev}>
                    <Image src={ArrowBack} alt="ArrowBack" height={18} width={18} className="xl:size-8 xs:size-3"></Image>
                </button>

                <div key={discoverMovieList.id} className="relative overflow-hidden rounded-lg">
                    <div className="relative carousel-cards">
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280${discoverMovieList[currentIndex].backdrop_path}`}
                            alt={discoverMovieList[currentIndex].title}
                            height={500}
                            width={1000}
                            style={{ width: "auto", height: "500" }}
                            className="object-cover "
                        />

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                            <h2 className={`absolute xl:text-6xl sm:text-6xl xs:text-3xl xl:top-5 sm:top-5 xs:top-2 ${jersey.className}`}>
                                {discoverMovieList[currentIndex].title}
                            </h2>
                            <p className="xl:p-10 sm:p-10 xs:p-4 text-justify xl:text-lg sm:text-base xs:text-xxs xl:leading-8 xs:leading-4 font-semibold ">
                                {discoverMovieList[currentIndex].overview}
                            </p>

                            <div className={`absolute bottom-0 xl:p-5 sm:p-3 xs:p-1 xl:text-base sm:text-sm xs:text-xxs`}>
                                <p>
                                    📅 {discoverMovieList[currentIndex].release_date} - ⭐ {discoverMovieList[currentIndex].vote_average} -
                                    🎭 {getGenreNames(discoverMovieList[currentIndex].genre_ids).join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="p-3 absolute xl:-right-4 sm:-right-4 xs:-right-3 z-50" onClick={handleNext}>
                    <Image src={ArrowForward} alt="ArrowForward" height={18} width={18} className="xl:size-8 xs:size-3"></Image>
                </button>
            </div>
        </section>
    );
};

export default Carousel;
