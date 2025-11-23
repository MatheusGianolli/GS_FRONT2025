# 🎓 Global Solution 2025 | Saúde & Educação Gamificada

![Status]
![Version]
![License]

> Uma plataforma SPA (Single Page Application) inovadora que une as áreas de Saúde e Educação através de uma experiência de aprendizado gamificada e imersiva.

---

links:
Youtube:https://www.youtube.com/watch?si=VJGXl1wZuLfQPK_D&v=3BdkVjLQbe0&feature=youtu.be
deploy Vercel:gs-front-2025-fwh3.vercel.app
Link Github :https://github.com/MatheusGianolli/GS_FRONT2025.git
## 📑 Sumário

1. [Título e Descrição](#-título-e-descrição)
2. [Status do Projeto](#-status-do-projeto)
3. [Sobre o Projeto](#-sobre-o-projeto)
4. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
5. [Instalação](#-instalação)
6. [Como Usar](#-como-usar)
7. [Estrutura de Pastas](#-estrutura-de-pastas)
8. [Endpoints e Rotas](#-endpoints-ou-rotas-principais)
9. [Autores e Créditos](#-autores-e-créditos)
10. [Screenshots](#-screenshots--demonstração)
11. [Contato](#-contato)

---

## 📝 Título e Descrição

**GS HealthEdu Platform** é uma solução full-stack desenvolvida para democratizar o acesso a conteúdos complexos de Medicina e Pedagogia. Diferente de plataformas tradicionais, utilizamos **Gamificação** (XP, Níveis, Conquistas) para engajar o usuário.

O projeto consiste em um Front-end moderno e responsivo (Mobile First) integrado a uma API RESTful robusta em Java, garantindo persistência de dados e escalabilidade.

---

## 🚀 Status do Projeto

✅ **Sprint Finalizada**: O projeto encontra-se completo, com integração Back-end/Front-end funcional, deploy realizado e atendendo a todos os requisitos da Global Solution.

---

## 🌟 Sobre o Projeto

A missão deste projeto é fornecer uma plataforma de aprendizado coesa, responsiva e acessível.

### Diferenciais
* **Arquitetura Híbrida:** Front-end preparado para funcionar online (API Java) e com fallback para modo offline (Mock) em caso de falha de rede.
* **Gamificação:** Sistema visual de progresso, níveis e badges para motivar o aluno.
* **Acessibilidade:** Suporte nativo a **Tema Claro e Escuro** (Dark Mode).
* **Performance:** SPA construída com Vite para carregamento instantâneo.

---

## 🛠 Tecnologias Utilizadas

### Front-End (Client)
* ![React](**React 18**: Biblioteca principal de UI.
* ![TypeScript]( **TypeScript**: Tipagem estática para segurança do código.
* ![Vite]( **Vite**: Build tool de alta performance.
* ![TailwindCSS] **Tailwind CSS**: Estilização utilitária e responsiva.

### Back-End (Server)
* ![Java] **Java 17+**: Linguagem do servidor.
* ![Quarkus] **Quarkus**: Framework Supersonic Subatomic Java.
* **Maven**: Gerenciador de dependências.

### Deploy & Ferramentas
* **Vercel**: Hospedagem do Front-end.
* **Render**: Hospedagem da API Java e Banco de Dados.
* **Git/GitHub**: Versionamento com GitFlow.

---

## 💻 Instalação

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos
* Node.js (v18+)
* Java JDK (17+)
* Git

### Passo a Passo (Front-End)

```bash
# 1. Clone o repositório
git clone [https://github.com/SEU-USUARIO/NOME-DO-REPO.git](https://github.com/SEU-USUARIO/NOME-DO-REPO.git)

# 2. Entre na pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz e adicione:
# VITE_API_URL=[https://educavrv-backendgs.onrender.com](https://educavrv-backendgs.onrender.com)


Estrutura de Pastas
A arquitetura do Front-end segue o padrão modular:

src/
├── components/       # Componentes reutilizáveis (Navbar, Footer, Cards)
├── contexts/         # Gerenciamento de estado global (ThemeContext)
├── pages/            # Páginas da aplicação (Home, About, CourseDetails)
├── routes/           # Lógica de roteamento manual (SPA)
├── services/         # Comunicação com API (api.ts)
├── types/            # Interfaces TypeScript e Tipagem
├── App.tsx           # Componente Raiz
└── main.tsx          # Ponto de entrada



Rota,Descrição
/,Dashboard Principal
/educacao,Listagem de cursos da área de Educação
/saude,Listagem de cursos da área de Saúde
/curso/:area/:slug,"Página de detalhes do curso (Player, Ementa)"
/contato,Formulário de envio de mensagens


Método,Endpoint,Descrição
GET,/api/v1/cursos,Retorna lista completa de cursos
POST,/api/v1/usuarios/cadastro,Cria novo usuário
POST,/api/v1/usuarios/login,Autenticação

# 5. Rode o projeto
npm run dev
