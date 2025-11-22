// src/types/integrante.ts

// Critério 1.II.a (Tipos básicos) e 1.II.c (Interface)
export interface Integrante {
  nome: string;
  rm: number;
  turma: string;
  fotoUrl?: string; // '?' torna opcional
}

// Critério 1.II.b (Union Types)
export type StatusProjeto = 'ativo' | 'inativo' | 'concluido';

// Critério 1.II.b (Intersection Types)
type DadosBase = {
  id: number;
};

export type IntegranteComId = Integrante & DadosBase;