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

let ladoA = parseInt(prompt("Digite o primeiro o número do lado: "));
let ladoB = parseInt(prompt("Digite o segundo o número do lado: "));
let ladoC = parseInt(prompt("Digite o terceiro o número do lado: "));


if(ladoA == ladoB == ladoC && ladoC == ladoA == ladoB && ladoB ==ladoC==ladoA){
     console.log(" Os números digitados formam um triângulo Equilátero");
}else if(!ladoA && !ladoB && !ladoC && !ladoC && !ladoA && !ladoB){
     console.log(" Os números digitados formam um triângulo Escaleno");
}else if(ladoA===ladoB && !ladoC || ladoC===ladoA && !ladoB || ladoB===ladoC && !ladoA){
     console.log(" Os números digitados formam um triângulo Isósceles");
}else{
     console.log("Número inválido")
}

//corrigir a lógica do if e else




