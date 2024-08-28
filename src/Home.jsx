import React, { useEffect, useState } from "react";
import Skills from "./components/Skills";
import BackToTop from "./components/Scrollbutton";
import About from "./About";
import Resume from "./Resume";
import Education from "./Education";
import Contact from "./Contact";
import Button from "./components/Button";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["React & Node Js Developer"];

  useEffect(() => {
    let timer;
    if (index < phrases.length) {
      const currentPhrase = phrases[index];
      const length = currentPhrase.length;

      timer = setInterval(() => {
        setText((prev) => {
          if (prev.length < length) {
            return prev + currentPhrase[prev.length];
          } else {
            clearInterval(timer);
            setTimeout(() => {
              setText("");
              setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }, 1000);
            return prev;
          }
        });
      }, 100);
    }

    return () => clearInterval(timer);
  }, [index, text]);

  return (
    <>
      <section className="bg-gradient-to-r  mt-14 sm:w-full md:w-full h-full w-full from-black via-gray-700 to-violet-600">
        <div className="flex justify-between">
          <div className="w-[45%] ml-10 pt-28 p-16 text-2xl sm:text-5xl">
            <span className="text-yellow-500 font-bold text-sm"> Hello !</span>
            <span className="w-full text-yellow-500  font-bold flex ">
              <span className="text-white">I'm</span> Rajneesh Kumar
            </span>
            <h1 className="text-2xl mt-5 font-bold text-white whitespace-nowrap overflow-hidden">
              <span className="typewriter-text">{text}</span>
              <span className="caret blink">|</span>
            </h1>
            <p className="text-white mt-5 mb-7 text-2xl tracking-wider ">
              
              I'm currently fresher / software developer intern
            </p>
            <Button />
          </div>

          <div className="w-[50%]">
            <img
              src="https://10web-site.ai/26/wp-content/uploads/sites/29/2024/02/MAIN_wRhhO3TI-scaled.webp"
              alt=""
              className="  sm:w-[35rem]"
            />
          </div>
        </div>
      </section>
      <About />
      <Resume />
      <Skills />
      <Education />
      <BackToTop />
      <Contact />
    </>
  );
};

export default Home;
