import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter'; 
import type { CourseData } from '../types';
import { getCourses } from '../services/api'; 

// Ícone simulado
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 3v14l-7 3-7-3V5l7-3zm0 3.829V19.171l-5.75-2.464L6 14.829V7.171l.25-.707L12 5.829z" /></svg>);

const AreaEdu: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useRouter(); 

  useEffect(() => {
    setLoading(true);
    getCourses('educacao') 
      .then(data => {
        setCourses(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message || 'Erro desconhecido ao carregar cursos.'); 
        setCourses([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCourseClick = (area: string, slug: string) => {
    navigate(`/curso/${area}/${slug}`); 
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-extrabold mb-2 text-green-700 dark:text-green-400 flex items-center">
        <BookOpenIcon className="w-8 h-8 mr-3" /> Plataforma de Educação
      </h1>
      
      {/* CORREÇÃO: Exibindo loading e error para o TS não reclamar */}
      {loading && (
        <div className="text-center py-10">
            <p className="text-gray-500">Carregando cursos...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
            <p>Status: {error}</p>
        </div>
      )}
      
      {/* Grid de Cursos */}
      {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <a 
                key={course.id} 
                href={`/curso/${course.area}/${course.slug}`} 
                onClick={(e) => { 
                    e.preventDefault(); 
                    handleCourseClick(course.area, course.slug); 
                }}
                className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <span className="text-xs font-bold uppercase text-indigo-500 mb-2 block">{course.difficulty}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-indigo-500 font-semibold text-sm">Iniciar Aula →</span>
                </div>
              </a>
            ))}
          </div>
      )}
    </div>
  );
};

export default AreaEdu;