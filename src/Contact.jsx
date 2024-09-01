import React, { useEffect, useState } from "react";
import useAOS from "./components/Custumhook";
import Resumepdf from "./components/images/Rajneesh.pdf";

const Contact = () => {
  useAOS();
  const [resumePdf, setResumePdf] = useState(null);

  useEffect(() => {
    fetch(Resumepdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setResumePdf(url);
      });
  }, []);

  return (
    <section id="contact" className="bg-black p-7">
      <h1 className="text-white tracking-wider text-center text-4xl p-3">
        Contact Me
      </h1>

      <div className="flex flex-wrap justify-center gap-12 mt-8 cursor-pointer text-center text-white">
        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center justify-center"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex mt-2 flex-col items-center"
            href="https://goo.gl/maps/Svum3tW4AkkFT2gH8?g_st=aw"
          >
            <svg
              className="bg-gray-900 w-14 h-14 rounded-full p-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#FFFF55"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <h1 className="text-sm mt-4 uppercase">Address</h1>
            <p className="text-xs mt-2 w-36">
              Karaura Meerganj Bareilly UP-243504
            </p>
          </a>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col  items-center justify-center"
        >
          <svg
            className="bg-gray-900 w-14 h-14 mt-2 rounded-full p-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#FFFF55"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <h1 className="text-sm mt-5 uppercase">Contact Number</h1>
          <p className="text-xs mt-2">+91 7248362369</p>
          <p className="text-xs">+91 8474958674</p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center justify-center"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex flex-col items-center"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          >
            <div className="bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFF55"
                className="bg-gray-900 w-14 h-14 rounded-full p-4"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </div>
            <h1 className="text-sm mt-5 uppercase">Email Address</h1>
            <p className="text-xs mt-3">rajneesh847495@gmail.com</p>
          </a>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center justify-center"
        >
          {resumePdf && (
            <a href={resumePdf} download={Resumepdf}>
              <svg
                className="bg-gray-900 w-14 h-14 rounded-full p-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFF55"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </a>
          )}
          <h1 className="text-sm mt-4 uppercase">Download Resume</h1>
          {resumePdf && (
            <a
              className="text-sm mt-2 text-white"
              href={resumePdf}
              download="Rajneesh.pdf"
            >
              Resume Link
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-10">
        <a
          data-aos="zoom-in-up"
          href="https://www.instagram.com/rajneesh755?igsh=MWd6eWIwMnhndzNicg=="
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="flex items-center justify-center bg-gray-900 w-10 h-10 rounded-full sm:w-12 sm:h-12 transform hover:scale-110 transition-transform"
        >
          <svg
            className="h-6 w-6 text-yellow-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>

        <a
          data-aos="zoom-in-up"
          href="https://twitter.com/@Rajneesh847495"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="flex items-center justify-center bg-gray-900 w-10 h-10 rounded-full sm:w-12 sm:h-12 transform hover:scale-110 transition-transform"
        >
          <svg
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.13 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.54 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>

        <a
          data-aos="zoom-in-up"
          href="https://www.linkedin.com/in/rajneesh847495"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="flex items-center justify-center bg-gray-900 w-10 h-10 rounded-full sm:w-12 sm:h-12 transform hover:scale-110 transition-transform"
        >
          <svg
            className="h-6 w-6 text-yellow-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          data-aos="zoom-in-up"
          href="https://github.com/CodeWithRajneesh"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="flex items-center justify-center bg-gray-900 w-10 h-10 rounded-full sm:w-12 sm:h-12 transform hover:scale-110 transition-transform"
        >
          <svg
            className="h-6 w-6 text-yellow-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1C6.48 1 2 5.48 2 11c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.77.61-3.36-1.34-3.36-1.34-.46-1.14-1.12-1.45-1.12-1.45-.92-.63.07-.61.07-.61 1.02.07 1.56 1.04 1.56 1.04.91 1.55 2.38 1.1 2.96.85.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.04-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02.79-.22 1.63-.32 2.47-.32.84 0 1.68.1 2.47.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.04 1.59 1.04 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.75c0 .26.16.58.67.48A10.03 10.03 0 0022 11c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
      </div>

      <div className="text-center text-white mt-16">
        <p className=" md:text-lg text-xs">
          &copy; 2024 Rajneesh Kumar. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
