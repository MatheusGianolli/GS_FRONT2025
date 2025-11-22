// src/pages/About.tsx
import React from 'react';
// Ícones simulados para tecnologias
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-8c0-1.38-1.12-2.5-2.5-2.5S10 10.62 10 12s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z" /></svg>);
const TSIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M4 17.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5zm0-4.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5zm0-4.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5z" /></svg>);
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" /></svg>);


const About: React.FC = () => {
    return (
        <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-4xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-400 border-b-4 border-indigo-300 pb-2">
                🌟 Sobre o Projeto Global Solution
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                Nossa missão é fornecer uma plataforma de aprendizado coesa, responsiva e acessível nas áreas críticas de Saúde e Educação.
            </p>

            {/* Missão e Visão */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-indigo-500">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Missão</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Promover a excelência no desenvolvimento Front-End e Back-End através de uma arquitetura modular baseada em **SPA (Single Page Application)**, garantindo tipagem robusta e alta usabilidade em todos os dispositivos.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Visão Técnica</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Alcançar a escalabilidade e manutenibilidade máxima, utilizando o padrão **Domain-Driven Design** no backend Java e uma forte **componentização** com tipagem no frontend React/TypeScript.
                    </p>
                </div>
            </div>

            {/* CRITÉRIO: Tecnologias Utilizadas */}
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Tecnologias Core (Obrigatórias)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <TechCard icon={<ReactIcon className="w-10 h-10 text-blue-500" />} name="REACT + VITE" description="Estrutura de Componentes e Ambiente de Desenvolvimento Rápido (SPA)." />
                <TechCard icon={<TSIcon className="w-10 h-10 text-sky-600" />} name="TYPESCRIPT" description="Tipagem forte para código seguro e manutenível (Interfaces, Union Types)." />
                <TechCard icon={<div className="text-indigo-500 font-extrabold text-3xl">TW</div>} name="TAILWINDCSS" description="Estilização utilitária e responsiva. Sem uso de CSS ou SCSS puro." />
                <TechCard icon={<JavaIcon className="w-10 h-10 text-red-700" />} name="JAVA API (DDD)" description="Backend publicado remotamente (nuvem) consumindo o Front-End via fetch nativo." />
            </div>

            {/* CRITÉRIO: Versionamento */}
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-12 mb-4">
                Versionamento e Deploy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                O projeto utiliza o **GIT/GITHUB** seguindo o fluxo **GITFLOW** (`main`, `develop`, `feature/*`). O deploy final é realizado na plataforma **VERCEL**, garantindo acesso público e estável à aplicação SPA.
            </p>
        </div>
    );
};

// Componente auxiliar para as tecnologias
const TechCard: React.FC<{ icon: React.ReactNode; name: string; description: string }> = ({ icon, name, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-indigo-500/30 transition duration-300">
        <div className="flex justify-center mb-3">{icon}</div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

export default About;
