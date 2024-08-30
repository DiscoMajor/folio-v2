import { useState, useEffect, useRef } from "react";
import { Abel } from "next/font/google";
import ArrowForward from "/public/icons/arrow_forward.svg";
import ArrowBack from "/public/icons/arrow_back.svg";
import Image from "next/image";

const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function Tvshow() {
    const [tvshows, setTvShows] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(200);
    const itemsPerPage = 1;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const getTvshows = async () => {
            const apiKey = process.env.NEXT_PUBLIC_TMDB;
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`);
            const data = await response.json();
            setTvShows(data.results);
            console.log(data.results);
        };
        getTvshows();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = document.querySelector(".carousel-item")?.offsetWidth || 200;
            setItemWidth(width);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const nextPage = () => {
        if (currentIndex + itemsPerPage < tvshows.length) {
            setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
        }
    };

    const prevPage = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        if (touchStartX.current - touchEndX.current > 50) {
            nextPage();
        } else if (touchStartX.current - touchEndX.current < -50) {
            prevPage();
        }
    };

    return (
        <div className="mb-3">
            <div className="text-center flex flex-col gap-3 p-1 my-5 text-white">
                <h1 className={`xl:text-6xl md:text-4xl xs:text-3xl ${abel.className}`}>More into TV Shows?</h1>
                <p className="xl:text-xl md:text-xl sm:text-md xs:text-sm">There is a quick selection of most popular shows right now</p>
            </div>

            <div className="relative overflow-hidden p-5" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div
                    className={`relative flex items-center text-white gap-6 ${abel.className}`}
                    style={{
                        transform: `translateX(-${currentIndex * itemWidth}px)`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {tvshows.map((show) => (
                        <section
                            key={show.id}
                            className="carousel-item text-left text-sm flex flex-col gap-2"
                            style={{ flex: "0 0 auto", width: `${itemWidth}px` }}
                        >
                            <div className="relative flex flex-col gap-6 h-96">
                                <img
                                    src={`${baseImageUrl}${show.poster_path}`}
                                    alt={`Poster for ${show.name}`}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h1 className={`text-xl ${abel.className}`}>⭐ {show.vote_average.toFixed(1)}</h1>
                                    <a href="https://www.netflix.com/fr/" target="blank">
                                        <button className="mt-2 px-4 py-2 bg-sweetpurple text-white rounded">Regarder</button>
                                    </a>
                                </div>
                            </div>
                            <h1>{show.name}</h1>
                        </section>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevPage}
                        className="p-3 ml-1 bg-opacity-20 contrast-200 drop-shadow-4xl rounded absolute top-48 left-0"
                    >
                        <Image
                            src={ArrowBack}
                            alt="Previous"
                            height={18}
                            width={18}
                            className="xl:size-8 md:size-8 xs:size-4  drop-shadow-4xl"
                        />
                    </button>

                    <button
                        onClick={nextPage}
                        className="p-3 mr-1 bg-opacity-20 contrast-200 drop-shadow-4xl rounded absolute top-48 right-0"
                    >
                        <Image
                            src={ArrowForward}
                            alt="Next"
                            height={18}
                            width={18}
                            className="xl:size-8 md:size-8 xs:size-4  drop-shadow-4xl"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
