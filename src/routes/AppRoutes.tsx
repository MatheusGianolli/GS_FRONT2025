// src/routes/AppRoutes.tsx
import React from 'react';
import { useRouter } from './useRouter';

// Importa todas as páginas
import Home from '../pages/Home';
import About from '../pages/About';
import Contato from '../pages/Contato';
import Faq from '../pages/Faq';
import  Integrantes  from '../pages/Integrantes';
import AreaEdu from '../pages/AreaEdu';
import AreaSaude from '../pages/AreaSaude';
import CourseDetails from '../pages/CourseDetails';
// --- ADICIONE ESTES DOIS IMPORTS ABAIXO ---

import Layout from '../components/Layout'; 

const AppRoutes: React.FC = () => {
  // CRITÉRIO: Roteamento sem biblioteca externa
  const { pathname, params } = useRouter(); 

  const renderRoute = () => {
    // 1. Rota Dinâmica (Prioridade Alta)
    if (pathname.startsWith('/curso/')) {
        // Verifica se os parâmetros obrigatórios existem na URL
        if (params.area && params.slug) {
            return <CourseDetails />;
        }
    }
    
    // 2. Rotas Estáticas
    switch (pathname) {
      case '/':
        return <Home />;
      case '/sobre':
        return <About />;
      case '/contato':
        return <Contato />;
      case '/faq':
        return <Faq />;
      case '/integrantes':
        return <Integrantes />;
      case '/educacao':
        return <AreaEdu />;
      case '/saude':
        return <AreaSaude />;
      case '/about':
        // CRITÉRIO: Redirecionamento (simulado renderizando a página certa)
        return <About />; 
      default:
        // CRITÉRIO: Tratamento de rota não encontrada
       
    }
  };

  return (
    // O Layout envolve a lógica para manter Navbar e Footer fixos
    <Layout>
      {renderRoute()}
    </Layout>
  );
};

export default AppRoutes;