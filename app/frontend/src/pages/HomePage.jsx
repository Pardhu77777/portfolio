import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import Skills from "../components/sections/Skills";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";
import BotIcon from "../components/BotIcon";
import SplashScreen from "../components/SplashScreen";

function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="page-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <FloatingIcons />
      <Header />
      <Hero />
      <AboutPreview />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <BotIcon />
    </motion.div>
  );
}

export default HomePage;
