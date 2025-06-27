import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Gallery from './pages/Gallery.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
