/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores*/

let prompt= require("prompt-sync")();

let numEleitores = parseInt(prompt("Digite o número de eleitores: "));
let numVotosBrancos = parseInt(prompt("Digite o número de Votos em Branco: "));
let numVotosNulos = parseInt(prompt("Digite o número de Votos Nulos: "));
let numVotosValidos =parseInt(prompt("Digite o número de Votos Validos: "));

let perValidos = numEleitores/numVotosValidos;
let perBrancos = numEleitores/numVotosBrancos;
let perNulos = numEleitores/numVotosNulos;

console.log(`O percentual total dos votos ficaram assim: Votos válidos é de ${perValidos}%, Votos Brancos: ${perBrancos}%, Votos Nulos: ${perNulos}%  `)