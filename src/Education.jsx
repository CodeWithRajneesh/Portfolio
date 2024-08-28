import React from "react";
import useAOS from "./components/Custumhook";

const Education = () => {
  useAOS();
  return (
    <>
      <section id="education" className="bg-black ">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className=" text-white text-center mb-3 text-4xl">Education</h1>
        </div>
        <div className="w-full p-10 gap-5 flex">
          <div
            data-aos="fade-right"
            className="bg-gray-950 p-7 hover:shadow-2xl hover:shadow-red-800 w-[25%] min-h-[100px] "
          >
            <strong className="text-lg tracking-widest text-white font-semibold mb-2">
              HighSchool
            </strong>
            <h3 className="text-yellow-500 font-bold mt-3 text-2xl">
              2013-2014
            </h3>
            <p className="text-sm tracking-wider text-slate-400 mb-2 mt-4">
              SURAJ PUBLIC H S SCHOOL HURHURI MEERGANJ BAREIILY AND UTTAR
              PRADESH BOARD
            </p>
            <span className="text-slate-400 text-sm hover:underline">
              first division with 84% marks
            </span>
          </div>

          <div
            data-aos="fade-up"
            className="bg-gray-950 hover:shadow-2xl hover:shadow-red-800 p-7 w-[25%] min-h-[100px] "
          >
            <strong className="text-lg tracking-widest text-white font-semibold mb-2">
              Intermediate
            </strong>
            <h3 className="text-yellow-500 mt-3  font-bold text-2xl">
              2014-2016
            </h3>
            <p className="text-sm tracking-wider text-slate-400 mb-2 mt-4">
              SANT MANAGPURI INTER COLLEGE MEERGANJ BAREILLY AND UTTAR PRADESH
              BOARD
            </p>
            <span className="text-slate-400 text-sm hover:underline">
              first division with 85% marks
            </span>
          </div>

          <div
            data-aos="fade-up"
            className="bg-gray-950 hover:shadow-2xl hover:shadow-red-800 p-7 w-[25%] min-h-[100px] "
          >
            <strong className="text-lg tracking-widest text-white font-semibold mb-2">
              Graduation(B.Sc)
            </strong>
            <h3 className="text-yellow-500 mt-3  font-bold text-2xl">
              2016-2019
            </h3>
            <p className="text-sm tracking-wider text-slate-400 mb-2 mt-4">
              SWAMI DAYANAND DEGREE COLLEGE MEERGANJ BAREILLY AND MAHATMA
              JYOTIBA PHULE ROHILKHAND UNIVERSITY BAREILLY
            </p>
            <span className="text-slate-400 text-sm hover:underline">
              first division
            </span>
          </div>

          <div
            data-aos="fade-left"
            className="bg-gray-950 hover:shadow-2xl hover:shadow-rose-800 p-7 w-[25%] min-h-[100px] "
          >
            <strong className="text-lg tracking-widest text-white font-semibold mb-2">
              MCA
            </strong>
            <h3 className="text-yellow-500 mt-3  font-bold text-2xl">
              2021-2023
            </h3>
            <p className="text-sm tracking-wider text-slate-400 mb-2 mt-4">
              RAKSHPAL BAHADUR MANAGEMENT INSTITUTE BAREILLY AND DR A.P.J ABDUL
              KALAM TECHNICAL UNIVERSITY
            </p>
            <span className="text-slate-400 text-sm hover:underline">
              first division with 66%
            </span>
          </div>
        </div>
      </section>
      <section id="education" className="bg-black ">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className=" text-white tracking-widest text-center mb-3 text-4xl">
            Experience
          </h1>
        </div>
        <div className="pt-20  ">
          <div data-aos="zoom-in" className="p-16  bg-gray-950">
            <strong className="text-yellow-400 text-2xl">
              Dec 2023 -Jun 2024
            </strong>
            <h1 className="text-white text-3xl mb-2 mt-2">
              Front-end development & Software devloper intern
            </h1>
            <span className="text-gray-400 uppercase tracking-widest text-sm ">
              Railworld India Pvt Ltd
            </span>
            <p className="text-slate-300 mt-2 tracking-wider pr-80">
              I also completed a six-month internship, which gave me valuable
              practical experience in software development and project
              management. This internship allowed me to apply my academic
              knowledge to real-world problems and learn more about the industry
              during inetenship I've Learn -
              <span className="text-yellow-300">
                HTML5 , CSS3 , TailwindCss , JavaScript , React Js , Node Js ,
                MongoDB
              </span>
              . I am excited to take on new challenges and contribute to
              innovative projects in computer science. I look forward to
              opportunities where I can use my skills and make a positive impact
            </p>
          </div>
        </div>
        <div className="border-b p-5 border-yellow-300 ">
          <h1 className=" text-white text-center mb-3 tracking-widest text-4xl">
            Projects
          </h1>
        </div>
        <div className="flex gap-4 p-4 pt-20 ">
          <div
            data-aos="fade-right"
            className="w-full bg-gray-950 hover:shadow-2xl hover:shadow-cyan-400  sm:w-[32%] text-thin text-lg sm:text-lg tracking-wider p-12"
          >
            <div className="text-sm ">
              <h1 className=" text-2xl mb-3  text-yellow-300 font-semibold">
                Nidhi Bank System
              </h1>

              <span className="text-gray-400 ">
                Developed using
                <span className="text-white  "> React.js </span>
                with
                <span className="text-white "> TailwindCss </span>
                <span>
                  The Nidhi Bank System is a comprehensive web application The
                  experience for both customers and administrators.
                </span>
              </span>
              <div className="flex gap-3 justify-between">
                <div className="text-sm">
                  <h1 className="text-white text-md mt-5">Features:</h1>

                  <ul className="text-gray-400  ">
                    <li>Account Management</li>
                    <li>Loan Services </li>
                    <li>Deposit Services </li>
                    <li>Transaction History </li>
                    <li>Secure Authentication </li>
                    <li>Admin Dashboard </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white mt-5">Role:</h1>
                  <ul className="text-gray-400 text-sm ">
                    <li>Integration</li>
                    <li>Routing and Navigation</li>
                    <li>Authentication</li>
                    <li>User Interface Design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ml-44">
              <a
                href="https://github.com/CodeWith"
                title="Github"
                className=" bg-yellow-500 p-2  text-xs tracking-widest rounded-full   "
              >
                Github Link
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-full bg-gray-950 hover:shadow-2xl hover:shadow-cyan-400  sm:w-[32%] text-thin text-lg sm:text-lg tracking-wider p-12"
          >
            <div className="text-sm ">
              <h1 className=" text-2xl mb-3  text-yellow-300 font-semibold">
                E-Commerce Website
              </h1>

              <span className="text-gray-400">
                Developed using
                <span className="text-white"> React.js </span>
                with
                <span className="text-white"> TailwindCss </span>
                <span className="tetx-gray-400">
                  The E-Commerce is a comprehensive web application. The system
                  offers a user-friendly interface and a seamless experience for
                  both customers and administrators.
                </span>
              </span>
              <div className="flex gap-3 justify-between">
                <div className="text-sm">
                  <h1 className="text-white text-md mt-5">Features:</h1>

                  <ul className="text-gray-400  ">
                    <li>Images Slider</li>
                    <li>Product Catalog</li>
                    <li>Shopping Cart</li>
                    <li>Order Management</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white text-md mt-5">Role:</h1>

                  <ul className="text-gray-400">
                    <li>Backend Integration</li>
                    <li>Routing and Navigation</li>
                    <li>Authentication</li>
                    <li>User Interface Design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ml-44 mt-10">
              <a
                href="https://github.com/CodeWith"
                title="Github"
                className=" bg-yellow-500 p-2  text-xs tracking-widest rounded-full   "
              >
                Github Link
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-full bg-gray-950 hover:shadow-2xl hover:shadow-cyan-400  sm:w-[32%] text-thin text-lg sm:text-lg tracking-wider p-12"
          >
            <div className="text-sm ">
              <h1 className=" text-2xl mb-3  text-yellow-300 font-semibold">
                Mern Authorization
              </h1>

              <span className="text-gray-400 ">
                Developed using
                <span className="text-white  "> React.Js </span>
                with
                <span className="text-white "> TailwindCss </span>
                <span className="text-white "> Node Js </span>
                <span className="text-white "> MongoDB </span>
                <span className="text-white "> Express Js </span>
                <span>
                  The Mern Project is based on authorization and crud opertion
                  with security.
                </span>
              </span>
              <div className="flex gap-3 justify-between">
                <div className="text-sm">
                  <h1 className="text-white text-md mt-5">Features:</h1>

                  <ul className="text-gray-400  ">
                    <li>Admin Panel</li>
                    <li>Register,Login,Contact us</li>
                    <li>Get User & Contact</li>
                    <li> update user,contact & delete </li>
                    <li>JWT Authentication</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white mt-5">Role:</h1>
                  <ul className="text-gray-400 text-sm ">
                    <li>Integration</li>
                    <li>Routing and Navigation</li>
                    <li> JWT Security</li>
                    <li>User Interface Design & Integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ml-44">
              <a
                href="https://github.com/CodeWith"
                title="Github"
                className=" bg-yellow-500 p-2  text-xs tracking-widest rounded-full   "
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
