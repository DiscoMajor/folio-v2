import React from "react";
import ProjectCard from "./projets-cards.js";

const projects = [
    {
        id: 1,
        name: "tmdb-api",
        title: "The movie database",
        description: "Recupération de données via l'API, mise en forme avec Tailwind CSS",
        keyword: "Api - TailWindCSS - React",
        img: "/icons/movie-icon.svg",
    },
    // {
    //     id: 2,
    //     name: "chat-bot",
    //     title: "AI Dream drawer",
    //     description: "Dessinateur de rêves via AI using Opein AI Apis. Firebase as DB",
    //     keyword: "API - AI - Node.JS - FireBase",
    //     img: "/icons/sleep-time.svg",
    // },
    ,
];

const Projects = () => {
    return (
        <div className="flex flex-wrap  gap-8 xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">
            {projects.map((projet) => (
                <ProjectCard
                    key={projet.id}
                    name={projet.name}
                    title={projet.title}
                    id={projet.id}
                    description={projet.description}
                    keyword={projet.keyword}
                    img={projet.img}
                />
            ))}
        </div>
    );
};

export default Projects;
