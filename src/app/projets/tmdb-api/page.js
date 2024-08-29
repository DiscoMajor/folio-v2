"use client";
import DiscoverMoviesCarousel from "@/app/projets/tmdb-api/components/discover-movies-carousel.js";
import { Analytics } from "@vercel/analytics/react";
import UpcomingMovies from "./components/upcoming-movies.js";
import Tvshows from "./components/tv-shows.js";
import Header from "@/app/projets/tmdb-api/components/header.js";
import Footer from "./components/footer.js";
import Hero from "./components/hero.js";

export default function Movie() {
    return (
        <div className="bg-navycolor ">
            <Analytics />

            <Header></Header>

            <Hero></Hero>

            {/* <DiscoverMoviesCarousel /> */}

            <UpcomingMovies />

            <Tvshows></Tvshows>

            <Footer></Footer>
        </div>
    );
}
