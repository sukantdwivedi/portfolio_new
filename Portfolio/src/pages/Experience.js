import React from "react";

const Experience = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <p className="text-3xl sm:text-5xl text-center font-bold text-gray-400 font-sans">
        Work <span className="gradient-text">Experience </span> and{" "}
        <span className="gradient-text">Education </span>
      </p>
      <div className="mt-8 mb-28">
        <div className="flex flex-wrap md:px-4">
          <div className="w-full">
            <div className="md:mx-4">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full">
                      <svg
                        className="w-4 text-gray-300 animate-bounce"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8 ">
                  <p className=" text-xl font-bold text-gray-200">
                    B.tech(Computer Science & Engineering)
                  </p>
                  <p className=" text-gray-300 font-medium">Chandigarh Engineering College</p>
                  <p className=" text-gray-400 mb-2">08/2019 - present</p>
                  <ul className="text-sm text-gray-300 leading-6 ">
                    <li>
                      Overall (till 5th sem)
                    </li>
                    <li>
                      7.5 SGPA
                    </li>
                    <li>
                      {/* Developed websocket api using AWS lambda and API gateway
                      in Node.js */}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full">
                      <svg
                        className="w-4 text-gray-300 animate-bounce"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-4">
                  <p className="text-xl font-bold text-gray-200">
                    Intermediate
                  </p>
                  <p className=" text-gray-300 font-medium">Kendriya Vidyalaya</p>
                  <p className=" text-gray-300 mb-2">03/2018 - 03/2019</p>
                  <ul className="text-sm text-gray-300 leading-6 ul-bullet">
                    <li>
                      Percentage
                    </li>
                    <li>
                      72%
                    </li>
                    {/* <li>Developed user friendly and responsive websites.</li> */}
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full">
                      <svg
                        className="w-4 text-gray-300"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 ">
                  <p className="text-xl font-bold text-gray-300">
                    High School
                  </p>
                  <p className=" text-gray-300 font-medium">
                    Kendriya Vidyalaya
                  </p>
                  <p className=" text-gray-400 mb-2">03/2016 - 03/2017</p>
                  <p className=" text-gray-400 mb-2">CGPA : 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
