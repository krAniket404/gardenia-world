import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-30"></div>
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}
