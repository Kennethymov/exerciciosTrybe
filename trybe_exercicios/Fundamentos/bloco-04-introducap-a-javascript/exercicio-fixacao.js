// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 20;
let b = 5;

soma = a + b;
sub = a - b;
mult = a * b;
div = a / b;
mod = a % b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 100;
const num2 = 150;

if (num1 > num2) {
    console.log(num1);
}
else {
    console.log(num2);
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num11 = 555;
const num12 = 100;
const num13 = 54;

if (num11 > num12 && num12 > num13) {
    console.log(num11);
}
else if (num12 > num13) {
    console.log(num12);
}
else {
    console.log(num13)
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num14 = -10;

switch (true) {
    case num14 > 0:
        console.log("positive")
        break

    case num14 < 0:
        console.log("negative")
        break
    default:
        console.log("zero")
}


//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angA = 0;
const angB = 60;
const angC = 60;
const triangulo = angA + angB + angC;
console.log(triangulo);

if (angA <= 0 || angA > 180) {
    console.log("angulo A invalido");
}
else if (angB <= 0 || angB > 180) {
    console.log("angulo B invalido");
}
else if (angC <= 0 || angC > 180) {
    console.log("angulo C invalido");
}
else if (triangulo == 180) {
    console.log(true);
}
else {
    console.log(false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 98;
let conceito;

switch (true) {
    case nota < 0:
        console.log("Error, a nota tem que ser entre 0 e 100!");
        break

    case nota < 50:
        conceito = "F";
        console.log(conceito);
        break

    case nota < 60:
        conceito = "E";
        console.log(conceito);
        break

    case nota < 70:
        conceito = "D";
        console.log(conceito);
        break

    case nota < 80:
        conceito = "C";
        console.log(conceito);
        break

    case nota < 90:
        conceito = "B";
        console.log(conceito);
        break

    case nota <= 100:
        conceito = "A";
        console.log(conceito);
        break

    default:
        console.log("Error, a nota tem que ser entre 0 e 100!")

}