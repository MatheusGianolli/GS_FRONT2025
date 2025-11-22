import React from 'react';

const Integrantes: React.FC = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-indigo-400">
        Equipe de Desenvolvimento
      </h1>
      
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Membros responsáveis pelo projeto Global Solution.
      </p>

      {/* Grid para os cards dos integrantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* --- INTEGRANTE 1 (VOCÊ) --- */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Seu Nome</h2>
          <p className="text-indigo-600 dark:text-indigo-400">RM: 00000</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Turma: 1TDSP</p>
          <div className="mt-4">
             <a href="#" className="text-blue-500 hover:underline mr-4">GitHub</a>
             <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>

        {/* --- INTEGRANTE 2 (ESPAÇO RESERVADO) --- */}
        {/* TODO: Integrante 2 deve editar este card e fazer o commit */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-gray-300">
          <h2 className="text-2xl font-bold text-gray-400">[Nome do Integrante 2]</h2>
          <p className="text-gray-400">RM: 00000</p>
          <p className="text-gray-400 mt-2">Turma: ...</p>
          <div className="mt-4">
             <span className="text-gray-300 mr-4">GitHub</span>
             <span className="text-gray-300">LinkedIn</span>
          </div>
        </div>

        {/* --- INTEGRANTE 3 (ESPAÇO RESERVADO) --- */}
        {/* TODO: Integrante 3 deve editar este card e fazer o commit */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-gray-300">
          <h2 className="text-2xl font-bold text-gray-400">[Nome do Integrante 3]</h2>
          <p className="text-gray-400">RM: 00000</p>
          <p className="text-gray-400 mt-2">Turma: ...</p>
          <div className="mt-4">
             <span className="text-gray-300 mr-4">GitHub</span>
             <span className="text-gray-300">LinkedIn</span>
          </div>
        </div>

        {/* --- INTEGRANTE 4 (ESPAÇO RESERVADO - SE HOUVER) --- */}
        {/* TODO: Se houver mais integrantes, copiem a estrutura acima */}

      </div>
    </div>
  );
};

export default Integrantes;