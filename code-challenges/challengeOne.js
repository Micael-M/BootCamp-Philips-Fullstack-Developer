// Quantidade de Números Positivos

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
