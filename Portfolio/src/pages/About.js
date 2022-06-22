import React from "react";
import resume from "../resume.pdf";
const About = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col">
        <div className="">
          <div className="shadow"></div>
          <div className="bowl">
            <div className="liquid"></div>
          </div>
        </div>
        <label className="py-4 text-2xl md:text-3xl text-gray-500 font-bold font-sans">
          Hey, It's{" "}
          <span className="text-gray-300 text-3xl md:text-5xl font-extrabold">
            Sukant
          </span>
        </label>
        <label className="text-4xl sm:text-7xl font-extrabold text-gray-400 py-3">
          I am a <span className="gradient-text">Full Stack Developer</span>
        </label>
        <p className="text-md sm:text-xl font-semibold py-3 text-gray-300">
          I'm an excellent developer as long as I'm getting my answers on
          Stackoverlflow 🥲
        </p>
        <p className="text-gray-300 text-lg font-semibold">
          Is there any prospect for me? Set up a{" "}
          <a
            href="https://calendly.com/sukantdwivedi2000/30min"
            target="_blank"
            className="underline text-gray-400"
          >
            meeting
          </a>
        </p>
        <div className="flex items-center">
          <a
            href={resume}
            download
            className="text-xl flex items-center justify-center font-semibold py-2 my-4  bg-gray-700 text-gray-100 rounded-lg w-28"
          >
            resume{" "}
            <div className="rounded-full h-2 w-2 bg-gray-50 animate-ping ml-2"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
