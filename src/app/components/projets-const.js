import React from "react";
import ProjectCard from "./projets-cards.js";

const projects = [
    {
        id: 1,
        name: "tmdb-api",
        title: "The movie database (en construction)",
        description: "Recupération de données via l'API, mise en forme avec Tailwind CSS",
        keyword: "Api - TailWindCSS - React",
        img: "/icons/movie-icon.svg",
    },
    // ,
    // {
    //     id: 2,
    //     name: "bibliotheque-crud",
    //     title: "Bibliothèque de livres",
    //     description: "Gestion CRUD, Filtrage des recherches",
    //     keyword: "#NodeJs",
    //     img: "/icons/book-icon.svg",
    // },
];

const Projects = () => {
    return (
        <div className="flex flex-col gap-6 xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">
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
