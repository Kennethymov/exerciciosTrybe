// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (...number) => number.reduce((acc, ccr) => acc + ccr, 0);

console.log(sum(...numbers));
