/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
****usar somente o While
*/
let prompt= require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

console.log("Digite números decimais para calcular a média. Digite 0 para parar.");

while(true){
    numero = parseFloat(prompt("Digite um número: "));
    if(numero === 0) break;
    soma += numero;
    contador++;
}

let media = soma / contador;

console.log(`A média aritmética dos números digitados é ${media}.`);
