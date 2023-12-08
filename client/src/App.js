import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainIndex from "./components/main-section/MainIndex";
import Header from "./components/header-section/Header";
import NavBar from "./components/nav-section/NavBar";
import React, { useEffect } from "react";
import Footer from "./components/footer-section/Footer";
import AboutMe from "./components/main-section/AboutMe";
import Projects from "./components/main-section/Projects";
import Hobbies from "./components/main-section/Hobbies";
import WorkHistory from "./components/main-section/WorkHistory";

function App() {
  useEffect(() => {
    document.body.classList.add("background");
    document.body.classList.add("font-primary");
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work-history" element={<WorkHistory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
