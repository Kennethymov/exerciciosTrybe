// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let num = 5;
let fatorial = 1;

for (let index = num; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'kennethy';
let drow = "";

for (let index = 0; index < word.length; index += 1) {
    drow += word[word.length - index - 1]
}

console.log(drow);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra = array[1];
let menorPalavra = array[1];

for (index = 1; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

for (index = 1; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);

//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

