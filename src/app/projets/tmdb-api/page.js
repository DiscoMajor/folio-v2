"use client";
import DiscoverMoviesCarousel from "@/app/components/discoverMoviesCarousel";
import { Analytics } from "@vercel/analytics/react";
import UpcomingMovies from "@/app/components/upcoming-movies.js";

export default function Movie() {
    return (
        <div className="bg-navycolor relative">
            <Analytics />

            <DiscoverMoviesCarousel />

            <UpcomingMovies />
        </div>
    );
}

/* {discoverMovieList.slice(0, 10) affiche 10 films maximum. */
/* {discoverMovieList.map((movie) parcours tous les films à découvrir */
