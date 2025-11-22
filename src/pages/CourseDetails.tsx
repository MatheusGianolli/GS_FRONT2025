// src/pages/CourseDetails.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter';
// Tente deixar assim. Se der erro, apague "UserCourseProgress" e digite de novo para o VS Code achar
// Tente deixar assim. Se der erro, apague "UserCourseProgress" e digite de novo para o VS Code achar
import type { UserCourseProgress, CourseArea } from '../types/'; 
import ProgressTracker from '../components/ProgressTracker';

// Ícone simulado de Play
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>);

// --- Função Simulada de Fetch (Backend Java) ---
// Em produção, isso estaria no services/api.ts consumindo a URL real
async function fetchCourseDetails(area: string, slug: string): Promise<UserCourseProgress | null> {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simula delay da rede
    
    // Validação simples
    if (area !== 'saude' && area !== 'educacao') return null;

    // Dados mockados (Simulação do retorno da API)
    return {
        id: Math.floor(Math.random() * 1000),
        area: area as CourseArea,
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), // Transforma slug em Título
        slug: slug,
        description: `Este é um módulo avançado da trilha de ${area}. O conteúdo aborda aspectos técnicos e práticos, integrando dados do backend Java para monitorar seu progresso em tempo real.`,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Exemplo de vídeo (Rick Roll, troque pelo seu)
        durationMinutes: 120,
        difficulty: 'expert',
        progress: 45, // Imagine que isso veio do banco de dados
        level: 3,
        lastAccessed: new Date().toLocaleDateString(),
    };
}

const CourseDetails: React.FC = () => {
  // 1. Pegando parâmetros via nosso Hook customizado (sem bibliotecas)
  const { params, navigate } = useRouter();
  const area = params.area; // string | undefined
  const slug = params.slug; // string | undefined
  
  // 2. Estados da página
  const [course, setCourse] = useState<UserCourseProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Efeito para carregar os dados quando a rota mudar
  useEffect(() => {
    // Se faltar parâmetro na URL, manda pra 404
    if (!area || !slug) {
        navigate('/404'); 
        return;
    }

    setLoading(true);
    setError(null);

    // Chama a função de dados
    fetchCourseDetails(area, slug)
      .then(data => {
        if (data) {
          setCourse(data);
        } else {
          setError('Curso não encontrado na base de dados.');
        }
      })
      .catch(err => {
        setError('Erro de conexão com a API. ' + err.message);
      })
      .finally(() => setLoading(false));

  }, [area, slug, navigate]); // Recarrega se mudar area ou slug

  // 4. Renderização Condicional (Loading / Erro)
  if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
            <p className="ml-4 text-gray-600 dark:text-gray-300 font-medium">Sincronizando com Backend...</p>
        </div>
    );
  }

  if (error || !course) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Ops! Algo deu errado.</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{error || 'Curso inexistente.'}</p>
            <button 
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
                Voltar para o Início
            </button>
        </div>
    );
  }

  // 5. Renderização Principal (Sucesso)
  return (
    <div className="container mx-auto p-6 lg:p-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Cabeçalho */}
      <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2 uppercase tracking-wide">
            {course.area} • {course.difficulty}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {course.title}
          </h1>
      </div>

      {/* Player de Vídeo */}
      <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-10">
        <iframe
            width="100%"
            height="100%"
            src={course.videoUrl}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
        ></iframe>
      </div>

      {/* Barra de Progresso e Gamificação */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Seu Desempenho</h2>
        {/* Componente importado */}
        <ProgressTracker courseName={course.title} progress={course.progress} level={course.level} />
      </div>

      {/* Detalhes e Ação */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">Resumo do Módulo</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {course.description}
            </p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Nota Técnica:</strong> O progresso é salvo automaticamente na nossa API Java. Continue assistindo para subir de nível!
                </p>
            </div>
        </div>

        {/* Card Lateral de Ação */}
        <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Próximo Passo</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Você completou {course.progress}% deste conteúdo.
                </p>
                <button className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Continuar Aula
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;