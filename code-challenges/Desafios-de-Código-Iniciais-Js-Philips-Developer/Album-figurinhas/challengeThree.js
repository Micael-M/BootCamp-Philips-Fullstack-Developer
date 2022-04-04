// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const numTotal = parseInt(gets());
const numFigCompradas = parseInt(gets());
const setFig = new Set();

// Este desafio não é difícil. Como é uma questão de olimpiada requer
// raciocínio para entender a questão. A implementação da DIO acaba confudindo
// caso não tenha dominando o assunto do modulo Coleções e m JS - Map() Set().

// O que fiz foi perceber que precisaria iterar pelos valores de numFigCompradas.
// e entender também que o método gets() é responsável por receber os valores vindo
// do teste. Utilizei a propriedade (has) do método Set() para verificar se
// algum dos valores passados pelos testes para a variável 'x' via (let x = parseInt(gets())),
//  existente no set (setFig) se não existir, adicione o valor na coleção (setFig).
// Depois disso, é preciso apenas fazer a diferença entre o valor total e a coleção (setFig).

for(let i = 0; i < numFigCompradas; i++){ // Minha Implementação
  let x = parseInt(gets());
  if (!setFig.has(x)) { // Minha Implementação
    const fig = x; // Minha Implementação
    setFig.add(fig);
  }
}

print(numTotal - setFig.size); // Minha Implementação
