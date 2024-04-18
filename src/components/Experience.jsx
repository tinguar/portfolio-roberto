import React from "react";
import micros from "../assets/technologies/micros.png";
import recorDentalTuttnauer from "../assets/technologies/recor-dental-Tuttnauer.png";
import erba from "../assets/technologies/erba.png";

const Experience = () => {
    const technologies = [
        {
            name: "Nikon",
            imageSrc: micros,
        },
        {
            name: "Recor Dental Tuttnauer",
            imageSrc: recorDentalTuttnauer,
        },
        {
            name: "ERBA",
            imageSrc: erba,
        },
    ];

    return (
        <div
            name="Experience"
            className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white"
        >
            <h2 className="font-semibold text-4xl">Experiencia</h2>
            <div className="max-w-6xl w-full grid grid-cols-3 gap-8 mt-10 p-10">
                {technologies.map((t) => (
                    <div key={t.name} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src={t.imageSrc} alt={t.name} className="h-40 md:h-48 lg:h-56" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

