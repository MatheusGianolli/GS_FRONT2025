import React from 'react';

const Footer: React.FC = () => {
  return (
    
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 py-6 text-center">
        
        {/* Título do Projeto Atualizado */}
        <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg">
          &copy; 2025 Global Solution | Saúde & Educação
        </p>
        
        {/* Descrição Técnica */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Desenvolvido com React + Vite + TypeScript para a avaliação FIAP.
        </p>

        {/* Toque da Equipe */}
        <p className="text-xs text-indigo-500 mt-2 font-medium">
          Feito com 💜 pela equipe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;