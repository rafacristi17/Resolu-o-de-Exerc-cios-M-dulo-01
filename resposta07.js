/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

let prompt= require("prompt-sync")();
let quantidadeMaca = parseInt(prompt("Digite quantas maçãs você quer: "));
let precomenor = quantidadeMaca*0.30;
let precomaior = quantidadeMaca * 0.25; 

if(quantidadeMaca<6){
    console.log("O valor total ficou em : R$"+precomenor);
    }else if(quantidadeMaca>=6){
        console.log("O valor total ficou em : R$"+precomaior);
    }else{
        console.log("Digite um número válido")
    };