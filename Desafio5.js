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

const checkAgeAccess = (age, hasPermission) => {
  if (typeof age === "number") {
    if (age < 18) {
      if (hasPermission === false) {
     console.log("Acesso negado.");
      } else if (hasPermission === true) {
      console.log("Acesso liberado com permissão especial.");
      }
    } else if (age >= 18 && age < 65) {
     console.log("Acesso liberado.");
    } else if (age >= 65) {
     console.log("Acesso liberado para sênior");
    }
  } else {
      console.log("Idade inválida.");
  }
 
};

checkAgeAccess(15, false);
checkAgeAccess("12", true);
checkAgeAccess(13, true);
checkAgeAccess(67);
checkAgeAccess("35");
checkAgeAccess(54);


// Versão refatorada, código mais limpo.

const checkAgeAccessTwo = (age, hasPermission) => {
  if (typeof age != "number") {
    console.log("Idade inválida.");
    return 
  }

  if (age < 18) {
    console.log(hasPermission ? "Acesso liberado com permissão especial." : "Acesso negado.");
    return
  }

  if (age >= 18 && age < 65) {
    console.log("Acesso liberado.");
    return
  }

  if (age >= 65) {
    console.log("Acesso liberado para sênior.");
    return
  }

};

checkAgeAccessTwo(15, false);
checkAgeAccessTwo("12", true);
checkAgeAccessTwo(13, true);
checkAgeAccessTwo(67);
checkAgeAccessTwo("35");
checkAgeAccessTwo(54);