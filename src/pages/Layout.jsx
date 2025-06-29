import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/next';

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />
      <Analytics />

      {/* Footer */}
      <Footer />
    </>
  );
}
