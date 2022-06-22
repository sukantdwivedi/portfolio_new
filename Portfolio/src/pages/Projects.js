import React, { useState } from "react";
import { FaRegEye, FaGithub } from "react-icons/fa";
import calculator from "../calculator.png";
import movie from "../movie.png";
import portfolio from "../portfolio.png";
// import buycoffee from "../buycoffee.png";

const ProjectsData = [
  {
    title: "Portfolio",
    description:
      "Portfolio :) ",
    image: portfolio,
    url: "https://github.com/sukantdwivedi/",
    github: "https://github.com/sukantdwivedi/",
    techStack: "React, HTML, CSS",
  },
  {
    title: "Entertainment Hub",
    description: "Movie Recommendation for your amazing weekends :)",
    image: movie,
    url: "ttps://github.com/sukantdwivedi/",
    github: "ttps://github.com/sukantdwivedi/",
    techStack: "React, Material UI",
  },
  // {
  //   title: "Senju",
  //   description:
  //     "Your Metaverse Repository. Use non-fungible tokens to build and manage your own blog on this platform, which is added to your decentralised profile.",
  //   image: senju,
  //   url: "https://github.com/sukantdwivedi/entertainment-hub",
  //   github: "https://github.com/sukantdwivedi/entertainment-hub",
  //   techStack: "React, Material UI, MovieDB API",
  // },
  {
    title: "Glasslator",
    description:
      "Glassporphism Calculator",
    image:
      calculator,
    url: "https://glasslator.netlify.app/",
    github: "https://github.com/sukantdwivedi/glass-calculator",
    techStack: "HTML, CSS, JavaScript",
  },

  // {
  //   title: "linkME",
  //   description:
  //     "A webapp where you can place all your social media links at one place and share them with anyone",
  //   image: linkme,
  //   url: "https://linkmehq.netlify.app/",
  //   github: "https://github.com/starc007/linkme",
  //   techStack: "React, TailwindCSS, Node, MongoDB, Google Auth",
  //   type: "Full Stack",
  // },
  // {
  //   title: "Payifi",
  //   description:
  //     "Simple responsive website built in React and Bootstrap. I've built this website during my internship",
  //   image:
  //     "https://cdn.sanity.io/images/p7wt73d0/production/aab6e7fc0bd32ce87975f77fd9e49da68d022628-1910x851.png",
  //   url: "https://starc007-dev.netlify.app/",
  //   github: "https://starc007-dev.netlify.app/",
  //   techStack: "React, Bootstrap",
  //   type: "Frontend",
  // },
];

const Projects = () => {
  const [projects, setProjects] = useState(ProjectsData);
  const [active, setActive] = useState(true);
  const [setActiveWeb3] = useState(false);
  const [activeFullStack, setActiveFullStack] = useState(false);
  const [activeFrontend, setActiveFrontend] = useState(false);

  const filterProjects = (type) => {
    if (type === "All") {
      setProjects(ProjectsData);
      setActive(true);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(false);
    // } else if (type === "Web3") {
    //   setProjects(ProjectsData.filter((project) => project.type === "Web3"));
    //   setActive(false);
    //   setActiveWeb3(true);
    //   setActiveFullStack(false);
    //   setActiveFrontend(false);
    // } else if (type === "Full Stack") {
      setProjects(
        ProjectsData.filter((project) => project.type === "Full Stack")
      );
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(true);
      setActiveFrontend(false);
    } else if (type === "Frontend") {
      setProjects(
        ProjectsData.filter((project) => project.type === "Frontend")
      );
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(true);
    } else {
      setProjects(ProjectsData);
      setActive(false);
      setActiveWeb3(false);
      setActiveFullStack(false);
      setActiveFrontend(false);
    }
  };

  return (
    <div className="my-8">
      <p className="text-3xl text-center sm:text-5xl font-bold text-gray-400 font-sans">
        Some <span className="gradient-text">cool things</span> that I have
        built
      </p>
      <div className="flex  justify-center text-gray-300 font-medium mt-6 flex-wrap">
        <button
          className={
            active
              ? "px-6 border p-2 rounded-lg bg-gray-200 text-gray-800 transition duration-500 mx-2 mt-2"
              : "px-6 border p-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-800 mx-2 mt-2"
          }
          onClick={() => filterProjects("All")}
        >
          All
        </button>
        {/* <button
          className={
            activeWeb3
              ? "px-6 border p-2 rounded-lg bg-gray-200 text-gray-800 transition duration-500 mx-2 mt-2"
              : "px-6 border p-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-800 mx-2 mt-2"
          }
          onClick={() => filterProjects("Web3")}
        >
          Web3
        </button> */}
        <button
          className={
            activeFrontend
              ? "px-6 border p-2 rounded-lg bg-gray-200 text-gray-800 transition duration-500 mx-2 mt-2"
              : "px-6 border p-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-800 mx-2 mt-2"
          }
          onClick={() => filterProjects("Frontend")}
        >
          Frontend
        </button>
        <button
          className={
            activeFullStack
              ? "px-6 border p-2 rounded-lg bg-gray-200 text-gray-800 transition duration-500 mx-2 mt-2"
              : "px-6 border p-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-800 mx-2 mt-2"
          }
          onClick={() => filterProjects("Full Stack")}
        >
          Full Stack Web2
        </button>
      </div>
      <div className="flex flex-wrap mt-6 mb-28 justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full w-80 sm:mx-4 mt-4 transition duration-500"
          >
            <div className="shadow p-5 border border-gray-700 rounded-xl  group hover:shadow-xl duration-500 transition">
              <div className="relative mb-6 w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt="coverImage"
                  className="w-full h-full object-cover object-center brightness-75"
                />
                <div className="absolute opacity-0 transition duration-200 bg-gray-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                  <ul className="flex flex-wrap space-x-4">
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaRegEye size={28} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaGithub size={28} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 font-semibold truncate">
                {project.description}
              </p>
              <p className="text-gray-500 font-bold">
                built using -{" "}
                <span className="text-gray-400 ">{project.techStack}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
