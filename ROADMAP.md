# 🚀 Roadmap de Estudos: Engenheiro de Frontend (Pleno) + Fullstack (Go/TS)

Bem-vindo ao seu **Centro de Estudos**. Como você já possui uma base sólida e não precisa rever o básico (HTML, CSS e JavaScript puro), este roadmap foi desenhado sob a perspectiva da **Engenharia de Frontend moderna e desenvolvimento Fullstack com Go**. 

Nosso objetivo aqui é **praticar de forma didática**, elevando o nível para arquiteturas mais robustas, performance, escalabilidade e integração de sistemas.

---

## 🎯 Fase 1: Domínio do TypeScript (Além do Básico)
Como engenheiro pleno, o TypeScript deixa de ser apenas "tipagem estática" e passa a ser uma ferramenta de **design de software**.

- [ ] **Type Manipulation & Utility Types**
  - Entender a fundo `Pick`, `Omit`, `Partial`, `Record`, `ReturnType`, `Parameters`.
  - Criar tipos utilitários customizados.
- [ ] **Generics Avançados**
  - Tipos condicionais (`extends ? :`).
  - *Mapped types* (`[K in keyof T]`).
  - *Template Literal Types*.
- [ ] **Design Patterns em TS**
  - SOLID aplicado ao Frontend com TS.
  - Padrões de Criação (Builder, Factory) e Comportamentais (Observer, Strategy).
- [ ] **Configurações de Compilador (`tsconfig.json`)**
  - Entender o impacto de `strict`, `noImplicitAny`, `target`, `moduleResolution`.
  - Diferenças entre emissão de módulos (CommonJS vs ESModules).

---

## ⚛️ Fase 2: Engenharia de Frontend (Ecossistema e Arquitetura)
Aqui focamos nas decisões que diferenciam um júnior de um pleno/sênior.

- [ ] **Arquitetura de Aplicações e Estado**
  - Padrões de arquitetura (Clean Architecture, Feature-Sliced Design).
  - Gerenciamento de estado de servidor (Server-state: *TanStack Query/React Query*, *SWR*) vs estado local (Client-state: *Zustand*, *Jotai*, *Redux Toolkit*).
- [ ] **Performance e Otimização**
  - Core Web Vitals (LCP, INP, CLS).
  - Renderização: CSR vs SSR vs SSG vs ISR (ex: usando Next.js ou Remix).
  - Code Splitting, Lazy Loading, Tree Shaking, e otimização de bundle (Vite/Webpack/Turbopack).
- [ ] **Qualidade de Código e Testes**
  - Testes Unitários e de Integração (*Vitest*, *Jest*, *Testing Library*).
  - Testes E2E (End-to-End) (*Playwright* ou *Cypress*).
  - Configuração rigorosa de Linting e formatação (*ESLint*, *Prettier*, *Husky* & *Lint-staged*).
- [ ] **Segurança no Frontend**
  - Prevenção de XSS, CSRF.
  - Content Security Policy (CSP).
  - Fluxos de Autenticação (JWT, OAuth2, Session Cookies `HttpOnly`).

---

## 🐹 Fase 3: Mergulho no Golang (Backend for Frontend / Microserviços)
Go é excepcional para construir backends performáticos, serviços concorrentes e utilitários de infraestrutura. Será nosso motor por trás do frontend.

- [ ] **Fundamentos da Linguagem Go**
  - Sintaxe, Pointers, Structs, e Interfaces (Duck Typing).
  - Tratamento de erros ideomático em Go.
- [ ] **Concorrência (O Superpoder do Go)**
  - *Goroutines*, *Channels* (Buffered e Unbuffered).
  - Padrões de concorrência: *Worker Pools*, *Fan-in/Fan-out*, uso do pacote `sync` (`Mutex`, `WaitGroup`).
- [ ] **Construindo APIs e Serviços Web**
  - Roteamento nativo (`net/http`) vs Frameworks/Routers (`Chi`, `Fiber`, `Gin`).
  - Criação de Middlewares (Logging, Auth, Rate Limiting).
  - Integração com Bancos de Dados (PostgreSQL + `sqlc` ou `pgx`, GORM).
- [ ] **Comunicação Avançada**
  - Construindo APIs RESTFul consistentes.
  - gRPC e Protocol Buffers (Comunicação de baixa latência).
  - WebSockets para comunicação em tempo real com o Frontend.

---

## 🛠️ Fase 4: Projetos Práticos (Aprendizado Aplicado)
A teoria só se solidifica na prática. Vamos usar este repositório para construir os seguintes projetos:

### Projeto 1: CLI de Produtividade do Desenvolvedor (Foco: Go puro + TS)
- **Go:** Um utilitário de linha de comando para scaffold de projetos, automação de tarefas ou análise de arquivos locais.
- **TS:** Um script de integração que consome essa CLI no ecossistema Node/Deno/Bun.
- **Objetivo:** Dominar sintaxe, arquivos de sistema e manipulação de fluxos sem depender de frameworks web pesados.

### Projeto 2: Dashboard Real-time de Monitoramento (Foco: Concorrência Go + Performance Frontend)
- **Backend (Go):** Um serviço que simula/consome métricas de servidores e envia streams de dados concorrentemente via WebSockets/Server-Sent Events (SSE).
- **Frontend (TS/React/Vue):** Um painel que renderiza gráficos pesados sem travar a thread principal, aplicando técnicas avançadas de renderização e memorização.
- **Objetivo:** Praticar goroutines/channels no Go e otimização de re-render (INP) no frontend.

### Projeto 3: E-commerce "Backend for Frontend" (BFF) Pattern (Foco: Arquitetura Completa)
- **Microserviço (Go):** Um serviço de autenticação e manipulação de carrinho de compras usando um banco relacional (PostgreSQL) e cache (Redis).
- **Frontend (TS/Next.js):** Aplicação completa com Server-Side Rendering (SSR) e Static Site Generation (SSG) para SEO.
- **Integração:** Autenticação segura via cookies, cache invalidation, e testes E2E com Playwright em todo o fluxo.
- **Objetivo:** Experiência real de arquitetura de software end-to-end simulando desafios do mundo corporativo.

---

## 📋 Como usaremos este repositório?
1. **Pastas por domínios:** Criaremos diretórios estruturados (ex: `packages/frontend`, `services/backend-go`, `libs/ts-utils`).
2. **Issues/Tarefas:** A cada etapa, podemos definir um mini-requisito e fazer "Pair Programming" simulando sprints.
3. **Revisão de Código (Code Review):** Você escreve, eu analiso focando em clean code, tipagem rígida e performance; ou vice-versa.

Está pronto para começarmos a sujar as mãos? Recomendo iniciarmos configurando a estrutura inicial deste repositório (ex: um monorepo) ou escolhendo o **Projeto 1** ou algum tópico específico da **Fase 1** para mergulharmos!
