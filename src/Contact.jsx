import React, { useEffect, useState } from "react";
import useAOS from "./components/Custumhook";

const Contact = () => {
  useAOS();
  const [resumePdf, setResumePdf] = useState(null);

  useEffect(() => {
    fetch("Rajneesh.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setResumePdf(url);
      });
  }, []);
  return (
    <section id="contact" className="bg-black   p-7">
      <h1 className="text-white  tracking-wider text-center text-4xl p-3">
        Contact Me
      </h1>
      <p className="text-gray-600 text-center">
        the given link to connect with me
      </p>
      <div className="flex justify-center gap-32 mt-8 cursor-pointer text-center text-white mx-24">
        <div
          data-aos="zoom-in-up"
          className="flex flex-col mt-6 items-center justify-center"
        >
          <svg
            className="bg-gray-900 w-14 h-14 rounded-full p-4"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFF55"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <h1 className="text-sm mt-5 uppercase">Address</h1>
          <p className="text-sm mt-3 flex-wrap w-36">
            Karaura Meerganj Bareilly UP-243504
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col mt-3 items-center justify-center"
        >
          <svg
            className="bg-gray-900 w-14 h-14 rounded-full p-4"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFF55"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <h1 className="text-sm mt-5 uppercase">Contact Number</h1>
          <p className="text-xs mt-3 ">+91 7248362369</p>
          <p className="text-xs">+91 8474958674</p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center justify-center"
        >
          <svg
            className="bg-gray-900 w-14 h-14 rounded-full p-4"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFF55"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <h1 className="text-sm mt-5 uppercase">Email Address</h1>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="text-sm mt-3"
          >
            rajneesh847495@gmail.com
          </a>
        </div>

        <div
          data-aos="zoom-in-up"
          className="flex flex-col items-center justify-center"
        >
          {resumePdf && (
            <a href={resumePdf} download="Rajneesh.pdf">
              <svg
                className="bg-gray-900 w-14 h-14 rounded-full p-4"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#FFFF55"
                download="Rajneesh.pdf"
                href={resumePdf}
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </a>
          )}
          <h1 className="text-sm mt-5 uppercase">Download Resume</h1>
          {resumePdf && (
            <a
              className="text-sm mt-3 text-white"
              href={resumePdf}
              download="Rajneesh.pdf"
            >
              Resume Link
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-10 mx-auto justify-center  lg:pt-0">
        <div className="flex justify-center space-x-10">
          <a
            data-aos="zoom-in-up"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex items-center justify-center bg-gray-900 w-4 h-4 rounded-full sm:w-12 sm:h-12 dark:bg-yellow-600 dark:text-gray-50 transform hover:scale-110 transition-transform"
          >
            <svg
              className="h-6 w-6 text-yellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>

          <a
            data-aos="zoom-in-up"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="flex items-center justify-center bg-gray-900 w-6 h-6 rounded-full  sm:w-12 sm:h-12 dark:bg-yellow-600 dark:text-gray-50 transform hover:scale-110 transition-transform"
          >
            <svg
              className="h-5 w-5 text-yellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>
          <a
            data-aos="zoom-in-up"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="flex items-center justify-center bg-gray-900 w-6 h-6 rounded-full  sm:w-12 sm:h-12 transform hover:scale-110 transition-transform"
          >
            <svg
              class="h-5 w-5 text-yellow-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          <a
            data-aos="zoom-in-up"
            href="https://www.linkedin.com/in/rajneesh847495"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center justify-center bg-gray-900 w-6 h-6 rounded-full  sm:w-12 sm:h-12  transform hover:scale-110 transition-transform"
          >
            <span className="[&>svg]:h-5   [&>svg]:w-5 [&>svg]:fill-[#ffef11]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="text-white mt-5 tracking-wide  text-center py-2 md:py-3 lg:py-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved |
          Rajneesh Kumar Portfolio.
        </p>
      </div>
    </section>
  );
};

export default Contact;
