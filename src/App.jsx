import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./utils/ga";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Gallery from "./pages/Gallery.jsx";
import Activities from "./pages/Activities.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
