/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros*/

let prompt= require("prompt-sync")();

let num1 =parseInt(prompt("Digite o primeiro número: "));
let num2 =parseInt(prompt("Digite o segundo número: "));
let num3 =parseInt(prompt("Digite o terceiro número: "));


const soma = num1+25;
const triplo = num2*3;
const percent = (num3/12)*100
const somaTotal = num1+num2+num3

console.log(`O primeiro número foi somado a 25 ficando: ${soma}, o segundo número foi triplicado ficando : ${triplo}, o terceiro número ficou em 12% do valor original: ${percent}, e o quarto número é a soma dos três valores digitados ficando : ${somaTotal} `)