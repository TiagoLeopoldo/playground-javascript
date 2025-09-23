// 🧪 Desafio #2 — Tipos de Dados e Conversão
// Contexto:
// Você recebeu dados de um formulário como strings, mas precisa convertê-los e exibir uma mensagem personalizada.
// Tarefa:
// - Crie três variáveis:
// - name = "Tiago"
// - age = "28" (string!)
// - isProgrammer = "true" (também string!)
// - Converta age para número e isProgrammer para booleano.
// - Exiba no console a seguinte mensagem:
// "Tiago tem 28 anos. É programador? true"

// 🎯 Pontos importantes:
// - Use Number() para converter age
// - Use Boolean() ou uma lógica equivalente pra isProgrammer
// - A saída precisa mostrar os dados com os tipos corretos

const nameIs = "Tiago";
const age = "28";
const isProgrammer = "true"
const isProgrammerBool = isProgrammer === "true";


console.log(
  `${nameIs} tem ${Number(age)} anos. É programador? ${isProgrammerBool}`
);


