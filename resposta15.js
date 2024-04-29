/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

let prompt= require("prompt-sync")();


let somaPonderada = 0;
let somaPesos = 0;
let numero, peso;

console.log("Digite um número decimal e seu peso. Digite 0 para o número para parar.");

while(true){
    numero = parseFloat(prompt("Digite um número: "));
    if(numero === 0) break;
    peso = parseFloat(prompt("Digite o peso do número: "));
    somaPonderada += numero * peso;
    somaPesos += peso;
}

let mediaPonderada = somaPonderada / somaPesos;

console.log(`A média ponderada dos números digitados é ${mediaPonderada}.`);