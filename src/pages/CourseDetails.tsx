import React, { useEffect, useState } from 'react';
import { useRouter } from '../routes/useRouter';
import type { UserCourseProgress, CourseArea } from '../types/index';
import ProgressTracker from '../components/ProgressTracker';

// --- ÍCONES SVG (Design System Interno) ---
const Icons = {
  Play: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Check: () => <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Lock: () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  Trophy: () => <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>,
  Star: () => <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
};

// --- LÓGICA DE SEGURANÇA (Garante conteúdo sempre) ---
const getCourseContent = (area: string, slug: string): UserCourseProgress => {
    // Se a área for inválida, força 'educacao'
    const safeArea = (area === 'saude' || area === 'educacao') ? area : 'educacao';
    const isEdu = safeArea === 'educacao';
    
    // Títulos e Descrições baseados na área escolhida
    const title = isEdu ? "Neurociência e Aprendizagem Acelerada" : "Anatomia Clínica de Alta Complexidade";
    const desc = isEdu 
        ? "Descubra como o cérebro aprende e utilize tecnologias de gamificação para revolucionar a sala de aula. Um curso essencial para pedagogos modernos que desejam aplicar metodologias ativas."
        : "Domine os sistemas fisiológicos humanos com foco em patologias críticas e atendimento de urgência baseado em evidências. Conteúdo técnico para profissionais de saúde.";

    return {
        id: Math.random(),
        area: safeArea as CourseArea,
        title: title,
        slug: slug || 'curso-padrao', // Fallback se slug for vazio
        description: desc,
        videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', // Vídeo tecnológico de fundo
        durationMinutes: 120,
        difficulty: 'expert',
        progress: 35, // Começa com 35% para dar sensação de progresso
        level: 4,
        lastAccessed: new Date().toLocaleDateString(),
    };
};

const CourseDetails: React.FC = () => {
  const { params } = useRouter();
  
  // Trava de Segurança: Se params vier vazio, usa valores padrão
  const area = params.area || 'educacao'; 
  const slug = params.slug || 'conteudo-principal';

  const [course, setCourse] = useState<UserCourseProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'ementa' | 'sobre' | 'comunidade'>('ementa');

  useEffect(() => {
    setLoading(true);
    // Simula carregamento da API
    setTimeout(() => {
        const content = getCourseContent(area, slug);
        setCourse(content);
        setLoading(false);
    }, 800); 
  }, [area, slug]);

  // Tela de Carregamento
  if (loading) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-500"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-indigo-400">
                   <Icons.Play />
                </div>
            </div>
            <h2 className="text-xl mt-6 font-light tracking-widest animate-pulse text-indigo-300">SINCRONIZANDO AMBIENTE...</h2>
        </div>
    );
  }

  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pb-20">
      
      {/* --- HERO SECTION (Cabeçalho Imersivo) --- */}
      <div className="relative bg-gray-900 h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 opacity-90"></div>
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" alt="Background" />
        
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center z-10">
            <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-widest">
                    {course.area}
                </span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-400 text-yellow-300 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <Icons.Star /> Premium
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight max-w-4xl drop-shadow-lg">
                {course.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-500">👨‍🏫</div>
                    <span>Prof. Dr. Silva (PhD)</span>
                </div>
                <span>•</span>
                <span>Atualizado em 2025</span>
                <span>•</span>
                <div className="flex text-yellow-400">★★★★★ (4.9)</div>
            </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* --- COLUNA ESQUERDA: VÍDEO E ABAS --- */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Player de Vídeo */}
                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10 dark:ring-gray-800 aspect-video group relative">
                    <iframe
                        className="w-full h-full"
                        src={`${course.videoUrl}?autoplay=0&modestbranding=1&rel=0`}
                        title="Course Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Sistema de Abas */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="flex border-b border-gray-200 dark:border-gray-700">
                        {['ementa', 'sobre', 'comunidade'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-all ${
                                    activeTab === tab 
                                    ? 'text-indigo-600 border-b-4 border-indigo-600 bg-indigo-50 dark:bg-gray-700/50 dark:text-indigo-400' 
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        {activeTab === 'ementa' && (
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                                    Trilha de Aprendizado
                                </h3>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className={`group flex items-center justify-between p-5 rounded-xl border transition-all cursor-pointer ${
                                        i === 2 
                                        ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800 ring-2 ring-indigo-500/20' 
                                        : 'bg-gray-50 border-gray-200 dark:bg-gray-700/30 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700'
                                    }`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                                                i < 2 ? 'bg-green-100 text-green-600' :
                                                i === 2 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40' : 'bg-gray-200 text-gray-400 dark:bg-gray-600'
                                            }`}>
                                                {i < 2 ? <Icons.Check /> : i === 2 ? <Icons.Play /> : <Icons.Lock />}
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${i > 2 ? 'text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                                                    Módulo 0{i}: Fundamentos Avançados
                                                </h4>
                                                <span className="text-xs font-medium text-gray-500">Videoaula • 25 min</span>
                                            </div>
                                        </div>
                                        {i === 2 && <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">EM ANDAMENTO</span>}
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'sobre' && (
                             <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{course.description}</p>
                        )}
                        {activeTab === 'comunidade' && (
                             <div className="text-center py-10 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
                                 <p className="text-gray-500 mb-4">O fórum de dúvidas é carregado via API Java.</p>
                                 <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-bold">Acessar Fórum</button>
                             </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- COLUNA DIREITA: GAMIFICATION SIDEBAR --- */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* Widget de Nível */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    
                    <div className="flex justify-between items-end mb-4 relative z-10">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Seu Rank</p>
                            <h3 className="text-3xl font-black text-gray-800 dark:text-white">NÍVEL {course.level}</h3>
                        </div>
                        <div className="text-4xl animate-bounce">🏆</div>
                    </div>
                    
                    <ProgressTracker courseName="XP para Nível 5" progress={course.progress} level={course.level} />
                    <p className="text-xs text-center text-gray-500 mt-3">Faltam 340 XP para subir de rank</p>
                </div>

                {/* Widget de Próxima Ação */}
                <div className="bg-gradient-to-b from-indigo-600 to-purple-700 rounded-2xl p-1 shadow-xl">
                    <div className="bg-gray-900 rounded-xl p-6 text-center">
                        <h4 className="text-white font-bold text-lg mb-2">Pronto para o Desafio?</h4>
                        <p className="text-gray-400 text-sm mb-6">Complete a aula atual para desbloquear o certificado parcial.</p>
                        <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            <Icons.Play /> CONTINUAR ESTUDANDO
                        </button>
                    </div>
                </div>

                {/* Lista de Conquistas */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <Icons.Trophy /> Conquistas do Módulo
                    </h4>
                    <div className="space-y-4">
                         <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xl border border-orange-200">🔥</div>
                             <div>
                                 <p className="font-bold text-sm text-gray-800 dark:text-gray-200">Sequência de 3 Dias</p>
                                 <p className="text-xs text-gray-500">Mantenha o ritmo!</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-3 opacity-60 grayscale">
                             <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl border border-blue-200">🧠</div>
                             <div>
                                 <p className="font-bold text-sm text-gray-800 dark:text-gray-200">Mente Brilhante</p>
                                 <p className="text-xs text-gray-500">Tire 10 na avaliação</p>
                             </div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;