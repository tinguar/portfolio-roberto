import React from "react";

import micros from "../assets/technologies/micros.png";
import recorDentalTuttnauer from "../assets/technologies/recor-dental-Tuttnauer.png";
import erba from "../assets/technologies/erba.png";

const Experience = () => {
    const technologies = [
        {
            name: "Nikon",
            imageSrc: micros,
            link: "https://www.microscope.healthcare.nikon.com/es_AMS/products",
        },
        {
            name: "Recor Dental Tuttnauer",
            imageSrc: recorDentalTuttnauer,
            link: "https://tuttnauer.com/es",
        },
        {
            name: "ERBA",
            imageSrc: erba,
            link: "https://www.erbalachema.com/es/",
        },
    ];

    return (
        <div
            name="Experience"
            className="h-screen w-full flex flex-col items-center justify-center"
        >
            <h2 className="font-semibold text-4xl">Experiencia</h2>
            <div className="w-full grid grid-cols-3 gap-8 mt-10 p-10 bg-gray-800">
                {technologies.map((t) => (
                    <div key={t.name} className="flex flex-col items-center">
                        <img src={t.imageSrc} alt={t.name} className="object-cover h-32" />
                        <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-blue-500 hover:text-blue-700"
                        >
                            Visitar sitio web
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;