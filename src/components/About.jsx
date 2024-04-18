import React from "react";
import "./BootstrapTypography.css"; // Importa tu archivo CSS de BootstrapTypography

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800 text-white"
    >
      <h2 className="font-semibold text-4xl">Descripción</h2>

      <div className="max-w-4xl w-full flex flex-col items-center justify-center mt-10 p-10 bg-gray-900 text-white rounded-lg">
        <p>
          Soy asesor técnico de ingeniería biomédica, especializado en proyectos
          de mantenimiento preventivo y correctivo de equipos de análisis de
          laboratorio y equipos de esterilización. Además, proporciono apoyo
          técnico en laboratorio para garantizar el funcionamiento óptimo de los
          equipos.
        </p>
        <p>
          Mi objetivo es asegurar que los equipos biomédicos en los laboratorios
          funcionen de manera eficiente y segura, garantizando la precisión y
          fiabilidad de los resultados de los análisis.
        </p>
      </div>
    </div>
  );
};

export default About;
