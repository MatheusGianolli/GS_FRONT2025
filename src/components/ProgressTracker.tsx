// src/components/ProgressTracker.tsx
import React from 'react';

interface ProgressTrackerProps {
  courseName: string;
  progress: number; // Valor de 0 a 100
  level: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ courseName, progress, level }) => {
  // Define a cor da barra baseada na porcentagem
  const getBarColor = () => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <div>
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Módulo Atual
            </h4>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {courseName}
            </span>
        </div>
        <div className="text-right">
            <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-indigo-600 rounded-lg mb-1">
                NÍVEL {level}
            </span>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {progress}% Concluído
            </p>
        </div>
      </div>

      {/* Barra de Fundo */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
        {/* Barra de Progresso Animada */}
        <div 
            className={`${getBarColor()} h-4 rounded-full transition-all duration-1000 ease-out relative`}
            style={{ width: `${progress}%` }}
        >
            {/* Efeito de brilho na barra (Estilo Gamer) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;