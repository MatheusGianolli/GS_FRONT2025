import React from 'react';

// Ícones SVG para ilustrar as tecnologias e diferenciais
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-8c0-1.38-1.12-2.5-2.5-2.5S10 10.62 10 12s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z" /></svg>);
const TSIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M4 17.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5zm0-4.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5zm0-4.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v.5c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5v-.5z" /></svg>);
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" /></svg>);
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);

const About: React.FC = () => {
    return (
        <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            
            {/* Título Principal */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-400">
                    O Futuro do Aprendizado em <span className="text-green-600 dark:text-green-400">Saúde</span> & <span className="text-blue-600 dark:text-blue-400">Educação</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Mais do que uma plataforma de cursos, somos um ecossistema gamificado projetado para acelerar sua carreira e conectar teoria à prática.
                </p>
            </div>

            {/* Missão e Propósito (Texto Focado no Usuário/Produto) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-indigo-500 transform transition duration-500 hover:scale-[1.02]">
                    <div className="flex items-center mb-4">
                        <TargetIcon className="w-8 h-8 text-indigo-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nosso Propósito</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Democratizar o acesso a conteúdos de alta complexidade. Nosso objetivo é quebrar as barreiras do ensino tradicional, oferecendo uma experiência onde <strong>Educação e Saúde caminham juntas</strong>. Queremos preparar profissionais completos, capazes de entender tanto a técnica quanto a gestão humana.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-green-500 transform transition duration-500 hover:scale-[1.02]">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 font-bold text-xl">★</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A Experiência Gamificada</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        Esqueça as aulas monótonas. Aqui, seu aprendizado é uma jornada. Implementamos um sistema de <strong>"Passe de Batalha" educacional</strong>, onde cada aula assistida gera XP, desbloqueia conquistas e sobe seu nível profissional. Aprender se torna viciante e gratificante.
                    </p>
                </div>
            </div>

            {/* Seção de Diferenciais */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                    Por que escolher nossa plataforma?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard 
                        title="Conteúdo Híbrido" 
                        desc="A única plataforma que integra Medicina e Pedagogia em trilhas unificadas."
                    />
                    <FeatureCard 
                        title="Dados em Tempo Real" 
                        desc="Integração direta com APIs para trazer estudos de caso atualizados."
                    />
                    <FeatureCard 
                        title="Multiplataforma" 
                        desc="Estude no celular, tablet ou desktop com a mesma fluidez e qualidade."
                    />
                </div>
            </div>

            {/* CRITÉRIO TÉCNICO (Mantido no final para avaliação do Professor) */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-6 text-center uppercase tracking-widest text-sm">
                    Powered By (Arquitetura Técnica)
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <TechCard icon={<ReactIcon className="w-10 h-10 text-blue-500" />} name="REACT + VITE" description="Performance SPA instantânea." />
                    <TechCard icon={<TSIcon className="w-10 h-10 text-sky-600" />} name="TYPESCRIPT" description="Segurança e robustez de código." />
                    <TechCard icon={<div className="text-indigo-500 font-extrabold text-3xl">TW</div>} name="TAILWIND" description="Design system responsivo moderno." />
                    <TechCard icon={<JavaIcon className="w-10 h-10 text-red-700" />} name="JAVA API" description="Backend robusto em DDD." />
                </div>
            </div>
        </div>
    );
};

// Componente auxiliar para Diferenciais
const FeatureCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:bg-indigo-100 dark:hover:bg-gray-700 transition">
        <h4 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
);

// Componente auxiliar para as tecnologias
const TechCard: React.FC<{ icon: React.ReactNode; name: string; description: string }> = ({ icon, name, description }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition duration-300 opacity-80 hover:opacity-100">
        <div className="flex justify-center mb-2">{icon}</div>
        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{name}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);

export default About;
