import React from "react";
import projectImage1 from "../assets/fluorecencia.jpg";
import projectImage2 from "../assets/esterilizador.jpg";
import projectImage3 from "../assets/xl1000.jpg";
import calculatorImage from "../assets/calculator.png";
import "./Home.css";

const Proyectos = () => {
  const proyectos = [
    {
      nombreMarca: "Nikon",
      descripcion:
        "Nikon es una marca líder en el mercado de microscopios y equipos ópticos de alta calidad. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus microscopios, ampliamente utilizados en investigación científica, educación y diagnóstico médico.",
      imagenProyectoSrc: projectImage1,
      enlace: "https://www.microscope.healthcare.nikon.com/es_AMS/products",
    },
    {
      nombreMarca: "Tuttnauer",
      descripcion:
        "Tuttnauer es una empresa reconocida por sus autoclaves y equipos de esterilización de vanguardia. Ofrezco mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus soluciones de esterilización, ampliamente utilizadas en hospitales, clínicas dentales y laboratorios.",
      imagenProyectoSrc: projectImage2,
      enlace: "https://tuttnauer.com/es",
    },
    {
      nombreMarca: "Erba",
      descripcion:
        "Erba es una marca líder en el campo de los analizadores de hematología y química clínica. Brindo mantenimiento preventivo, correctivo y asesoramiento sobre el uso y aplicaciones de sus equipos, utilizados en laboratorios clínicos y hospitales para realizar pruebas de diagnóstico precisas y confiables.",
      imagenProyectoSrc: projectImage3,
      enlace: "https://www.erbalachema.com/es/",
    },
    {
      nombreMarca: "Calculadora",
      descripcion:
        "Calculadora es un proyecto desarrollado para realizar cálculos matemáticos básicos. Permite sumar, restar, multiplicar y dividir números de manera sencilla.",
      imagenProyectoSrc: calculatorImage,
      enlace: "URL_DEL_PROYECTO_DE_LA_CALCULADORA",
    },
  ];

  return (
    <div className="background-container-full flex items-center justify-center bg-blue-500">
      <div className="w-full max-w-screen-lg p-8">
        <h1 className="font-semibold text-4xl text-white mb-8 text-center">Especialista en Marcas</h1>
       
        <div className="gap-8 grid grid-cols-3 md:grid-cols-1">
          {proyectos.map((p) => (
            <div
              key={p.nombreMarca}
              className="project-container border-red-100 border-spacing-1 border p-4 bg-slate-500"
            >
              {p.nombreMarca === "Calculadora" && (
                <h2 className="font-semibold text-4xl text-white mb-8 text-center">Proyectos de Desarrollo en React</h2>
              )}
              <img
                className="project-image object-contain w-48 h-auto mb-4"
                src={p.imagenProyectoSrc}
                alt={p.nombreMarca}
              />
              <p className="project-description text-white text-sm mb-4">{p.descripcion}</p>
              <a href={p.enlace} className="project-link text-blue-400 hover:underline">
                Conoce más
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
