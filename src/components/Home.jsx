import React from "react";
import developerHeader from "../assets/Roberto.png";
import headerVideo from "../assets/animacion.mp4";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className="h-screen w-screen overflow-hidden relative">
            {/* Background Video */}
            <video
                src={headerVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover absolute z-0"
            />

            {/* Developer Image */}
            <img
                src={developerHeader}
                alt="developer"
                className="absolute left-[50%] transform -translate-x-1/2 top-[10%] w-1/4 md:left-[20%] md:static rounded-full z-10"
            />

            {/* Text Content */}
            <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px] md:left-[0] md:w-screen p-6 md:static left-[20%] top-[40%] w-[619px] h-[250px] text-white text-[64px] font-arial z-10">
                <p>Hola mi nombre es Roberto Barros</p>
                <Link
                    to="Projects"
                    smooth="500"
                    className="cursor-pointer text-[20px] text-white bg-slate-500 mt-2 p-4"
                >
                    Portfolio
                </Link>
            </div>
        </div>
    );
};

export default Home;