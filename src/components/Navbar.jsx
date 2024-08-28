import React, { useEffect } from "react";

const Navbar = () => {
  const triggerNavItem = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === "/") {
      scrollToTop();
    }
  }, []);

  return (
    <>
      <header className="bg-black text-white fixed top-0 left-0 from-slate-100 via-violet-500 p-3 w-full to-slate-100 z-50">
        <nav id="home">
          <ul className="w-full font-normal flex flex-wrap items-center text-lg justify-center">
            <li className="mr-60 ml-32 font-bold tracking-widest shadow-slate-950 text-3xl">
              Rajneesh Kumar
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop(); // Scrolls to the top of the page
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  triggerNavItem("about");
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  triggerNavItem("resume");
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  triggerNavItem("skills");
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  triggerNavItem("education");
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  triggerNavItem("contact");
                }}
                className="mr-10 tracking-widest inline-block font-medium text-white  after:block after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
