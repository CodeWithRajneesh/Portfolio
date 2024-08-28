import React from "react";
import useAOS from "./Custumhook";

const skills = [
  { name: "HTML5 75%", width: "75%" },
  { name: "CSS3 65%", width: "65%" },
  { name: "JavaScript 85%", width: "85%" },
  { name: "React Js 85%", width: "80%" },
  { name: "Node Js 60%", width: "60%" },
  { name: "MongoDB 55%", width: "55%" },
  { name: "Tailwindcss 60%", width: "60%" },
];

const Skills = () => {
  useAOS();

  return (
    <>
      <section id="skills" className="bg-black">
        <div className="border-b border-yellow-300 mb-3">
          <h1 className=" text-white text-center mb-3 text-4xl">Skills</h1>
        </div>
        <div className=" flex justify-around  ">
          <div className="space-y-6 mt-5">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <h2 className="font-sans text-gray-400 tracking-wide text-md">
                  {skill.name}
                </h2>
                <div className="w-[400px] h-[5px] border border-gray-600 rounded-md shadow-[0_0_10px_rgb(245,159,0)] mt-2">
                  <span
                    className="block h-full bg-yellow-500 rounded-md"
                    style={{ width: skill.width }}
                    data-aos="slide-right"
                  ></span>
                </div>
              </div>
            ))}
          </div>

          
            <div data-aos="zoom-in-up" data-aos-duration="1500" className="w-[50%]">
              <h3 className="text-3xl mt-8 font-semibold text-yellow-400 mb-6">
                Let's create something amazing together
              </h3>
              <p className="text-gray-300 mb-8 w-[90%]">
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
    </>
  );
};

export default Skills;

//   return (
//     <>
//       <section id="skills">
//         <div className="  p-16 bg-black ">
//           <div className="border-b border-yellow-300 mb-3">
//             <h1 className=" text-white text-center mb-3 text-4xl">Skills</h1>
//           </div>
//           <div data-aos="zoom-in-up" data-aos-duration="1500">
//             <h3 className="text-3xl mt-8 font-semibold text-yellow-400 mb-6">
//               Let's create something amazing together
//             </h3>
//             <p className="text-gray-300 mb-8 w-[80%]">
//               If you’re interested in working together or have any questions,
//               feel free to reach out. I’m always open to new opportunities and
//               would love to hear more about your project needs and how I can
//               help.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <svg
//                   className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span className="text-gray-300">
//                   Collaborate on a custom web development project
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <svg
//                   className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span className="text-gray-300">
//                   Optimize existing website for improved performance and user
//                   experience
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <svg
//                   className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 mr-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span className="text-gray-300">
//                   Create user components and integrate with backend services
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <section className=" bg-black ">
//         <div className="p-10 flex  justify-around  ">
//           <div className="w-[45%]">
//             <span className="text-gray-400">HTML5</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1  mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[80%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 80%
//               </p>
//             </div>
//             <span className="text-gray-400">CSS3</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[70%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 70%
//               </p>
//             </div>
//             <span className="text-gray-400">JavaScript</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[85%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 85%
//               </p>
//             </div>
//             <span className="text-gray-400">React Js </span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[70%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 70%
//               </p>
//             </div>
//           </div>
//           <div className="w-[45%]">
//             <span className="text-gray-400">Tailwindcss</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[65%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 65%
//               </p>
//             </div>
//             <span className="text-gray-400">Node Js</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[60%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 60%
//               </p>
//             </div>
//             <span className="text-gray-400">MongoDB</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3 border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="slide-right"
//                 data-aos-duration="2500"
//                 className="w-[70%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 70%
//               </p>
//             </div>

