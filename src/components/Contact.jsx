import React from "react";
import "./Home.css";
import "./BootstrapTypography.css";

const Contacto = () => {
  return (
    <div className="background-container w-screen h-screen flex flex-col items-center justify-between">
      <div>
        <h2 className="font-semibold text-5xl md:text-6xl lg:text-7xl">Contacto</h2>
        <form
          action="mailto:roberto_barros2504@outlook.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col items-center justify-center pt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="input-field"
          />
          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            resize="none"
            className="input-field"
          ></textarea>
          <button
            type="submit"
            className="submit-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            ENVIAR
          </button>
        </form>
      </div>
      <footer className="text-white bg-black py-4 w-full text-center">
        © {new Date().getFullYear()} Roberto Barros
      </footer>
    </div>
  );
};

export default Contacto;
