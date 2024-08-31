import React, { useEffect, useState } from "react";
import useAOS from "./Custumhook";
import Resumepdf from "./images/Rajneesh .pdf";

const Button = () => {
  const [resumePdf, setResumePdf] = useState(null);
  useAOS();
  useEffect(() => {
    fetch(Resumepdf)
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
          download={Resumepdf}
        >
          Download CV
        </a>
      )}
    </>
  );
};

export default Button;
