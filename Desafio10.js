// 💰 Desafio #10 — Formatador de Preços com .map()

// Crie uma função chamada formatPrices que:
// - Receba um array de números representando preços.
// - Use o método .map() para formatar cada número como string de moeda brasileira, no estilo R$00.00.

// 📝 Regras da função:
// - Deve preservar o array original e retornar um novo array.
// - Os valores formatados devem conter duas casas decimais, usando .toFixed(2).
// - Cada valor formatado deve iniciar com o prefixo "R$" — exemplo: "R$5.50".
// - Pode assumir que todos os itens do array são números válidos.

// 💡 Exemplo:
// const precos = [10, 5.5, 20.99];
// formatPrices(precos);
// // Retorno esperado: ["R$10.00", "R$5.50", "R$20.99"]

// 🧠 Dica ninja:
// Você pode unir "R$" com a string do número formatado usando toFixed(2) e template string ou concatenação simples.
// O importante é que o .map() cuide de tudo sem precisar de um for explícito.

const prices = [10, 5.5, 20.99];

const formatPrices = (prices) => {
  return prices.map((price) => "R$" + price.toFixed(2));
};

console.log(formatPrices(prices));
