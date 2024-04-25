import React, { useState } from "react";
import Menu from "./Menu";
//import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { link: "Inicio", id: 0, to: "/" },
    { link: "Acerca", id: 1, to: "/about" },
    { link: "Proyectos", id: 2, to: "/projects" },
    { link: "Experiencia", id: 3, to: "/experience" },
    { link: "Contacto", id: 4, to: "/contact" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={[
        "absolute",
        !isMenuOpen
          ? " z-[300] absolute w-[69px] p-10 left-4 h-[47px]"
          : " z-[300] fixed w-[200px] h-screen bg-[#2B2B29] flex flex-col items-start",
      ]}
    >
      <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenuClick} />
      {isMenuOpen && (
        <div className="flex flex-col space-y-2 px-4 py-4 rounded-md bg-gray-800 text-white">
          {links.map((l) => (
            <Link
              className="flex items-center justify-start h-12 px-4 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={handleMenuClick}
              to={l.to}
              key={l.id}
            >
              {l.link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
