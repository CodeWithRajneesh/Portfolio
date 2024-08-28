import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

import Error from "./components/Error";
import Skills from "./components/Skills";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Navbar from "./components/Navbar";
import Resume from "./Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
