import React from "react";
import useAOS from "./components/Custumhook";

const Education = () => {
  useAOS();

  const educationData = [
    {
      level: "HighSchool",
      year: "2013-2014",
      school:
        "SURAJ PUBLIC H S SCHOOL HURHURI MEERGANJ BAREILLY AND UTTAR PRADESH BOARD",
      marks: "first division with 84% marks",
    },
    {
      level: "Intermediate",
      year: "2014-2016",
      school:
        "SANT MANAGPURI INTER COLLEGE MEERGANJ BAREILLY AND UTTAR PRADESH BOARD",
      marks: "first division with 85% marks",
    },
    {
      level: "Graduation(B.Sc)",
      year: "2016-2019",
      school:
        "SWAMI DAYANAND DEGREE COLLEGE MEERGANJ BAREILLY AND MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY BAREILLY",
      marks: "first division",
    },
    {
      level: "MCA",
      year: "2021-2023",
      school:
        "RAKSHPAL BAHADUR MANAGEMENT INSTITUTE BAREILLY AND DR A.P.J ABDUL KALAM TECHNICAL UNIVERSITY",
      marks: "first division with 66%",
    },
  ];

  return (
    <>
      <section id="education" className="bg-black">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className="text-white text-center mb-3 text-4xl">Education</h1>
        </div>
        <div className="w-full p-5 gap-5 flex flex-wrap justify-center">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-up"}
              className="bg-gray-950 p-7 hover:shadow-2xl hover:shadow-red-800 w-full sm:w-[48%] lg:w-[23%] min-h-[100px] mb-5"
            >
              <strong className="text-lg tracking-widest text-white font-semibold mb-2 block">
                {edu.level}
              </strong>
              <h3 className="text-yellow-500 font-bold mt-3 text-2xl">
                {edu.year}
              </h3>
              <p className="text-sm tracking-wider text-slate-400 mb-2 mt-4">
                {edu.school}
              </p>
              <span className="text-slate-400 text-sm hover:underline">
                {edu.marks}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-black">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className="text-white tracking-widest text-center mb-3 text-4xl">
            Experience
          </h1>
        </div>
        <div className="pt-6">
          <div data-aos="zoom-in" className="p-10 bg-gray-950">
            <strong className="text-yellow-400 text-2xl">
              Dec 2023 - Jun 2024
            </strong>
            <h1 className="text-white text-3xl mb-2 mt-2">
              Front-end Development & Software Developer Intern
            </h1>
            <span className="text-gray-400 uppercase tracking-widest text-sm">
              Railworld India Pvt Ltd
            </span>
            <p className="text-slate-300 mt-2 tracking-wider">
              I also completed a six-month internship, which gave me valuable
              practical experience in software development and project
              management. This internship allowed me to apply my academic
              knowledge to real-world problems and learn more about the
              industry. During the internship, I learned -
              <span className="text-yellow-300">
                HTML5, CSS3, TailwindCSS, JavaScript, React.js, Node.js, MongoDB
              </span>
              . I am excited to take on new challenges and contribute to
              innovative projects in computer science.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-black">
        <div className="border-b p-5 border-yellow-300">
          <h1 className="text-white text-center mb-3 tracking-widest text-4xl">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 p-4 pt-20 justify-center">
          {[
            {
              title: "Nidhi Bank System",
              description:
                "The Nidhi Bank System is a comprehensive web application...",
              features: [
                "Account Management",
                "Loan Services",
                "Deposit Services",
                "Transaction History",
                "Secure Authentication",
                "Admin Dashboard",
              ],
              role: [
                "Integration",
                "Routing and Navigation",
                "Authentication",
                "User Interface Design",
              ],
              link: "https://github.com/Naveenkaushik06/Nidhi-7",
            },
            {
              title: "E-Commerce Website",
              description:
                "The E-Commerce is a comprehensive web application...",
              features: [
                "Images Slider",
                "Product Catalog",
                "Shopping Cart",
                "Order Management",
              ],
              role: [
                "Backend Integration",
                "Routing and Navigation",
                "Authentication",
                "User Interface Design",
              ],
              link: "https://github.com/CodeWithRajneesh/E-commerce",
            },
            {
              title: "Mern Authorization",
              description:
                "The Mern Project is based on authorization and crud operation with security...",
              features: [
                "Admin Panel",
                "Register, Login, Contact us",
                "Get User & Contact",
                "Update user, contact & delete",
                "JWT Authentication",
              ],
              role: [
                "Integration",
                "Routing and Navigation",
                "JWT Security",
                "User Interface Design & Integration",
              ],
              link: "https://github.com/CodeWithRajneesh/Mernweb",
            },
          ].map((project, index) => (
            <div
              data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-gray-950 hover:shadow-2xl hover:shadow-cyan-400 text-lg tracking-wider p-6 mb-5"
            >
              <h1 className="text-2xl mb-3 text-yellow-400 font-semibold">
                {project.title}
              </h1>
              <p className="text-gray-400 md:text-md  text-sm mb-4">
                Developed using <span className="text-white">React.js</span>
                with <span className="text-white text-sm">TailwindCSS</span>.
                {project.description}
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <h1 className="text-white md:text-md text-md mt-5">
                    Features:
                  </h1>
                  <ul className="text-gray-400 text-sm list-disc ml-5">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h1 className="text-white md:text-md text-md mt-5">Role:</h1>
                  <ul className="text-gray-400 text-sm list-disc ml-5">
                    {project.role.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-right mt-5">
                <a
                  href={project.link}
                  title="Github"
                  className="bg-yellow-500 p-2 text-xs tracking-widest rounded-full"
                >
                  Github Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
