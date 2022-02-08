// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

let palavra = "kennethy";
let drow = "";

function verificaPalindromo(word) {
    for (let index = 0; index < word.length; index += 1) {
        drow += word[word.length - index - 1]
    }
    return word === drow;
}

console.log(verificaPalindromo(palavra));

console.log(palavra);
console.log(drow);

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 4, -6, 7, 10, 0, -3];
let maiorValor = array[0];
let position = 0;

function positionBigValue(teste) {
    for (let index = 1; index < teste.length; index += 1) {
        if (maiorValor < teste[index]) {
            maiorValor = teste[index]
            position = index;
        }
    }
    return position;
}

console.log(positionBigValue(array));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let menorValor = array[0];
let position1 = 0;

function positionSmallValue(teste) {
    for (let index = 1; index < teste.length; index += 1) {
        if (menorValor > teste[index]) {
            menorValor = teste[index]
            position1 = index;
        }
    }
    return position1;
}

console.log(positionSmallValue(array));

