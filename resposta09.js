/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
*/

let prompt= require("prompt-sync")();

let num = parseInt(prompt("Digite o código de origem do produto: "));

switch(num){
    case 1:
        console.log("O código 1 é referente a região Sul");
        break;
    case 2: 
        console.log("O código 1 é referente a região Norte");
        break;
    case 3: 
        console.log("O código 1 é referente a região Leste");
        break;    
    case 4: 
        console.log("O código 1 é referente a região Oeste");
        break;
    case 5:
    case 6:
        console.log("O código " + num + " é referente a região Nordeste");
        break;
    case 7:
    case 8:
    case 9:
        console.log("O código " + num + " é referente a região Sudeste");
        break;
    default: 
        if(num >= 10 && num <= 20){
            console.log("O código " + num + " é referente a região Centro-Oeste");
        }else if(num >= 25 && num <= 50){
            console.log("O código " + num + " é referente a região Nordeste");
        }else {
            console.log("O código é fora dos intervalos, portanto é um produto importado");
        }
        break;    
        }