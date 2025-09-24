/**
 * 🔍 Desafio 7 — Calculadora de Média com For-Of
 *
 * Você receberá um array de notas e deverá calcular a média aritmética
 * usando loop for...of. Deve mostrar a diferença entre a abordagem tradicional
 * e a sintaxe simplificada para iterar sobre elementos.
 *
 * ✅ Requisitos:
 * - Usar for...of para iterar sobre o array de notas
 * - Calcular a média aritmética
 * - Validar se o array não está vazio
 * - Validar se todos os elementos são números
 * - Retornar a média formatada com 2 casas decimais
 * - Mostrar comparação com abordagem for tradicional
 *
 * 💡 Exemplo:
 * calcularMedia([7.5, 8.0, 6.5, 9.0]);
 *
 * // ✅ MÉDIA CALCULADA COM FOR...OF: 7.75
 * // 🔄 Abordagem for tradicional exigiria:
 * // for (let i = 0; i < notas.length; i++) { soma += notas[i] }
 * // for...of é mais simples: for (let nota of notas) { soma += nota }
 *
 * 🚨 Validações necessárias:
 * - Array não pode estar vazio → "Erro: Array vazio"
 * - Todos elementos devem ser números → "Erro: Array contém valores não numéricos"
 * - Retornar média como número, não string
 */

const notas = [7.5, 8.0, 6.5, 9.0];

const calcularMedia = (notas) => {
  if (!Array.isArray(notas) || notas.length === 0) {
    return "Erro: Array vazio";
  }

  let soma = 0;
  for (let nota of notas) {
    if (typeof nota !== "number") {
      return "Erro: Array contém valores não numéricos";
    }
    soma += nota;
  }

  const media = soma / notas.length;

  console.log("Abordagem for tradicional exigiria:");
  console.log("for (let i = 0; i < notas.length; i++) { soma += notas[i] }");
  console.log(
    "for...of é mais simples: for (let nota of notas) { soma += nota }"
  );

  return Number(media.toFixed(2));
};

console.log(calcularMedia(notas));
