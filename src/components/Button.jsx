import React, { useEffect, useState } from "react";
import useAOS from "./Custumhook";

const Button = () => {
  const [resumePdf, setResumePdf] = useState(null);
  useAOS();
  useEffect(() => {
    fetch("Rajneesh.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setResumePdf(url);
      });
  }, []);
  return (
    <>
      {resumePdf && (
        <a
          data-aos="zoom-in-up"
          className="bg-yellow-400 text-xs p-4 font-semibold tracking-wider rounded-3xl mt-7  text-black uppercase"
          href={resumePdf}
          download="Rajneesh.pdf"
        >
          Download CV
        </a>
      )}
    </>
  );
};

export default Button;
