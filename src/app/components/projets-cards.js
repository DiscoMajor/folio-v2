// projet-cards.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, name, description, keyword, img }) => {
    return (
        <Link href={`/projets/${name}`}>
            <div className="flex flex-col card hover:-translate-y-1 duration-300 ease-in-out bg-white">
                <section className="z-50 relative">
                    <div className="px-6 py-4">
                        <div className="text-white font-bold xl:text-xl xs:text-lg mb-2">{title}</div>
                        <p className="text-gray-300 xl:text-base xs:text-sm pt-3">{description}</p>

                        <div className="pt-6">
                            <span className="inline-block bg-gray-300 rounded-full lg:text-sm xs:text-xs font-semibold text-gray-700 mr-2 mb-2 px-3 py-1 ">
                                {keyword}
                            </span>
                        </div>
                        <span className="absolute bottom-6 right-6">
                            <Image src={img} className="size-7 sm:size-7 xs:size-6" alt={title} height={33} width={33} />
                        </span>
                    </div>
                </section>
            </div>
        </Link>
    );
};

export default ProjectCard;
