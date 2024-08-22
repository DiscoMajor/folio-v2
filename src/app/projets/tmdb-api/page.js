"use client";
import DiscoverMoviesCarousel from "@/app/projets/tmdb-api/components/discover-movies-carousel.js";
import { Analytics } from "@vercel/analytics/react";
import UpcomingMovies from "./components/upcoming-movies.js";
import Header from "@/app/projets/tmdb-api/components/header.js";

export default function Movie() {
    return (
        <div className="bg-navycolor relative">
            <Analytics />

            <Header></Header>

            <DiscoverMoviesCarousel />

            <UpcomingMovies />
        </div>
    );
}
