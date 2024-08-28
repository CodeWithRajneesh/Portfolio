import React from "react";
import Button from "./components/Button";
import useAOS from "./components/Custumhook";

const Resume = () => {
  useAOS();
  return (
    <>
      <section id="resume" className="bg-black p-3">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className=" text-white text-center mb-3 text-4xl">Resume</h1>
        </div>

        <div className="container" data-aos="fade-up" >
          <div className="flex">
            <div className="w-[25%]">
              <img
                src="/Admin.jpg"
                alt=" Rajneesh Kumar"
                className="h-84 m-5 w-64"
              />
            </div>
            <div className="w-[75%] m-5">
              <h2 className="text-3xl text-white font-bold">
                Frontend & React Developer.
              </h2>
              <p className="text-gray-400 text-lg italic ml-2 py-3">
                A front-end developer with React passion for designing immersive
                websites and create user interface.
              </p>
              <div className=" mt-5 flex justify-between mb-5 mr-52">
                <div data-aos="fade-up-right"    >
                  <ul className=" flex flex-col text-white gap-5 list-none mb-4">
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
                        Bareilly,India UP-243504
                      </span>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up-left"   >
                  <ul className="flex flex-col text-white gap-5 list-none mb-4  ">
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
    </>
  );
};

export default Resume;
