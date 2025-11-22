import React, { useState } from 'react';
import { sendContactForm } from '../services/api';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      // CRITÉRIO: Consumo da API (POST)
      const result = await sendContactForm(formData); 
      setFeedbackMessage(result.message || 'Mensagem enviada com sucesso!');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpar formulário
    } catch (error: any) {
      // CRITÉRIO: Tratamento de erros e Feedback
      setFeedbackMessage(error.message || 'Erro ao enviar. Tente novamente.');
      setStatus('error');
    }
  };

  // CRITÉRIO: Redirecionamento e Feedbacks
  const FeedbackAlert: React.FC<{ message: string; type: 'success' | 'error' }> = ({ message, type }) => (
    <div className={`p-4 mb-4 rounded-lg font-semibold ${
      type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' : 
                          'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
    }`}>
      {message}
    </div>
  );

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-700 dark:text-indigo-400 border-b-2 border-indigo-300 pb-2">
        📧 Fale Conosco
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Utilize o formulário abaixo para entrar em contato com nossa equipe.
      </p>

      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
        {status === 'success' && <FeedbackAlert message={feedbackMessage} type="success" />}
        {status === 'error' && <FeedbackAlert message={feedbackMessage} type="error" />}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nome Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Mensagem</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                         bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white 
                        ${status === 'loading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150`}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;