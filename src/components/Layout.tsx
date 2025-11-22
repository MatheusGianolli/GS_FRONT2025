
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Fixa no Topo */}
      <Navbar />
      
      {/* Conteúdo Principal (A página que muda) */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Rodapé Fixo embaixo */}
      <Footer />
    </div>
  );
};

export default Layout;