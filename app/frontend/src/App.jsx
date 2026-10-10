import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import WorksListPage from "./pages/WorksListPage";
import GrainientBackground from "./components/ui/GrainientBackground";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="bg-aura" />
      <GrainientBackground />
      <div className="bg-shapes" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works/:type" element={<WorksListPage />} />
        <Route path="/project/:type/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
