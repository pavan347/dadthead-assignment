import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";
import Portfolio from "./pages/portfolio/Portfolio";

import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main
       className="flex flex-col items-center justify-center min-h-100 bg-gray-100"
      >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      </main>
      <Footer />
    </>
  );
};

export default App;
