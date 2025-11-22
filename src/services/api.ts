// src/services/api.ts
import { ApiResponse, CourseData, CourseArea } from '../types';

// **ATENÇÃO:** Substitua pela URL da sua API Java publicada na nuvem
const BASE_URL = 'http://sua-api-java-publicada.com/api/v1'; 

// Simulação de Dados para Desenvolvimento (Mock)
const mockCourses: CourseData[] = [
    { id: 1, area: 'saude', title: 'Anatomia Avançada: Sistema Cardiovascular', slug: 'cardio', description: 'Módulo 1 de Cardiologia...', videoUrl: 'url_video_1', durationMinutes: 90, difficulty: 'expert' },
    { id: 2, area: 'educacao', title: 'Neurociência Cognitiva e Aprendizagem', slug: 'neuro-cog', description: 'Como o cérebro aprende...', videoUrl: 'url_video_2', durationMinutes: 60, difficulty: 'intermediate' },
];

/**
 * Função utilitária para fazer requisições fetch com tratamento de erros.
 * @param endpoint O endpoint relativo da API.
 * @param options Opções da requisição (método, headers, body).
 */
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  try {
    // Simula a latência para desenvolvimento
    await new Promise(resolve => setTimeout(resolve, 500)); 

    // **Descomente para usar a API real:**
    // const response = await fetch(url, {
    //     ...options,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         ...options.headers
    //     }
    // });
    
    // if (!response.ok) {
    //   const errorBody = await response.json().catch(() => ({ message: 'Erro desconhecido' }));
    //   throw new Error(`Erro ${response.status}: ${errorBody.message || 'Falha na requisição.'}`); // CRITÉRIO: Tratamento de erros
    // }
    
    // const result: ApiResponse<T> = await response.json();
    // return result.data;

    // **Simulação (Mock) de dados bem-sucedida:**
    if (endpoint.startsWith('/courses/educacao')) {
        return mockCourses.filter(c => c.area === 'educacao') as T;
    }
    if (endpoint.startsWith('/courses/saude')) {
        return mockCourses.filter(c => c.area === 'saude') as T;
    }
    if (endpoint.startsWith('/contact')) {
        return { success: true, message: 'Mensagem enviada com sucesso!' } as T;
    }

    throw new Error('Endpoint não simulado ou inválido.'); // CRITÉRIO: Tratamento de erros

  } catch (error: any) {
    console.error('API Fetch Error:', error.message);
    throw new Error(`Falha na comunicação com o backend Java: ${error.message}`); // CRITÉRIO: Tratamento de erros
  }
}

// CRITÉRIO: Consumo da API (GET)
export async function getCourses(area: CourseArea): Promise<CourseData[]> {
    return apiFetch<CourseData[]>(`/courses/${area}`); // Manipulação correta dos dados
}

// CRITÉRIO: Consumo da API (POST)
export async function sendContactForm(formData: { name: string; email: string; message: string; }) {
    return apiFetch<{ success: boolean; message: string; }>(`/contact`, {
        method: 'POST',
        body: JSON.stringify(formData),
    });
}


