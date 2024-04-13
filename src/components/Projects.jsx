import React from "react";
import projectImage1 from "../assets/fluorecencia.jpg";
import projectImage2 from "../assets/esterilizador.jpg";
import projectImage3 from "../assets/xl1000.jpg";
import "./Home.css"; 

const Projects = () => {
    const projects = [
        {
            brandName: "Nikon",
            description:
                "Nikon es una marca líder en el mercado de microscopios y equipos ópticos de alta calidad. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus microscopios, ampliamente utilizados en investigación científica, educación y diagnóstico médico.",
            projectsImageSrc: projectImage1,
            link: "https://www.microscope.healthcare.nikon.com/es_AMS/products",
        },
        {
            brandName: "Tuttnauer",
            description:
                "Tuttnauer es una empresa reconocida por sus autoclaves y equipos de esterilización de vanguardia. Ofrezco mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus soluciones de esterilización, ampliamente utilizadas en hospitales, clínicas dentales y laboratorios.",
            projectsImageSrc: projectImage2,
            link: "https://tuttnauer.com/es",
        },
        {
            brandName: "Erba",
            description:
                "Erba es una marca líder en el campo de los analizadores de hematología y química clínica. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus equipos, utilizados en laboratorios clínicos y hospitales para realizar pruebas de diagnóstico precisas y confiables.",
            projectsImageSrc: projectImage3,
            link: "https://www.erbalachema.com/es/",
        },
    ];

    return (
        <div name="Projects" className="background-container h-screen w-screen flex items-center flex-col">
            {/* Aquí se aplica la clase para el fondo ejecutivo */}
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
                                    href={p.link} 
                                    className="text-blue-400 hover:underline"
                                >
                                    conoce mas 
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
