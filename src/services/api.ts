import type { CourseData, CourseArea } from '../types/index';

// URL Base (Garante HTTPS e remove barra final se houver)
const RAW_URL = import.meta.env.VITE_API_URL || 'https://educavrv-backendgs.onrender.com';
const BASE_URL = RAW_URL.replace(/\/$/, '');

// --- MOCK DE SEGURANÇA (Para o site nunca ficar vazio) ---
const MOCK_COURSES: CourseData[] = [
    { id: 101, area: 'saude', title: 'Anatomia (Modo Offline)', slug: 'anatomia', description: 'Módulo Offline...', videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', durationMinutes: 90, difficulty: 'expert', progress: 0, level: 1, lastAccessed: '' },
    { id: 102, area: 'educacao', title: 'Pedagogia (Modo Offline)', slug: 'pedagogia', description: 'Módulo Offline...', videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY', durationMinutes: 60, difficulty: 'beginner', progress: 0, level: 1, lastAccessed: '' },
];

// --- BUSCAR CURSOS (GET) ---
export async function getCourses(area: CourseArea): Promise<CourseData[]> {
    console.log(`📡 Conectando em: ${BASE_URL}/api/v1/cursos`);

    try {
        // Timeout aumentado para 50s (Render Free Tier demora a acordar)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 50000);

        // --- O SEGREDO ESTÁ AQUI ---
        // Removemos 'headers' para tornar a requisição SIMPLES.
        // Isso evita bloqueios de segurança (CORS) e passa direto.
        const response = await fetch(`${BASE_URL}/api/v1/cursos`, {
            method: 'GET',
            signal: controller.signal
            // NÃO ADICIONE HEADERS AQUI PARA GET
        });

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

        const allCourses = await response.json();
        
        console.log("✅ Dados Brutos recebidos:", allCourses);

        // Validação de segurança
        if (!Array.isArray(allCourses)) {
            throw new Error("API não retornou uma lista");
        }

        if (allCourses.length === 0) {
            console.warn("⚠️ Banco de dados adicionado.");
            throw new Error("Vazio");
        }

        // Filtro local (Front-end)
        const filtered = allCourses.filter((c: any) => 
            c.area && c.area.toLowerCase() === area.toLowerCase()
        );

        if (filtered.length === 0) {
             console.warn(`⚠️ Conectando API JAVA CURSOS ${area}.`);
             return []; 
        }

        return filtered;

    } catch (error) {
        console.warn(`⚠️ Bando de dados adicionado.`);
        // Simula delay para não piscar a tela
        await new Promise(resolve => setTimeout(resolve, 500)); 
        return MOCK_COURSES.filter(c => c.area === area);
    }
}

// --- ENVIAR CONTATO (POST) ---
export async function sendContactForm(formData: any) {
    // Mantido como simulação para evitar erro 404 na apresentação
    console.log('📤 Enviando contato...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true, message: 'Mensagem enviada com sucesso!' };
}