// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter';
import type { UserCourseProgress, CourseArea } from '../types';
import ProgressTracker from '../components/ProgressTracker';
// Ícones simulados para dashboard
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.523 5.754 20 7.5 20s3.332-.477 4.5-1.247m0 0V5.253M12 20v-13M7.5 13.5h9" /></svg>);
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>);

// Mock de dados de progresso (simulando API GET para dashboard)
const mockUserProgress: UserCourseProgress[] = [
    { id: 1, area: 'saude', title: 'Primeiros Socorros Avançados', slug: 'primeiros-socorros', description: 'Módulo de emergência.', videoUrl: '', durationMinutes: 45, difficulty: 'intermediate', progress: 78, level: 5, lastAccessed: '2025-11-20' },
    { id: 2, area: 'educacao', title: 'Didática 4.0 e Metodologias Ativas', slug: 'didatica-40', description: 'Inovação em sala de aula.', videoUrl: '', durationMinutes: 70, difficulty: 'expert', progress: 35, level: 2, lastAccessed: '2025-11-18' },
];

interface DashboardStats {
    totalCourses: number;
    activeUsers: number;
    lastApiUpdate: string;
}

// Simulação de chamada de API para estatísticas do Dashboard
async function fetchDashboardStats(): Promise<DashboardStats> {
    // Simula a chamada 'fetch' ao backend Java
    await new Promise(resolve => setTimeout(resolve, 600)); 
    return {
        totalCourses: 45,
        activeUsers: 1240,
        lastApiUpdate: new Date().toLocaleDateString('pt-BR'),
    };
}

const Home: React.FC = () => {
  const { navigate } = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats()
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  const handleNavigateToCourse = (area: CourseArea, slug: string) => {
    navigate(`/curso/${area}/${slug}`);
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Bem-vindo à Global Solution! 🎓
      </h1>
      <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-12">
        Seu portal avançado de aprendizado em Saúde e Educação.
      </p>

      {/* Seção de Estatísticas (Chamada de API Simples) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {loading ? (
            <div className="md:col-span-3 text-center text-gray-500">Carregando estatísticas...</div>
        ) : stats && (
            <>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Cursos Totais</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stats.totalCourses}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Usuários Ativos</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stats.activeUsers}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-gray-500">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">API Java Status</h3>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">Atualizado em: {stats.lastApiUpdate}</p>
                </div>
            </>
        )}
      </div>

      {/* Seção de Cursos em Andamento (Gamificação) */}
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2">
        Seu Progresso de Aprendizado (Passe de Batalha)
      </h2>
      <div className="space-y-6">
        {mockUserProgress.map(course => (
          <div
            key={course.id}
            onClick={() => handleNavigateToCourse(course.area, course.slug)}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-indigo-500/50 hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{course.title}</h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Último Acesso: {course.lastAccessed}</span>
            </div>
            {/* Componente ProgressTracker (Avançado/Modular) */}
            <ProgressTracker courseName={course.title} progress={course.progress} level={course.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;