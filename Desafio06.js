/**
 * 🔍 Desafio 6 — Contador Regressivo com Feedback Visual
 *
 * Você receberá um número inicial e deverá criar uma contagem regressiva
 * que mostre mensagens diferentes para números pares e ímpares.
 *
 * ✅ Requisitos:
 * - Usar loop for com decremento
 * - Mostrar "🔴 [número] - ÍMPAR" para números ímpares
 * - Mostrar "🔵 [número] - PAR" para números pares
 * - Mostrar "🎉 CHEGOU AO ZERO!" quando chegar a 0
 * - Validar se o número inicial é positivo
 * - Retornar array com o histórico da contagem
 *
 * 💡 Exemplo:
 * contadorRegressivo(5);
 * // 🔴 5 - ÍMPAR
 * // 🔵 4 - PAR
 * // 🔴 3 - ÍMPAR
 * // 🔵 2 - PAR
 * // 🔴 1 - ÍMPAR
 * // 🎉 CHEGOU AO ZERO!
 * // Retorna: ['5-ÍMPAR', '4-PAR', '3-ÍMPAR', '2-PAR', '1-ÍMPAR', 'ZERO']
 *
 * 🚨 Regras:
 * - Número inicial deve ser maior que 0
 * - Use for loop tradicional (não forEach/map)
 * - Armazene cada passo em um array de histórico
 */

let numStart = 10;
let his = [];

for (let i = numStart; i >= 0; i--) {
  if (i === 0) {
    console.log(`🎉 CHEGOU AO ZERO!!!`);
    his.push("ZERO");
  } else {
    console.log(
      `${i % 2 === 0 ? "🔵" : "🔴"} ${i} - ${i % 2 === 0 ? "PAR" : "ÍMPAR"}`
    );
    his.push(`${i}-${i % 2 === 0 ? "PAR" : "ÍMPAR"}`);
  }
}

console.log(his);
