// 🧪Desafio #4.1 – Fundamentos? Esse aqui vai afiar ainda mais sua lógica com tipos e operadores.

// 🧠 Enunciado:
// Crie uma função chamada isEvenNumber que recebe um valor e verifica se ele é um número par.
// - A função deve retornar uma mensagem informando se o número é par ou ímpar.
// - Deve fazer validação de tipo: se o valor não for um número válido, retorne uma mensagem de erro.
// - Use operadores aritméticos e condição if.

// 💡 Exemplos esperados:
// isEvenNumber(4);      // "O número 4 é par"
// isEvenNumber(7);      // "O número 7 é ímpar"
// isEvenNumber("abc");  // "Valor inválido: não é um número"

// 📎 Dicas úteis:
// - Use typeof pra verificar se é número.
// - Number.isNaN() pode ajudar se você for converter string numérica.
// - % (módulo) é seu aliado pra checar paridade.

const isEvenNumber = (num) => {
  if (typeof num === "number") {
    const sentence = `O número ${num}`;
    if (num % 2 === 0) {
      console.log(`${sentence} é par`);
    } else {
      console.log(`${sentence} é ímpar`);
    }
  } else {
    const parsedNumber = Number(num);
    if (Number.isNaN(parsedNumber)) {
      console.log("Valor inválido: não é um número.");
    } else {
      const sentence = `O número ${parsedNumber}`;
      if (parsedNumber % 2 === 0) {
        console.log(`${sentence} é par`);
      } else {
        console.log(`${sentence} é ímpar`);
      }
    }
  }
};

isEvenNumber(4);
isEvenNumber("7");
isEvenNumber("abc");
