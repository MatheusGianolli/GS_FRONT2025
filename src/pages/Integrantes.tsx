import React from 'react';

const Integrantes: React.FC = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Título com gradiente GEMverse */}
      <h1 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        Equipe de Desenvolvimento GEMverse
      </h1>
      
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Membros responsáveis pelo projeto <span className="font-semibold">Global Solution – GEMverse: Your Saga</span>.
      </p>

      {/* Grid para os cards dos integrantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* MATHEUS */}
        <div className="relative bg-white/90 dark:bg-gray-900/80 p-6 rounded-2xl shadow-lg border border-cyan-200/70 dark:border-fuchsia-500/50 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
          {/* barrinha superior em gradiente */}
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
          
          <div className="mt-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Matheus Gianolli
            </h2>
            <p className="text-cyan-600 dark:text-cyan-300 font-medium">
              RM: 565258
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Turma: 1TDSPV
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ENZO */}
        <div className="relative bg-white/90 dark:bg-gray-900/80 p-6 rounded-2xl shadow-lg border border-cyan-200/40 dark:border-fuchsia-500/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
          
          <div className="mt-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Enzo Xavier Coelho
            </h2>
            <p className="text-cyan-600 dark:text-cyan-300 font-medium">
              RM: 563379
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Turma: 1TDSPV
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* GUSTAVO */}
        <div className="relative bg-white/90 dark:bg-gray-900/80 p-6 rounded-2xl shadow-lg border border-cyan-200/40 dark:border-fuchsia-500/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
          
          <div className="mt-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Gustavo Ribeiro Permagnani
            </h2>
            <p className="text-cyan-600 dark:text-cyan-300 font-medium">
              RM: 564995
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Turma: 1TDSPV
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="font-medium text-cyan-500 hover:text-fuchsia-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Integrantes;
