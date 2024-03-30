import React from "react";
import projectImage1 from "../assets/fluorecencia.jpg";
import projectImage2 from "../assets/esterilizador.jpg";
import projectImage3 from "../assets/xl1000.jpg";

const Projects = () => {
    const projects = [
        {
            brandName: "Nikon",
            description:
                "Nikon es una marca l\u00EDder en el mercado de microscopios y equipos \u00F3pticos de alta calidad. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus microscopios, ampliamente utilizados en investigaci\u00F3n cient\u00EDfica, educaci\u00F3n y diagn\u00F3stico m\u00E9dico.",
            projectsImageSrc: projectImage1,
            githubLink: "https://github.com/Yepe1723",
        },
        {
            brandName: "Tuttnauer",
            description:
                "Tuttnauer es una empresa reconocida por sus autoclaves y equipos de esterilizaci\u00F3n de vanguardia. Ofrezco mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus soluciones de esterilizaci\u00F3n, ampliamente utilizadas en hospitales, cl\u00EDnicas dentales y laboratorios.",
            projectsImageSrc: projectImage2,
            githubLink: "https://github.com/Yepe1723",
        },
        {
            brandName: "Erba",
            description:
                "Erba es una marca l\u00EDder en el campo de los analizadores de hematolog\u00EDa y qu\u00EDmica cl\u00EDnica. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus equipos, utilizados en laboratorios cl\u00EDnicos y hospitales para realizar pruebas de diagn\u00F3stico precisas y confiables.",
            projectsImageSrc: projectImage3,
            githubLink: "https://github.com/Yepe1723",
        },
    ];

    return (
        <div name="Projects" className="h-screen w-screen flex items-center flex-col">
            <h2 className="font-semibold text-[40px]">Especialista en Marcas</h2>
            <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
                {projects.map((p) => (
                    <div
                        key={p.brandName}
                        className="relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500"
                    >
                        <img className="object-cover" src={p.projectsImageSrc} alt="" />
                        <span className="flex flex-col items-center justify-center absolute w-full h-full text-black text-sm font-bold bg-white bg-opacity-80 backdrop-blur hover:backdrop-blur-[20px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-center px-2">{p.description}</p>
                            <div className="mt-2">
                                <a
                                    href={p.githubLink}
                                    className="text-blue-400 hover:underline"
                                >
                                    Github
                                </a>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;