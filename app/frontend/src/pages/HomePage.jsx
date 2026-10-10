import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import Skills from "../components/sections/Skills";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <Skills />
      <Works />
      <Contact />
    </Layout>
  );
}

export default HomePage;
