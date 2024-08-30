import React from "react";
import Button from "./components/Button";
import useAOS from "./components/Custumhook";

const Resume = () => {
  useAOS();
  return (
    <section id="resume" className="bg-black p-4">
      <div className="border-b border-yellow-300 mb-4">
        <h1 className="text-white text-center mb-4 text-4xl">Resume</h1>
      </div>

      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center">
          <div
            data-aos="slide-right"
            className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center"
          >
            <img
              src="/src/components/images/admin.jpg"
              alt="Rajneesh Kumar"
              className="h-72 w-64 object-cover object-center mt-5"
            />
          </div>
          <div className="w-full md:w-2/3 md:ml-4">
            <h2 className="text-3xl text-white font-bold mb-2">
              Frontend & React Developer
            </h2>
            <p className="text-gray-400 text-lg italic mb-4">
              A front-end developer with a passion for designing immersive
              websites and creating user interfaces.
            </p>
            <div className="grid grid-cols-1 text-sm sm:text-md md:grid-cols-2 gap-4 text-white mb-5">
              <div data-aos="fade-up">
                <ul className="list-none space-y-3 mb-4">
                  <li>
                    <strong>Birthday:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      15 July 1999
                    </span>
                  </li>
                  <li>
                    <strong>Website:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      www.myPortfolio.com
                    </span>
                  </li>
                  <li>
                    <strong>Phone:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      +917248362369
                    </span>
                  </li>
                  <li>
                    <strong>City:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      Bareilly, India UP-243504
                    </span>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-left">
                <ul className="list-none space-y-3 mb-4">
                  <li>
                    <strong>Age:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      25
                    </span>
                  </li>
                  <li>
                    <strong>Degree:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      Master
                    </span>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      rajneesh847495@gmail.com
                    </span>
                  </li>
                  <li>
                    <strong>Freelance:</strong>
                    <span className="text-gray-400 tracking-widest italic ml-2">
                      Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
