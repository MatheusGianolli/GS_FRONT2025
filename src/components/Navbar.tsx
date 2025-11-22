// src/components/Navbar.tsx
import React, { useState } from 'react';
import { useRouter } from '../routes/useRouter'; // USAR O NOSSO ROUTER, NÃO O REACT-ROUTER-DOM
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useRouter(); // Hook de navegação manual

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Educação', path: '/educacao' },
    { name: 'Saúde', path: '/saude' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Integrantes', path: '/integrantes' },
    { name: 'Contato', path: '/contato' },
  ];

  // Função para navegar sem recarregar a página
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault(); // Impede o recarregamento da página
    navigate(path);     // Troca a rota manualmente
    setIsOpen(false);   // Fecha o menu mobile se estiver aberto
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
                href="/" 
                onClick={(e) => handleNavigation(e, '/')}
                className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:opacity-80"
            >
              GS-HealthEdu 🚀
            </a>
          </div>
          
          {/* Links Desktop */}
          <div className="hidden md:ml-6 md:flex md:space-x-4 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path)}
                className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botão de Tema e Menu Mobile */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Abrir menu</span>
              {/* Ícone simples de Menu Hamburger / X */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path)}
                className="block text-gray-900 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;