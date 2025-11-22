// src/pages/AreaEdu.tsx
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Removido
import { useRouter } from '../routes/useRouter'; // Novo import para navegação
import { CourseData } from '../types';
import { getCourses } from '../services/api'; // Usando a versão refatorada com fetch

const AreaEdu: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useRouter(); // Hook para navegação

  useEffect(() => {
    setLoading(true);
    getCourses('educacao') // Chamada usando fetch nativo encapsulado
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
    navigate(`/curso/${area}/${slug}`); // Navegação manual para rota dinâmica
  };

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ... (Título e Descrição) */}
      
      {/* Grid de Cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <a // Usando <a> ou <button> com navegação manual
            key={course.id} 
            href={`/curso/${course.area}/${course.slug}`} // Para acessibilidade
            onClick={(e) => { 
                e.preventDefault(); 
                handleCourseClick(course.area, course.slug); 
            }}
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            {/* ... (Conteúdo do Card) */}
            <div className="mt-4 flex justify-between items-center">
                <span className="text-indigo-500 font-semibold">Iniciar Aula →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AreaEdu;