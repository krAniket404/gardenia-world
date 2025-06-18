import React, { useState } from 'react';

import logo from '../assets/logo.png';
import { CloseCircleOutlined } from '@ant-design/icons';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Activities', path: '/activities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact us', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`fixed top-0 h-screen w-full bg-blue-primary text-white z-50 transition-all ease-[cubic-bezier(.17,.67,.53,1.01)] duration-500 flex justify-center items-center ${
          isOpen ? 'right-0' : '-right-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 rounded-full bg-white h-10 w-10 text-blue-primary cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          <CloseCircleOutlined />
        </button>
        <ul className="list-decimal flex flex-col gap-4 group">
          {links.map((link) => (
            <li key={link.name} className="text-4xl font-bold uppercase">
              <a
                href={link.path}
                className="block py-2 px-4 group-hover:not-hover:text-white/60 hover:tracking-wider transition-all transition-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed top-0 left-0 right-0 z-40 border-b-2 border-dotted bg-white p-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={logo} alt="logo" className="object-cover w-32" />
            </a>
          </div>
          <ul className="hidden md:flex items-center gap-6 list-none">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="flex flex-col h-6 overflow-hidden group"
                >
                  <ul className="list-none group-hover:translate-y-[-50%] transition-transform duration-500 ease-[cubic-bezier(.21,.13,.16,1.43)]">
                    <li>{link.name}</li>
                    <li>{link.name}</li>
                  </ul>
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              className="h-10 w-10 flex justify-center items-center cursor-pointer bg-black rounded-full"
              onClick={toggleMenu}
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 13H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
