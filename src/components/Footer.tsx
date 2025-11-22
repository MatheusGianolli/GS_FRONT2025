import React from 'react';

// Padronizado para React.FC (Boa prática)
const Footer: React.FC = () => {
  return (
    // CORREÇÃO: 'mt-auto' força o rodapé para o fim da tela
    // em nosso layout flex (App.tsx).
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; 2025 Hospital HC. Todos os direitos reservados.</p>
        {/* CORREÇÃO: Atualizado para a Sprint 04 */}
        <p>Projeto Challenge - Sprint 04</p>
      </div>
    </footer>
  );
};

export default Footer;