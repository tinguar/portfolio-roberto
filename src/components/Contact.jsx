import React from "react";
import "./Home.css";
import "./BootstrapTypography.css"; // Importa tu archivo CSS de Bootstrap


const Contact = () => {
  return (
    <div className="background-container w-screen h-screen flex flex-col items-center justify-between">
      <div>
        <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl">Contact</h2>
        <form
          action="mailto:roberto_barros2504@outlook.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col items-center justify-center pt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Message"
            resize="none"
            className="input-field"
          ></textarea>
          <button
            type="submit"
            className="submit-button"
          >
            Send
          </button>
        </form>
      </div>
      <footer className="text-white bg-black py-4 w-full text-center">
        © {new Date().getFullYear()} Roberto Barros
      </footer>
    </div>
  );
};

export default Contact;
