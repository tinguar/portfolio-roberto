import React from "react";
import { Link } from "react-router-dom";
import developerHeader from "../assets/Roberto.png";
import headerVideo from "../assets/animacion.mp4";
import "./Home.css";
import SlideBar from "./SlideBar";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        src={headerVideo}
        autoPlay
        loop
        muted
        className="w-full object-cover header-video"
        style={{
          height: "100vh",
          zIndex: -1,
          transform: "scaleX(-1)",
          filter: "brightness(70%)",
        }}
      />
      {/* Developer Image */}
      <img
        src={developerHeader}
        alt="developer"
        className="absolute left-1/2 transform -translate-x-1/2 top-10 md:static rounded-full z-10"
        style={{
          width: "200px",
          height: "200px",
          maxWidth: "50%",
          maxHeight: "50%",
        }}
      />
      {/* Text Content */}
      <div className="absolute text-3xl xl:text-5xl md:w-full p-6 md:static left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white custom-font text-custom z-10 text-center">
        <p>Roberto Barros</p>
        <p className="text-xl mt-2">Asesor Técnico en Ingeniería Biomédica</p>
        <Link
          to="/projects"
          className="cursor-pointer text-lg text-white bg-gray-700 mt-4 px-8 py-3 inline-block rounded-full"
        >
          Portafolio personal
        </Link>
      </div>
      {/* SlideBar */}
      <SlideBar color="black" />
    </div>
  );
};

export default Home;