import React from "react";
import {
  FaLaptopCode,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTools,
  FaSuitcase,
} from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomIcons = {
  Home: {
    Icon: <RiHome7Fill />,
    url: "/",
  },
  Projects: {
    Icon: <FaLaptopCode />,
    url: "/projects",
  },
  Skills: {
    Icon: <FaTools />,
    url: "/skills",
  },
  Experience: {
    Icon: <FaSuitcase />,
    url: "/experience",
  },
};

const BottomTab = () => {
  return (
    <div className="max-w-xl lg:max-w-screen-xl mx-auto flex justify-center">
      <div className="fixed bottom-4 z-20 w-11/12 md:w-3/4 lg:w-2/5">
        <div className="h-16 px-4 border rounded-2xl cl-div overflow-auto space-x-6 text-2xl sm:text-3xl sm:space-x-10 flex justify-center items-center">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "text-gray-100 "
                : "text-gray-400 hover:scale-110 hover:scale-150 transition duration-300"
            }
          >
            <RiHome7Fill className="ml-12 sm:ml-0" />
          </NavLink>
          <NavLink
            to="/projects"
            className={(navData) =>
              navData.isActive
                ? "text-gray-100"
                : "text-gray-400 hover:scale-150 transition duration-300"
            }
          >
            <FaLaptopCode />
          </NavLink>
          <NavLink
            to="/skills"
            className={(navData) =>
              navData.isActive
                ? "text-gray-100"
                : "text-gray-400 hover:scale-150 transition duration-300"
            }
          >
            <FaTools />
          </NavLink>
          <NavLink
            to="/experience"
            className={(navData) =>
              navData.isActive
                ? "text-gray-100"
                : "text-gray-400 hover:scale-150 transition duration-300"
            }
          >
            <FaSuitcase />
          </NavLink>
          <a
            href="https://twitter.com/sukant_dwivedi/"
            target="_blank"
            className="text-gray-400 hover:scale-150 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/sukant-dwivedi-42b029183/"
            target="_blank"
            className="text-gray-400 hover:scale-150 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sukantdwivedi"
            target="_blank"
            className="text-gray-400 hover:scale-150 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sukantdwivedi2000@gmail.com"
            target="_blank"
            className="text-gray-400 hover:scale-150 transition duration-400"
          >
            <MdMarkEmailUnread />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
