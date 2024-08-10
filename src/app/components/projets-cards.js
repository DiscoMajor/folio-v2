// projet-cards.js
import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, name, description, keyword }) => {
    return (
        <Link href={`/projets/${name}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="px-6 py-4">
                    <div className="text-gray-600 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-500 text-base">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {keyword}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
