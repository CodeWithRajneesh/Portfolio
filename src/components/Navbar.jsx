import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerNavItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close the menu after clicking
  };

  useEffect(() => {
    if (!window.location.hash) {
      scrollToTop();
    }
  }, []);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-screen  p-3 z-50  sm:w-full ">
      <nav className="flex  items-center justify-between mr-10">
        <div className="text-xl text-yellow-400 mx-10 md:text-2xl font-bold tracking-widest">
          Rajneesh Kumar
        </div>
        <div className="md:hidden text-white">
          <button
            className="focus:outline-none text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto text-white w-full text-center md:text-left mt-4 md:mt-0`}
        >
          <li className="md:ml-10">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
    after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              Home
            </a>
          </li>

          <li className="md:ml-10">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                triggerNavItem("about");
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
    after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              About
            </a>
          </li>
          <li className="md:ml-10">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                triggerNavItem("resume");
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
    after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              Resume
            </a>
          </li>
          <li className="md:ml-10">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                triggerNavItem("skills");
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
    after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              Skills
            </a>
          </li>
          <li className="md:ml-10">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                triggerNavItem("education");
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
              after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              Education
            </a>
          </li>
          <li className="md:ml-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                triggerNavItem("contact");
              }}
              className="block md:inline-block px-2 py-2 tracking-widest font-medium text-yellow-400 relative after:content-[''] after:block after:w-full after:h-[3px] 
              after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
