# 🚀 TypeScript & Go: Centro de Estudos (Nível Pleno)

Bem-vindo ao seu laboratório de Engenharia de Software! Este repositório é o seu "playground" seguro para praticar, errar, e evoluir.

O foco aqui é duplo:
1. **Engenharia de Frontend & TypeScript:** Elevar o nível de conhecimento, utilizando padrões de projeto, tipagem estrita e arquiteturas avançadas no lado cliente.
2. **Backend for Frontend com Golang:** Construir serviços robustos, concorrentes e ultra performáticos usando a linguagem Go.

---

## 📂 Estrutura do Repositório

Para manter o aprendizado organizado, o repositório está dividido em dois mundos que, eventualmente, se conectarão:

- 🗂️ **[`/projetos-typescript`](./projetos-typescript/)**: Onde a mágica do Frontend e da tipagem avançada acontece.
- 🗂️ **[`/projetos-go`](./projetos-go/)**: Nosso laboratório de Backend. Se você **nunca tocou em Go**, não se preocupe! Aqui vamos do `Hello World` até microsserviços rodando concorrentemente.

> 📄 **Veja o [ROADMAP.md](./ROADMAP.md)** para acompanhar sua trilha e marcar os conhecimentos já absorvidos.

---

## 🐹 Primeira vez com Golang? (Guia de Sobrevivência Rápido)

Como você é de Front/TS e vai aprender Go do zero, aqui estão as regras de ouro para entender o Go mais rápido:

1. **Esqueça Classes:** Go não tem herança nem `class`. Usamos `structs` (que são como interfaces/objetos do TS) e `interfaces` baseadas em comportamento (Duck Typing).
2. **Erros são valores:** No TypeScript fazemos muito `try/catch`. No Go, a função retorna o erro, e a gente checa imediatamente: `if err != nil`.
3. **Ponteiros (\*) e Endereços (&):** Go usa ponteiros para compartilhar memória (referência) em vez de copiar valores.
4. **O Superpoder:** Esqueça o `Promise.all` ou `setTimeout`. Em Go, usamos a palavra `go func()` (Goroutines) para rodar processos paralelos de forma absurdamente leve e comunicamos os dados via `channels`.

### 🛠️ Configurando o Go no seu Linux
Se ainda não tiver o Go instalado:
1. Baixe o Go [neste link oficial](https://go.dev/doc/install) ou use seu gerenciador de pacotes (ex: `sudo apt install golang` ou equivalente).
2. Para inicializar um projeto Go, sempre rodamos: `go mod init nome-do-projeto`. Isso cria o equivalente ao `package.json` no mundo Go (`go.mod`).

---

## ⚛️ TypeScript & Frontend Avançado

Na pasta `projetos-typescript`, nosso foco será:
- **Design Patterns:** Usar TS de forma limpa.
- **Ferramental:** Vite, Next.js ou Remix, testes com Vitest/Playwright.
- **Performance:** Evitar re-renders desnecessários e otimizar bundle size.

---

## 💡 Como iniciar sua rotina de estudos

1. Abra a pasta correspondente (Go ou TS).
2. Comece um mini-projeto. Se for Go, foque em sintaxe básica primeiro (variáveis, loops, funções, structs).
3. Faça commits pequenos para ver seu progresso ao longo do tempo.
4. Use este repositório como material de consulta quando estiver trabalhando em projetos reais.

**Bons estudos! A ponte entre o Frontend Pleno e o Engenheiro de Software Fullstack começa aqui.**
