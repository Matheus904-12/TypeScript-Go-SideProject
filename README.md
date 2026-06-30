# 🚁 Resgate.io - Monorepo (TS + Go)

Bem-vindo ao **Resgate.io**, o seu laboratório de Engenharia de Software. Aqui estamos construindo uma aplicação real e "bruta": um **Sistema de Coordenação de Desastres e Doações**, inspirado em desafios logísticos de tragédias (como enchentes e queimadas).

O projeto é focado em alta concorrência (Go), tipagem rigorosa (TS) e interface de usuário com suporte offline e tempo real (Frontend Web).

---

## 📂 Arquitetura do Monorepo

Diferente de projetos básicos, adotamos a arquitetura de *Monorepo* com `npm workspaces` para gerenciar tudo de um único lugar, compartilhando código e tipagens nativamente.

- 📦 **[`packages/resgate-types`](./packages/resgate-types/)**: Biblioteca "Hardcore" puramente em TypeScript. Nela moram todas as interfaces, *Utility Types* e contratos da aplicação. Ela é consumida pelos outros projetos.
- ⚛️ **[`apps/web`](./apps/web/)**: Nossa aplicação Frontend (React + Vite + TypeScript). Focada em performance, uso de Mapas, Service Workers (Offline-first) e Websockets.
- 🐹 **[`apps/api`](./apps/api/)**: (*Em breve*) O motor do sistema em Golang. Focado em processamento geoespacial, filas, microsserviços e milhares de conexões simultâneas via WebSockets.

---

## 🚀 Como Iniciar

1. **Instalando as dependências globais (Workspaces):**
   Na raiz do projeto (nesta pasta), rode:
   ```bash
   npm install
   ```
   *O npm já criará os links simbólicos (symlinks) de `packages/resgate-types` para que o Frontend consiga acessá-lo.*

2. **Rodando o Frontend Web:**
   ```bash
   cd apps/web
   npm run dev
   ```

3. **Criando Tipagens (TypeScript Hardcore):**
   Qualquer contrato, como `interface Volunteer` ou tipagens condicionais complexas, deve ser criado em `packages/resgate-types/src/index.ts`. O frontend usará essas tipagens importando o pacote interno `@resgate/types`.

---

> 📄 **Acompanhe a sua evolução técnica através do [ROADMAP.md](./ROADMAP.md)**. Ele dita os próximos passos lógicos e técnicos da construção.
