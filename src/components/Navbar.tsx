import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lista de links para simplificar
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Educação', path: '/educacao' },
    { name: 'Saúde', path: '/saude' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Integrantes', path: '/integrantes' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Links Primários */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              GS-HealthEdu 🚀
            </Link>
          </div>
          
          {/* Links para Desktop (Critério: Responsividade - md:flex) */}
          <div className="hidden md:ml-6 md:flex md:space-x-4 items-center">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botão de Tema e Menu Mobile */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {/* Botão Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {/* Ícones de menu (simulados) */}
              {isOpen ? '❌' : '☰'} 
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Critério: Responsividade) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-900 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;