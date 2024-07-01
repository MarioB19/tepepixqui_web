// components/Navbar.js

import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500 dark:bg-green-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
        >
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <div className="text-white font-bold text-lg">Tepepixqui</div>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="mapa" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Ver Mapa</Link>
          <Link to="quienes-somos" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Quiénes Somos</Link>
          <Link to="faq" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Preguntas Frecuentes</Link>
          <Link to="por-que-ayudar" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Por Qué Ayudar</Link>
          <Link to="nuestro-impacto" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Nuestro Impacto</Link>
          <button 
            onClick={toggleDarkMode} 
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded flex items-center justify-center transition-colors duration-200">
            {darkMode ? (
              <SunIcon className="h-6 w-6 animate-spin" />
            ) : (
              <MoonIcon className="h-6 w-6 animate-pulse" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="mapa" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Ver Mapa</Link>
          <Link to="quienes-somos" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Quiénes Somos</Link>
          <Link to="faq" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Preguntas Frecuentes</Link>
          <Link to="por-que-ayudar" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Por Qué Ayudar</Link>
          <Link to="nuestro-impacto" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Nuestro Impacto</Link>
          <button 
            onClick={toggleDarkMode} 
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded flex items-center justify-center transition-colors duration-200 mt-2">
            {darkMode ? (
              <SunIcon className="h-6 w-6 animate-spin" />
            ) : (
              <MoonIcon className="h-6 w-6 animate-pulse" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
