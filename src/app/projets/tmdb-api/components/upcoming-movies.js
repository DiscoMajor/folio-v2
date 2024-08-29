import { useState, useEffect } from "react";
import { Abel } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
const abel = Abel({ subsets: ["latin"], weight: ["400"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function UpcomingMovies() {
    const [UpcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [loadMore, setLoadMore] = useState(4);

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

    const ShowMoreFilms = () => {
        setLoadMore((prevValue) => prevValue + 4);
    };

    return (
        <section className="mx-10 pt-8 pb-5 px-8 relative z-1">
            <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 md:gap-8 xs:gap-1 sm:gap-7 justify-center drop-shadow-2xl">
                {UpcomingMoviesList.slice(0, loadMore).map((UpcomingMovie) => (
                    <div key={UpcomingMovie.id} className="flex flex-col flex-wrap gap-2 items-center xl:scale-90 md:scale-90 xs:scale-90">
                        <div
                            className="xl:w-[320px] xl:h-[475px] sm:w-[320px] sm:h-[475px]  xs:w-[320px] xs:h-[400px] rounded-2xl text-white relative group overflow-hidden"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path})`,
                            }}
                        >
                            <div
                                className="movie-poster-zoom absolute z-1 "
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${UpcomingMovie.poster_path})`,
                                }}
                            ></div>

                            <div className="flex flex-col gap-3 justify-center items-center text-center absolute bottom-0 w-full h-20 bg-slate-700 bg-opacity-50 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <p className="text-sm font-semibold">{getGenreNames(UpcomingMovie.genre_ids).join(", ")}</p>
                                <p className="text-sm">📅 {UpcomingMovie.release_date}</p>
                            </div>
                        </div>

                        <div className=" bg-slate-400 bg-opacity-30 rounded-2xl p-4 absolute -top-6 -right-9 z-50">
                            <p className="text-sm font-semibold text-white">⭐ {UpcomingMovie.vote_average.toFixed(1)}</p>
                        </div>

                        <div className="flex flex-col items-center max-w-72">
                            <h2 className={`text-2xl p-2 text-white text-center ${bebas.className}`}>{UpcomingMovie.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center my-5 ">
                <button
                    className={`py-2 w-40 text-lg border-2 shadow-2xl text-slate-200 rounded-md  hover:scale-105 transform ease-in-out duration-300 ${abel.className}`}
                    onClick={ShowMoreFilms}
                >
                    Load more
                </button>
            </div>
        </section>
    );
}
