// 🔍 Desafio 6.0 — Transformação com .map()
// Você receberá um array de nomes em caixa alta (tipo gritaria: "TIAGO", "ANA", "MARCOS").
// O objetivo é devolver um novo array com os nomes em caixa baixa e capitalizados, como "Tiago", "Ana", "Marcos".

// ✅ Requisitos:
// - Usar .map() para iterar sobre o array.
// - Transformar cada nome em:
// - Primeira letra maiúscula
// - O resto em minúsculas
// - Sem alterar o array original.
// - Devolver array transformado com return ou console.log() claro.

// 💡 Exemplo:
// const nomes = ["TIAGO", "ANA", "MARCOS"];
// // resultado desejado: ["Tiago", "Ana", "Marcos"]

const names = ["TIAGO", "ANA", "MARCOS"];

const adjustNames = (array) => {
  return array.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
};

console.log(adjustNames(names));
