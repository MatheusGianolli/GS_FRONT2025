import type { CourseData, CourseArea } from '../types/index';

// URL Base
const BASE_URL = import.meta.env.VITE_API_URL || 'https://educavrv-backendgs.onrender.com';

// --- CORREÇÃO: Tipo 'any[]' para aceitar propriedades extras como 'progress' ---
const MOCK_COURSES: any[] = [
    { 
        id: 101, 
        area: 'saude', 
        title: 'Anatomia (Modo Offline)', 
        slug: 'anatomia', 
        description: 'Módulo Offline de Anatomia...', 
        videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', 
        durationMinutes: 90, 
        difficulty: 'expert',
        progress: 0, 
        level: 1, 
        lastAccessed: '' 
    },
    { 
        id: 102, 
        area: 'educacao', 
        title: 'Pedagogia (Modo Offline)', 
        slug: 'pedagogia', 
        description: 'Módulo Offline de Pedagogia...', 
        videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', 
        durationMinutes: 60, 
        difficulty: 'beginner',
        progress: 0, 
        level: 1, 
        lastAccessed: '' 
    },
];

// --- BUSCA CURSOS (GET) ---
export async function getCourses(area: CourseArea): Promise<CourseData[]> {
    console.log(`📡 Buscando TODOS os cursos em: ${BASE_URL}/api/v1/cursos`);

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 50000); 

        const response = await fetch(`${BASE_URL}/api/v1/cursos`, {
            method: 'GET',
            // headers removidos para evitar CORS complexo
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`Status ${response.status}`);

        const allCourses = await response.json();
        
        if (!allCourses || !Array.isArray(allCourses)) {
            throw new Error("Formato inválido recebido da API");
        }

        // Filtro inteligente no Front-end
        const filteredCourses = allCourses.filter((course: any) => 
            course.area && course.area.toLowerCase() === area.toLowerCase()
        );

        if (filteredCourses.length === 0) {
             console.warn("⚠️ Banco retornou 0 cursos para essa área. Usando Mock.");
             throw new Error("Lista vazia após filtro");
        }

        return filteredCourses;

    } catch (error) {
        console.warn(`⚠️ API Real falhou ou vazia. Ativando Modo Offline.`, error);
        await new Promise(resolve => setTimeout(resolve, 500)); 
        return MOCK_COURSES.filter(c => c.area === area);
    }
}

// --- CORREÇÃO: Usando o formData no console ---
export async function sendContactForm(formData: any) {
    console.log('📤 (Simulação) Enviando contato:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return { 
        success: true, 
        message: 'Mensagem enviada com sucesso! (Simulação)' 
    };
}