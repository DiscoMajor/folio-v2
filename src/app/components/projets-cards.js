// projet-cards.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, name, description, keyword, img }) => {
    return (
        <Link href={`/projets/${name}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 relative">
                <div className="px-6 py-4">
                    <div className="text-gray-600 font-bold xl:text-xl xs:text-lg mb-2">{title}</div>
                    <p className="text-gray-500 xl:text-base xs:text-sm pt-3">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 lg:text-sm xs:text-xs font-semibold text-gray-700 mr-2 mb-2 ">
                        {keyword}
                    </span>

                    <span className="size-8 sm:size-8 xs:size-6">
                        <Image
                            src={img}
                            className="size-7 sm:size-7 xs:size-6 absolute bottom-4 right-4"
                            alt={title}
                            height={33}
                            width={33}
                        />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
