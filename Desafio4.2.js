// 🔍 Desafio #4.2 — Tipagem e Paridade com Sabor de JavaScript
// Crie uma função chamada checkEvenOrOdd que receba qualquer tipo de dado como parâmetro e:
// - Verifique se é um número ou pode ser convertido para um número.
// - Se não for possível converter, exiba:
// "Erro: o valor recebido não é um número válido."
// - Se for um número válido, informe:
// "O número X é par" ou "O número X é ímpar" conforme o caso.
// 💡 Bônus: tente evitar repetição de lógica interna, usando escopo compartilhado (por exemplo, declarar let sentence fora dos blocos)

const checkEvenOrOdd = (data) => {
  if (typeof data === "number") {
    const sentence = `O número ${data}`;
    if (data % 2 === 0) {
      console.log(`${sentence} é par.`);
    } else {
      console.log(`${sentence} é ímpar.`);
    }
  } else {
    const parsedNumber = Number(data);
    if (Number.isNaN(parsedNumber)) {
      console.log("ERRO: o valor recebido não é um número válido.");
    } else {
      const sentence = `O número ${parsedNumber}`;
      if (parsedNumber % 2 === 0) {
        console.log(`${sentence} é par.`);
      } else {
        console.log(`${sentence} é ímpar.`);
      }
    }
  }
};

checkEvenOrOdd("321");
checkEvenOrOdd(-52);
checkEvenOrOdd("bug");