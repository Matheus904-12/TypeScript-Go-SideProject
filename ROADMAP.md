# 🚀 Roadmap de Construção: Resgate.io

Este roadmap foi desenhado sob a perspectiva da **Engenharia de Frontend moderna e desenvolvimento Fullstack com Go**. O básico ficou para trás. Aqui o objetivo é criar uma **aplicação bruta** focada no projeto Resgate.io (Sistema de Desastres), que nos forçará a aprender arquiteturas complexas na prática.

---

## 🎯 Fase 1: Fundação em TypeScript e Contratos (`packages/resgate-types`)
Antes de desenhar telas, nós desenhamos os **contratos e domínio da aplicação**.
- [ ] Entender a fundo `Pick`, `Omit`, `Partial`, `Record` (Refinando as interfaces do resgate: Vítimas, Inventário de Barcos).
- [ ] Criar tipos condicionais (ex: se o nível de desastre for Crítico, campos obrigatórios mudam).
- [ ] Aprender `Infer` e *Mapped types* na prática.
- [ ] Configuração do *NPM Workspaces* ligando os tipos ao Front (Linkagem de dependências internas).

---

## ⚛️ Fase 2: O Frontend "Bruto" (`apps/web`)
A aplicação que o voluntário usará precisa aguentar condições extremas.
- [ ] **Integração do pacote local:** Importar a tipagem forte do nosso próprio `packages/resgate-types`.
- [ ] **Arquitetura de Estado Limpa:** Decidir entre Zustand/React Query (Feature-Sliced Design) para separar a camada de UI da camada lógica.
- [ ] **Integração Geoespacial (Mapas):** Configurar Mapbox/Leaflet com React e renderizar as coordenadas tipadas em TypeScript.
- [ ] **Service Workers / Offline-first:** Um voluntário no meio da enchente pode ficar sem sinal. Como garantir que as requisições de resgate entrem numa fila local e sejam sincronizadas depois?
- [ ] **Testes Críticos:** Configurar Vitest. Se o front falhar ao reportar um SOS, é catastrófico. Testar validações puras (Zod).

---

## 🐹 Fase 3: Mergulho no Golang BFF (`apps/api`)
Go é o nosso motor. Você nunca mexeu em Go, então o aprendizado vai do Zero à Alta Concorrência, integrado ao Frontend.
- [ ] **O Básico de Sobrevivência no Go:** `go mod init`, Variáveis, Funções e Structs.
- [ ] **Sem Classes, Só Comportamento:** Interfaces Go (Duck Typing) lidando com os diferentes tipos de pedidos de resgate.
- [ ] **O Superpoder do Go (Concorrência):** `Goroutines` e `Channels`. Como lidar com 5.000 voluntários abrindo o aplicativo simultaneamente.
- [ ] **Criando a API REST:** Subir um servidor super leve (`net/http` nativo ou `Fiber`).
- [ ] **Conexão Real-Time:** Criar o canal de **WebSockets** em Go, de onde o React (`apps/web`) vai escutar onde estão os novos pontos de perigo e barcos resgatadores no mapa, sem dar "refresh" na página.

---

## 🛠️ Fase 4: DevOps, Deploy e Segurança
- [ ] Dockerização do backend Go (imagens ridiculamente pequenas de 15MB).
- [ ] Configuração do Docker pro Vite/Frontend.
- [ ] Prevenção pesada de Segurança e Fluxo de Autenticação JWT Seguro (*HttpOnly cookies* conectando o React ao Go).

Vamos começar dominando os contratos na **Fase 1** e subindo o primeiro Hello World do mapa na **Fase 2**!
