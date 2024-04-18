import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineFilePdf } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const SlideBar = ({ color }) => {
    const handleMailClick = () => {
        window.location.href = `mailto:roberto_barros2504@outlook.com`;
    };

    const getBackgroundColor = () => {
        return color === "black" ? "bg-white" : "bg-gray-800";
    };

    const getTextColor = () => {
        return color === "black" ? "text-black" : "text-white";
    };

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <AiFillLinkedin size={30} className="cursor-pointer" />
                </>
            ),
            href: "https://www.linkedin.com/feed/",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <AiFillGithub size={30} />
                </>
            ),
            href: "https://github.com/Yepe1723",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <BsFillPersonFill size={30} onClick={handleMailClick} />
                </>
            ),
            href: "#",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <AiOutlineFilePdf size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className={`flex right-0 items-center ${getBackgroundColor()} bg-opacity-50 justify-evenly fixed top-40 p-4 flex-col`}>
            {links.map(({ id, child, href, style, download }) => (
                <div key={id} className={`right-0 mt-4 flex duration-300 hover:mr-4 ${getTextColor()}`}>
                    <a
                        href={href}
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {child}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SlideBar;
