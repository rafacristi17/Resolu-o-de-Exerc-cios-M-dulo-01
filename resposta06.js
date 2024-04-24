/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/


let prompt= require("prompt-sync")();

let A = parseInt(prompt("Digite o primeiro o número do lado: "));
let B = parseInt(prompt("Digite o segundo o número do lado: "));
let C = parseInt(prompt("Digite o terceiro o número do lado: "));

let equilatero = A==B && B==C;
let isosceles = (A==B && B!=C) || (A==C && A!=B) || (B==C && B!=A);
let escaleno = A!=B && B!=C && A!=C;

if (A < B + C && B < A + C && C < A + B) {
    if (equilatero) {
        console.log('Triângulo equilátero');
    } else if (isosceles) {
        console.log('Triângulo isósceles');
    } else if(escaleno){
        console.log('Triângulo escaleno');
    }
} else {
    console.log('Os valores fornecidos não formam um triângulo');
}