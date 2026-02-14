import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

type SocialLink = {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: boolean;
};

const SocialLinks = (): JSX.Element => {
  const links: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dawit-zeleke/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/dawitzeleke",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:dawitzeleke92@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul className="space-y-3">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`group flex items-center w-48 h-12 px-4 translate-x-[-120px] hover:translate-x-0 transition duration-300 bg-white/10 border border-white/10 backdrop-blur-xl shadow-xl ${
              style ?? ""
            } rounded-r-full`}
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-sm font-medium text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2">
                {child}
              </span>
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-70 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;