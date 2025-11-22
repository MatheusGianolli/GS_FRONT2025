// src/routes/useRouter.ts
import { useState, useEffect } from 'react';

/**
 * Hook customizado para gerenciar o roteamento em um SPA sem bibliotecas.
 * Utiliza o History API do navegador.
 */
export const useRouter = () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Função para atualizar o estado e analisar parâmetros de rota dinâmica
    const handleLocationChange = () => {
      const newPathname = window.location.pathname;
      setPathname(newPathname);
      setParams(extractParams(newPathname));
    };

    // Escuta eventos popstate (navegação via botão Voltar/Avançar)
    window.addEventListener('popstate', handleLocationChange);
    // Inicializa a análise dos parâmetros na carga
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Lógica de navegação programática
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setPathname(path);
    setParams(extractParams(path));
  };

  // Funções auxiliares para Rota Dinâmica (Ex: /curso/:area/:slug)
  const extractParams = (path: string): Record<string, string> => {
    const routePattern = /^\/curso\/([a-z]+)\/([a-z0-9-]+)$/; 
    const match = path.match(routePattern);
    
    if (match) {
        // Assume que a rota dinâmica sempre será /curso/:area/:slug
        return { area: match[1], slug: match[2] };
    }
    return {};
  };

  return { pathname, params, navigate };
};
