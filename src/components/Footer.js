
// components/Footer.js

import { FaInstagram } from 'react-icons/fa';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-green-500 dark:bg-green-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Tepepixqui</h2>
          <p className="text-sm">© 2024 Tepepixqui. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
            <FaInstagram size={24} />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center">
            <AiFillAndroid size={24} className="mr-2" />
            <span>Descargar para Android</span>
          </a>
          <a href="https://www.apple.com/ios/app-store/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center">
            <AiFillApple size={24} className="mr-2" />
            <span>Descargar para iOS</span>
          </a>
          <a href="mailto:tepepixqui.gdl@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-200">
            <span>Enviar dudas: tepepixqui.gdl@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
