// Fases da Lua
// Aqui, leia atentamente o enunciado, observe os intervalos
// observe também os testes, neste caso o TDD vai te ajudar.
// Se não conhece TDD, sugiro pesquisar, irá precisar na sua
// carreira como pessoa desenvolvedora.
// Quealquer dúvida não exite em me chamar no linkedin ou Discord

let lines = gets().split('\n'); // Implementação da DIO


let line = lines.shift().split(" ");// Implementação da DIO
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && inicio > 3 && final <= 96) { // Minha Implementação
    print('crescente');
} else if (inicio <= 96 && final >= 3 && inicio > final) {// Minha Implementação
    print('minguante');// Minha Implementação
} else {
    print('cheia');
}