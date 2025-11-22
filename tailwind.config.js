/** @type {import('tailwindcss').Config} */
export default {
  // 1. Diz ao Tailwind ONDE encontrar suas classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Lê todos os arquivos necessários dentro de src
  ],

  // 2. É aqui que customizamos o DESIGN do projeto
  theme: {
    extend: {
      // Adicionamos uma paleta de cores customizada para o projeto HC
      colors: {
        'hc-blue': {
          light: '#3b82f6', // Azul claro
          DEFAULT: '#2563eb', // Azul principal
          dark: '#1d4ed8',  // Azul escuro
        },
        'hc-green': {
          light: '#22c55e',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
      },
      // Definimos uma fonte padrão para todo o site
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      // Opcional: Centraliza o container principal por padrão
      container: {
        center: true,
        padding: '1rem', // Adiciona um espaçamento nas laterais
      },
    },
  },

  // 3. Lugar para adicionar plugins do Tailwind (não precisamos de nenhum agora)
  plugins: [],
}