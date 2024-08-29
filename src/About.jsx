import React, { useState } from "react";
import useAOS from "./components/Custumhook";

const About = () => {
  useAOS();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        id="about"
        className=" h-full  bg-gradient-to-r  from-blue-500 via-gray-700 to-black"
      >
        <div className="flex justify-center mx-auto text-center text-2xl sm:text-4xl">
          <span className="w-full text-yellow-500 sm:w-1/2 font-bold flex mt-14">
            A front-end developer with a passion for designing immersive
            websites.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 sm:mt-10">
          <div className="mx-auto">
            <img
              src="https://10web-site.ai/26/wp-content/uploads/sites/29/2024/02/2-3_wRhhO3TI.webp"
              alt=""
              className="h-[27rem] w-[17rem] sm:h-[35rem] object-center  object-fill"
            />
          </div>
          <div className="w-full sm:w-1/2 mx-auto p-5 mt-0 ">
            <h1
              data-aos="slide-right"
              data-aos-duration="2500"
              className="text-3xl  tex sm:text-7xl font-bold"
            >
              <span className="text-white">Who </span>
              <span className="text-blue-700">AM </span>{" "}
              <span className="text-amber-400"> I </span>
              <span className="text-white">?</span>
            </h1>
            <h2
              data-aos="zoom-in-right"
              data-aos-duration="2500"
              className="text-2xl mt-8 text-yellow-400"
            >
              I'm a Rajneesh Kumar , a software developer Intern
            </h2>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2500"
              className="mt-2 font-sans text-gray-400 italic font-medium tracking-wider mb-5"
            >
              I am a computer science student with a strong background in
              programming and software development. I am very interested in
              computer science, especially programming. I am skilled in
              JavaScript and have experience using React.js for front-end
              development. I enjoy playing games, traveling, and watching
              movies. These hobbies help me stay balanced and creative. I
              believe in self-learning and always try to improve my skills and
              knowledge. I am excited to take on new challenges and contribute
              to innovative projects in computer science. I look forward to
              opportunities where I can use my skills and make a positive
              impact.
            </p>
            <div className="border-b border-black">
              <h3
                className="text-lg font-bold text-yellow-400 mb-6 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                My Vision
              </h3>
              {openIndex === 0 && (
                <p className="mb-5 tracking-widest font-thin leading-relaxed text-gray-400">
                  My vision is to harness the power of technology to drive
                  innovation and create solutions that enhance everyday life. I
                  strive to be at the forefront of cutting-edge advancements,
                  continually learning and adapting to push boundaries and
                  achieve excellence in every project I undertake.
                </p>
              )}
            </div>
            <div className="border-b border-black">
              <h3
                className="text-lg font-bold mt-2 text-yellow-400 mb-6 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                My Mission
              </h3>
              {openIndex === 1 && (
                <p className="mb-5 tracking-widest font-thin leading-relaxed text-gray-400">
                  My mission is to deliver high-quality, impactful software
                  solutions by combining technical expertise with creative
                  problem-solving. I am dedicated to fostering collaboration,
                  promoting growth, and ensuring user-centric designs that meet
                  the needs of diverse audiences. Through integrity and
                  commitment, I aim to make a positive difference in the tech
                  community and beyond.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
