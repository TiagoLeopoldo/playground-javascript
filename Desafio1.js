// 🧪 Desafio #1 — Variáveis e Tipos
// Contexto:
// Você está criando um pequeno programa para armazenar informações de um livro.
// Tarefa:
// Crie três variáveis usando let ou const e atribua os seguintes valores:
// - O título do livro (ex: "O Hobbit")
// - O número de páginas (ex: 310)
// - Um valor booleano indicando se você já leu o livro (ex: true ou false)

// Depois, use console.log() para exibir uma frase como:
// "O livro O Hobbit tem 310 páginas. Já foi lido? true"

const book = "O Hobbit";
const pages = 310;
const read = false;

if (read === false) {
  let response = "Não";
  console.log(`O livro ${book} tem ${pages} páginas. Já foi lido? ${response}`);
} else {
  let response = "Sim";
  console.log(`O livro ${book} tem ${pages} páginas. Já foi lido? ${response}`);
};




