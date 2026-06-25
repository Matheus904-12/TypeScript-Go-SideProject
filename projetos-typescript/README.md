# ⚛️ Projetos TypeScript & Frontend Avançado

Bem-vindo ao laboratório de Engenharia Frontend. 

Aqui nós **não** estamos aprendendo o que é uma `const`, um `Array.map` ou como centralizar uma `div` com Flexbox. O foco aqui é elevar a régua do seu desenvolvimento, aplicando conceitos de nível Pleno/Sênior na prática.

## 🗺️ Foco dos Experimentos

Utilize esta pasta para prototipar, quebrar coisas e testar conceitos sem o peso de quebrar a aplicação da empresa:

1. **Manipulação de Tipos Ninja:** 
   - Scripts puros testando `Generics`, `Utility Types` (`Pick`, `Omit`, `ReturnType`), Tipos Condicionais e Mapeados.
   - Criando tipagens fortes para dados de API (`Infer` de contratos lógicos).

2. **Arquitetura de Projetos (Microfrontends / Monorepos):**
   - Configurar projetos usando ferramentas modernas (Vite, Turborepo).
   - Testar separação de código entre estado global, cache de server e a interface de usuário (*Clean Architecture / Feature-sliced design*).

3. **Performance e Re-renders:**
   - Montar um pequeno dashboard React para forçar o limite de renderização e usar `React.memo`, `useMemo`, ou estratégias sem dependência do VDOM.
   - Investigar e aplicar as métricas de Core Web Vitals (INP, LCP, CLS).

4. **Integração com o Go:**
   - Criar clients em TypeScript fortes e tipados que se conectam com a API WebSockets e REST que você construirá na pasta `projetos-go`.

## 🛠️ Ferramentas Sugeridas para este Diretório

- **Runtime e Ferramentas:** `Node.js` (ou `Bun`/`Deno`), `Vite` e `Next.js`.
- **Testes:** `Vitest` para testes unitários, e `Playwright` para End-to-End.
- **Bibliotecas-chave:** `Zustand` (ou Jotai), `TanStack Query` (React Query) e bibliotecas avançadas de formulários (`React Hook Form` com `Zod`).

> Crie subpastas para cada laboratório que for realizar. Por exemplo: `/ts-tipagens-condicionais`, `/react-performance-lab`, etc.
