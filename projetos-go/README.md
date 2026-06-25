# 🐹 Projetos Golang

Bem-vindo ao seu primeiro laboratório de Go!

Se você nunca tocou na linguagem antes, a regra aqui é **ir devagar e entender os fundamentos**. Go tem uma sintaxe muito minimalista (existem apenas cerca de 25 palavras reservadas na linguagem), o que a torna fácil de aprender, mas difícil de dominar completamente logo de cara.

## 🗺️ Por onde começar?

Sugerimos que o seu progresso siga estes mini-projetos ou scripts:

1. **`01-hello-world`**: Entender como o Go inicializa (`main.go`), como imprimir na tela (`fmt.Println`) e como rodar o código (`go run`).
2. **`02-tipos-e-variaveis`**: Compreender como declarar variáveis (`:=`), os tipos primitivos e os ponteiros (`*`, `&`).
3. **`03-fluxo-e-loops`**: Usar `if`, `switch` (que não precisa de `break` em Go!) e o único loop da linguagem: o `for`.
4. **`04-arrays-slices-maps`**: Entender a diferença entre Arrays estáticos e Slices (arrays dinâmicos, muito usados) e Maps (como os objetos do JS/dicionários).
5. **`05-structs-e-interfaces`**: Como modelar seus dados (já que Go não tem classes).
6. **`06-tratamento-de-erros`**: Como lidar com `err != nil`.
7. **`07-goroutines-channels`**: Quando se sentir confortável, este é o momento de aprender concorrência.

## 🛠️ Comandos úteis para o dia a dia

- `go mod init <nome>`: Inicializa o gerenciador de pacotes na pasta atual (cria o `go.mod`).
- `go run main.go`: Compila na memória e executa o código instantaneamente.
- `go build`: Compila o seu código gerando um binário executável super leve.
- `go get <pacote>`: Baixa uma dependência (equivalente ao `npm install`).
- `go fmt ./...`: Formata automaticamente todo o seu código Go para os padrões da linguagem (equivalente ao Prettier).

> Sinta-se livre para criar pastas numeradas (`01-...`, `02-...`) dentro deste diretório conforme for praticando cada conceito!
