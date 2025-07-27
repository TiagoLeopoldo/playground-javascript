// 🧠 Desafio #5 — Verificador de Faixa Etária e Permissão
// 🔧 Módulo 4: Controle de Fluxo com Condições

// Crie uma função chamada checkAgeAccess com dois parâmetros:
// - age → número representando a idade da pessoa
// - hasPermission → valor booleano (true ou false) indicando se a pessoa tem autorização especial

// 📝 Regras da função:
// - Valide se age é um número válido.
// - Se não for, retorne "Idade inválida"
// - Se age for menor que 18:
// - Se hasPermission for false → retorne "Acesso negado: menor de idade"
// - Se hasPermission for true → retorne "Acesso liberado com permissão especial"
// - Se age estiver entre 18 e 65 (inclusive):
// - Retorne "Acesso liberado"
// - Se age for maior que 65:
// - Retorne "Acesso liberado para sênior"

// 💡 Dica ninja:
// Tente evitar um excesso de if...else, e use retorno antecipado, operadores lógicos e expressões limpas para deixar o código elegante.
