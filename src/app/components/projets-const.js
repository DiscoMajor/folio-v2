import React from "react";
import ProjectCard from "./projets-cards.js";

const projects = [
    { id: 1, name: "tmdb-api", title: "The movie database", description: "Manipulation de l'API", keyword: "#Api" },
    {
        id: 2,
        name: "bibliotheque-crud",
        title: "Bibliothèque de livres",
        description: "Gestion de bibliothèque CRUD, Filtrage recherche",
        keyword: "#NodeJs",
    },
];

const Projects = () => {
    return (
        <div className="flex flex-col gap-5 xl:mx-60 lg:mx-52 md:mx-28 sm:mx-11 xs:mx-2 p-12">
            {projects.map((projet) => (
                <ProjectCard
                    key={projet.id}
                    name={projet.name}
                    title={projet.title}
                    id={projet.id}
                    description={projet.description}
                    keyword={projet.keyword}
                />
            ))}
        </div>
    );
};

export default Projects;
