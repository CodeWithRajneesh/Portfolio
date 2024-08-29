import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gray-300 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center ml-20 p-6 mt-8 lg:mt-0 h-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://mambaui.com/assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-96 sm:h-80 lg:h-[30rem] xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 mr-20 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl text-black font-bold leading-none sm:text-6xl">
              React JS Developer
              <span className="text-violet-700">Full</span>stack
            </h1>
            <p className="mt-6 mb-8 text-blue-600 text-lg sm:mb-12">
              React JS Developer ABC Solutions Developed front-end solutions
              using React JS for a leading e-commerce website,
              <br className="hidden md:inline lg:hidden" />
              resulting in improved user engagement and increased sales
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/service"
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-green-800 p-1 hover:bg-gray-300 hover:text-black border border-gray-700 text-gray-200"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-fuchsia-100">
        <div className="bg-inherit w-[45%] p-16">
          <h3 className="text-4xl text-blue-900 font-semibold mb-2">
            Frequently Asked Questions
          </h3>
          <p className="mb-2 tracking-widest mt-4">
            Do you have any questions about my services? Check out my FAQ
            section for quick answers to common queries. If you can’t find what
            you’re looking for, feel free to contact me directly – I’m always
            happy to help.
          </p>
          <span className="text-blue-800 hover:underline">Read More...</span>
        </div>

        <div className="w-[55%] p-7 items-center ml-10 mt-5 mb-5 space-y-4">
          <div className="">
            <h3
              className="text-3xl font-semibold text-blue-900  mb-6 cursor-pointer"
              onClick={() => toggleAccordion(0)}
            >
              What is your development process?
            </h3>
            {openIndex === 0 && (
              <p className="mb-5 tracking-widest font-thin leading-relaxed text-gray-700">
                My development process is focused on creating high-quality,
                user-friendly websites and applications. I start with an
                in-depth consultation to determine your needs and preferences,
                then move on to design and development. Throughout the process,
                I keep you informed and involved to ensure we’re on the same
                page.
              </p>
            )}

            <h3
              className="text-3xl text-blue-900  font-semibold mb-5 cursor-pointer"
              onClick={() => toggleAccordion(1)}
            >
              What kind of support do you offer post-launch?
            </h3>
            {openIndex === 1 && (
              <p className="mb-5 tracking-widest font-thin leading-relaxed text-gray-700">
                I offer comprehensive support services post-launch, including
                maintenance, updates, and troubleshooting. Whether you need
                small tweaks or major changes, I’m here to help you get the most
                out of your website or application.
              </p>
            )}

            <h3
              className="text-3xl text-blue-900  font-semibold mb-6 cursor-pointer"
              onClick={() => toggleAccordion(2)}
            >
              How do you ensure project timelines are met?
            </h3>
            {openIndex === 2 && (
              <p className="mb-5 tracking-widest font-thin leading-relaxed text-gray-700">
                I take timelines seriously, and I work hard to meet deadlines
                without sacrificing quality. To ensure timely delivery, I set
                realistic development milestones and communicate regularly with
                clients to keep them updated on progress.
              </p>
            )}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
