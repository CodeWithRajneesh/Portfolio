import React from "react";
import useAOS from "./Custumhook";

const skills = [
  { name: "HTML5", width: "75%" },
  { name: "CSS3", width: "65%" },
  { name: "JavaScript", width: "85%" },
  { name: "React Js", width: "80%" },
  { name: "Node Js", width: "60%" },
  { name: "MongoDB", width: "55%" },
  { name: "Tailwindcss", width: "60%" },
];

const Skills = () => {
  useAOS();

  return (
    <section id="skills" className="bg-black py-10 px-4 md:px-8 lg:px-16">
      <div className="border-b border-yellow-300 mb-6">
        <h1 className="text-white text-center text-3xl md:text-4xl font-semibold">
          Skills
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="space-y-6 md:w-2/3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <h2 className="font-sans text-gray-400 tracking-wide text-md">
                {skill.name}
              </h2>
              <div className="w-full h-2 border border-gray-600 rounded-md bg-gray-800">
                <span
                  className="block h-full bg-yellow-500 rounded-md"
                  style={{ width: skill.width }}
                  data-aos="slide-right"
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="md:w-[50rem]"
        >
          <h3 className="text-2xl md:text-3xl mt-5 font-semibold text-yellow-400 mb-4">
            Let's create something amazing together
          </h3>
          <p className="text-gray-300 mb-6">
            If you’re interested in working together or have any questions, feel
            free to reach out. I’m always open to new opportunities and would
            love to hear more about your project needs and how I can help.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Collaborate on a custom web development project
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Optimize existing website for improved performance and user
                experience
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Create user components and integrate with backend services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
