/*

11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.

*/

let prompt= require("prompt-sync")();

let num = parseInt(prompt("Digite um némero pra saber se é par ou impar:  "));
let contador =0;

for(var i=num; i>=num; i--){
    num-=i
    
    if(i%2==0){
        console.log(`${i}, é par!`);
    }else if(i<=0){
        console.log(`Fim do programa`)
        break;
    }else{
        console.log(`${i}, é impar!`);
    }
    
}


