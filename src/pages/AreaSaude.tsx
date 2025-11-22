// src/pages/AreaSaude.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter';
import type { CourseData } from '../types';
import { getCourses } from '../services/api'; 
// Ícone simulado para Saúde
const MedicalCrossIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M18 10h-4V6h-4v4H6v4h4v4h4v-4h4v-4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /></svg>);

const AreaSaude: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useRouter(); 

  // CRITÉRIO: Consumo da API (GET) para a área correta
  useEffect(() => {
    setLoading(true);
    getCourses('saude') // Chamada tipada para a API Java (encapsulada em fetch)
      .then(data => {
        setCourses(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message || 'Erro desconhecido ao carregar cursos.'); // CRITÉRIO: Tratamento de erros
        setCourses([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCourseClick = (area: string, slug: string) => {
    navigate(`/curso/${area}/${slug}`); // Navegação manual (SPA)
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-extrabold mb-2 text-red-700 dark:text-red-400 flex items-center">
        <MedicalCrossIcon className="w-8 h-8 mr-3" /> Plataforma de Saúde
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Cursos de alta complexidade em Anatomia, Fisiologia e Práticas Clínicas baseadas em evidências.
      </p>

      {loading && <p className="text-center text-xl text-gray-700 dark:text-gray-300">Carregando módulos de saúde...</p>}
      {error && <p className="text-center text-xl text-red-600 dark:text-red-400 font-bold">ERRO NA API: {error}</p>}

      {/* CRITÉRIO: Estilização e Responsividade (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <a 
            key={course.id} 
            href={`/curso/${course.area}/${course.slug}`} // Para acessibilidade
            onClick={(e) => { 
                e.preventDefault(); 
                handleCourseClick(course.area, course.slug); 
            }}
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <span className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase">{course.difficulty}</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-indigo-500 font-semibold">Acessar Curso →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AreaSaude;