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
    <>
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
                    className="block h-full bg-yellow-400 rounded-md"
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
              If you’re interested in working together or have any questions,
              feel free to reach out. I’m always open to new opportunities and
              would love to hear more about your project needs and how I can
              help.
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
      <section className="bg-black gap-10 py-10">
        <div className="text-center  justify-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl w-full sm:w-3/4 md:w-2/3 mx-auto font-semibold text-yellow-400">
            Crafting web experiences that captivate and drive results
          </h2>
          <p className="w-full p-3 sm:w-3/4 md:w-2/3 text-gray-500 text-lg sm:text-xl mx-auto mt-5">
            As a front-end developer with a passion for UI/UX design, I
            specialize in creating web experiences that captivate and drive
            results. With a focus on user-centric design, I craft tailored
            solutions that meet the unique needs of businesses and users alike.
            Whether it’s developing a custom web application or optimizing an
            existing website.
          </p>
        </div>

        <div className="flex flex-col p-6 md:flex-row flex-wrap justify-around gap-6 md:gap-4">
          <div className="border hover:text-white hover:shadow-2xl hover:shadow-cyan-400 text-gray-400 hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14">
            <h3 className="text-xl text-yellow-400 sm:text-2xl md:text-3xl font-semibold mb-2">
              React JS Development
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
              With expertise in React JS, I develop highly performant and
              scalable web applications that meet the needs of modern
              businesses. My proficiency in React allows me to create elegant,
              efficient, and user-friendly web solutions that delight users and
              drive business results.
            </p>
          </div>

          <div className="border hover:shadow-2xl hover:shadow-cyan-400 hover:text-white text-gray-400 hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14">
            <h3 className="text-xl text-yellow-400 sm:text-2xl md:text-3xl font-semibold mb-2">
              Front-End Development
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
              As a front-end developer, I specialize in developing visually
              appealing, intuitive, and responsive websites that prioritize user
              experience. My expertise in HTML, CSS, and JavaScript allows me to
              create high-quality, scalable websites that meet the needs of
              businesses and users alike.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-6 md:flex-row flex-wrap justify-around gap-6 md:gap-4 mt-10">
          <div className="border hover:text-white hover:shadow-2xl hover:shadow-cyan-400 text-gray-400 hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14">
            <h3 className="text-xl text-yellow-400 sm:text-2xl md:text-3xl font-semibold mb-2">
              JavaScript Proficiency
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
              My proficiency in JavaScript allows me to create dynamic and
              interactive web experiences that engage users and drive business
              results. I have experience using a range of JavaScript frameworks
              and libraries, allowing me to develop customized solutions to meet
              the unique needs of clients.
            </p>
          </div>

          <div className="border hover:text-white hover:shadow-2xl hover:shadow-cyan-400 text-gray-400 hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14">
            <h3 className="text-xl text-yellow-400 sm:text-2xl md:text-3xl font-semibold mb-2">
              Node JS
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
              My passion for user-centric design has led me to specialize in
              creating beautiful, functional, and intuitive interfaces that
              engage users and drive business results. My expertise in design
              principles, user research, and prototyping allows me to create
              stunning web experiences that delight users and exceed
              expectations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
