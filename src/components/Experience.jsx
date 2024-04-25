import React from "react";
import micros from "../assets/technologies/micros.png";
import recorDentalTuttnauer from "../assets/technologies/recor-dental-Tuttnauer.png";
import erba from "../assets/technologies/erba.png";

const Experiencia = () => {
    const tecnologias = [
        {
            nombre: "Nikon",
            imagenSrc: micros,
        },
        {
            nombre: "Recor Dental Tuttnauer",
            imagenSrc: recorDentalTuttnauer,
        },
        {
            nombre: "ERBA",
            imagenSrc: erba,
        },
    ];

    return (
        <div
            name="Experiencia"
            className="h-screen w-full flex flex-col items-center justify-center bg-gray-600 text-white"
        >
            <h2 className="font-semibold text-4xl">Experiencia</h2>
            <div className="max-w-6xl w-full grid grid-cols-3 gap-8 mt-10 p-10">
                {tecnologias.map((t) => (
                    <div key={t.nombre} className="flex flex-col items-center justify-center bg-white p-4 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src={t.imagenSrc} alt={t.nombre} className="h-40 md:h-48 lg:h-56" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiencia;