//             <span className="text-gray-400">Git</span>
//             <div
//               data-aos="slide-right"
//               data-aos-duration="1500"
//               className="mt-1 mb-3  border border-gray-600 rounded-full"
//             >
//               <p
//                 data-aos="fade-right"
//                 data-aos-duration="2500"
//                 className="w-[90%] pb-1 text-end text-xs text-black rounded-full h-3 bg-yellow-400 tracking-wider
//              width-[80%] "
//               >
//                 95%
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="skills" className="bg-opacity-100 bg-black gap-10 py-10">
//         <div className="text-center justify-center mb-10">
//           <h2
//             data-aos="zoom-in-down"
//             data-aos-duration="1500"
//             className="text-2xl text-yellow-400 sm:text-3xl md:text-4xl w-full  sm:w-3/4 md:w-2/3 mx-auto font-semibold "
//           >
//             Crafting web experiences that captivate and drive results
//           </h2>
//           <p
//             data-aos="zoom-in-up"
//             data-aos-duration="1500"
//             className="w-full sm:w-3/4 md:w-2/3 text-gray-400 text-lg sm:text-xl mx-auto mt-5    "
//           >
//             As a front-end developer with a passion for user interface design, I
//             specialize in creating web experiences that captivate and drive
//             results. With a strong focus on user-centric design, I craft
//             tailored solutions that meet the unique needs of both businesses and
//             users. Whether it's developing a custom web application or
//             optimizing an existing website, my goal is to deliver exceptional
//             web experiences that exceed expectations.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row flex-wrap justify-around gap-6 md:gap-4">
//           <div
//             data-aos="fade-down"
//             className="border  shadow-cyan-500 shadow-2xl text-slate-400 hover:text-white hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14"
//           >
//             <h3 className="text-xl text-white sm:text-2xl md:text-3xl font-semibold mb-2">
//               React JS Development
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
//               With expertise in React JS, I develop highly performant and
//               scalable web applications that meet the needs of modern
//               businesses. My proficiency in React allows me to create elegant,
//               efficient, and user-friendly web solutions that delight users and
//               drive business results.
//             </p>
//           </div>

//           <div
//             data-aos="fade-down"
//             className="border shadow-cyan-500 shadow-2xl text-slate-400 hover:text-white hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14"
//           >
//             <h3 className="text-xl text-white sm:text-2xl md:text-3xl font-semibold mb-2">
//               Front-End Development
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
//               As a front-end developer, I specialize in developing visually
//               appealing, intuitive, and responsive websites that prioritize user
//               experience. My expertise in HTML, CSS, and JavaScript allows me to
//               create high-quality, scalable websites that meet the needs of
//               businesses and users alike.
//             </p>
//           </div>

//           <div
//             data-aos="fade-up"
//             className="flex  flex-col md:flex-row flex-wrap justify-around gap-6 md:gap-4 mt-10"
//           >
//             <div className="border  shadow-cyan-500 shadow-2xl text-slate-400 hover:text-white hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14">
//               <h3 className="text-xl text-white sm:text-2xl md:text-3xl font-semibold mb-2">
//                 JavaScript Proficiency
//               </h3>
//               <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
//                 My proficiency in JavaScript allows me to create dynamic and
//                 interactive web experiences that engage users and drive business
//                 results. I have experience using a range of JavaScript
//                 frameworks and libraries, allowing me to develop customized
//                 solutions to meet the unique needs of clients.
//               </p>
//             </div>

//             <div
//               data-aos="fade-up"
//               className="border  shadow-cyan-500 shadow-2xl text-slate-400 hover:text-white hover:bg-blue-700 border-sky-600 w-full md:w-[45%] p-6 md:p-10 lg:p-14"
//             >
//               <h3 className="text-xl text-white sm:text-2xl md:text-3xl font-semibold mb-2">
//                 Node Js & Mongo DB
//               </h3>
//               <p className="text-sm sm:text-base md:text-lg mb-2 mt-4">
//                 My passion for user-centric design has led me to specialize in
//                 node js, where I focus on creating Rest ful API, , and intuitive
//                 interfaces that engage users and drive business results. My
//                 expertise in design principles, user research, and prototyping
//                 allows me to create stunning web experiences that delight users
//                 and exceed expectations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;
