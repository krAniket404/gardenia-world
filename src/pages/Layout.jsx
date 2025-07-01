import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      {/* Toaster */}
      <Toaster />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
}
