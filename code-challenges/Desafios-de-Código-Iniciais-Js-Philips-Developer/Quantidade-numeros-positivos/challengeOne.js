// Quantidade de Números Positivos
// Aqui, leia atentamente o enunciado, observe os intervalos
// observe também os testes, neste caso o TDD vai te ajudar.
// Se não conhece TDD, sugiro pesquisar, irá precisar na sua
// carreira como pessoa desenvolvedora.
// Quealquer dúvida não exite em me chamar no linkedin ou Discord

let quantidadePositivos = 0; // Implementação da DIO

for (let i = 0; i < 6; i++) {// Implementação da DIO

  const valorInformadoPeloUsuario = gets();// Implementação da DIO

  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.

  // ######################  CUIDADO ##############################
  // Cuidado quanto a sintax, neste resultado não utilize o 'return'

  if(valorInformadoPeloUsuario > 0){ // Minha implementação.
    quantidadePositivos ++;
  }
  
}

console.log(`${quantidadePositivos} valores positivos`);// Implementação da DIO
