import React, { useState } from 'react';

const faqs = [
  {
    question: "🚀 Como funciona o sistema de Gamificação (XP)?",
    answer: "É simples! Cada vídeo assistido e exercício concluído gera pontos de experiência (XP). Ao acumular XP, você sobe de nível no seu 'Passe de Batalha' educacional, desbloqueando novas trilhas de conhecimento e conquistando insígnias exclusivas no seu perfil."
  },
  {
    question: "📚 O conteúdo cobre quais áreas exatamente?",
    answer: "Nossa plataforma é híbrida e foca na interseção entre Saúde e Educação. Temos módulos técnicos de Medicina/Enfermagem (Anatomia, Fisiologia) e módulos pedagógicos, preparando profissionais para atuarem com excelência técnica e didática."
  },
  {
    question: "💻 A plataforma salva meu progresso automaticamente?",
    answer: "Sim! Graças à nossa integração com a API Java (Backend), todo o seu progresso, notas e conquistas são salvos na nuvem em tempo real. Você pode começar a estudar no computador e continuar no celular de onde parou."
  },
  {
    question: "🎓 Eu recebo certificado ao concluir um curso?",
    answer: "Com certeza. Ao completar 100% de uma trilha e passar na avaliação final (que exige nota mínima de 70%), um certificado digital verificado é gerado automaticamente, pronto para ser compartilhado no LinkedIn."
  },
  {
    question: "🔧 Quais tecnologias foram usadas neste projeto?",
    answer: "Este projeto é uma Single Page Application (SPA) construída com React, Vite e TypeScript para o Front-end, estilizada com Tailwind CSS. O Back-end utiliza Java com arquitetura DDD (Domain-Driven Design) para gerenciar os dados."
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fecha o item clicado
    } else {
      setOpenIndex(index); // Abre o novo item
    }
  };

  return (
    <main className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-indigo-700 dark:text-indigo-400">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Tire suas dúvidas sobre a metodologia e a tecnologia da nossa plataforma.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Botão da Pergunta */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left py-5 px-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none transition-colors"
              >
                <span className="font-bold text-lg text-gray-800 dark:text-gray-200">
                    {faq.question}
                </span>
                {/* Ícone de Seta */}
                <span className={`transform transition-transform duration-300 text-indigo-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>

              {/* Resposta com Animação */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;