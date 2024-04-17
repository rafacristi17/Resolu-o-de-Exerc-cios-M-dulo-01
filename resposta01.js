/*Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/

let prompt= require("prompt-sync")();

let temp = parseFloat(prompt("Digite a temperatura em grau Celsius: "));

const conversaotemp = (temp*1.8)+32;

console.log(`A Temperatura digitada em grau Celsius foi de  ${temp}, já ela convertida para Fahrenheit é de ${conversaotemp}`);
