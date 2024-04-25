import React from "react";
import { motion } from "framer-motion";
import "./BootstrapTypography.css"; // Importa tu archivo CSS de BootstrapTypography

const AcercaDe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      name="AcercaDe"
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-500 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-semibold text-5xl"
      >
        Descripción del perfil
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center mt-10 p-10 bg-gray-800 text-white rounded-lg"
      >
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
        <p>
          Además, soy apasionado por el desarrollo de software y tengo conocimientos en frontend con React, así como en bases de datos como MySQL, PostgreSQL, SQL Server y redes.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AcercaDe;
