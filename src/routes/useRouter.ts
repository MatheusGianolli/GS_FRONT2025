import { useState, useEffect } from 'react';

export const useRouter = () => {
  // Estado para guardar a URL atual
  const [pathname, setPathname] = useState(window.location.pathname);
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Função que atualiza os estados quando a rota muda
    const handleLocationChange = () => {
      const newPath = window.location.pathname;
      setPathname(newPath);
      setParams(extractParams(newPath));
    };

    // 1. Escuta quando o usuário clica em Voltar/Avançar no navegador
    window.addEventListener('popstate', handleLocationChange);
    
    // 2. Escuta nosso EVENTO ESPECIAL (Isso corrige o bug de não mudar a página)
    window.addEventListener('pushstate', handleLocationChange);

    // Roda uma vez ao iniciar para pegar a URL inicial
    handleLocationChange();

    // Limpeza dos ouvintes quando o componente desmonta
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  // Função para navegar manualmente
  const navigate = (path: string) => {
    // Muda a URL lá em cima sem recarregar a página
    window.history.pushState({}, '', path);
    
    // Grita para o sistema: "EI, MUDEI DE PÁGINA!"
    const navigationEvent = new Event('pushstate');
    window.dispatchEvent(navigationEvent);
  };

  // Função auxiliar para pegar parâmetros da URL (ex: /curso/saude/anatomoia)
  const extractParams = (path: string): Record<string, string> => {
    // Regex para capturar area e slug
    const routePattern = /^\/curso\/([a-z0-9-]+)\/([a-z0-9-]+)$/; 
    const match = path.match(routePattern);
    
    if (match) {
        return { area: match[1], slug: match[2] };
    }
    return {};
  };

  return { pathname, params, navigate };
};
