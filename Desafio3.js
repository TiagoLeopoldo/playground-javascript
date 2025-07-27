// 🧪 Desafio #3 – Fundamentos.

// 🧠 Enunciado:
// Crie uma função chamada somaComLog que recebe dois parâmetros numéricos. A função deve calcular a soma dos dois valores e exibir no console a seguinte frase:
// A soma de X + Y é igual a Z


// Substitua X, Y e Z pelos valores reais recebidos e calculados.
// ⚠️ Use template literals (${}) e manipule os tipos corretamente caso receba números como strings.


const X = 10;
const Y = "123";

const somaComLog = (num1, num2) => {
  let Z = Number(num1) + Number(num2); 
  return `A soma de ${num1} + ${num2} é igual a ${Z}`;
};

console.log(somaComLog(X, Y));