// Tipos de Domínio
export type CourseArea = 'saude' | 'educacao'; // Union Type
export type Difficulty = 'beginner' | 'intermediate' | 'expert';

export interface CourseData { // Interface
  id: number;
  area: CourseArea;
  title: string;
  slug: string;
  description: string;
  videoUrl: string;
  durationMinutes: number; // number
  difficulty: Difficulty;
}

export type UserCourseProgress = CourseData & { // Intersection Type
  progress: number;
  level: number;
  lastAccessed: string; // string
};

// Tipos da API
export interface ApiResponse<T> {
  success: boolean; // boolean
  message: string;
  data: T; // object
  statusCode: number; // number
}