/*4.Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/


let prompt= require("prompt-sync")();

let ava1 = parseFloat(prompt("Digite a nota da primeira avaliação : "));
let ava2 = parseFloat(prompt("Digite a nota da segunda avaliação : "));

const media = (ava1+ava2)/2;

if(media >= 6.0 && media <= 10){
    console.log("PARABÉNS! Você foi aprovado! Sua média ficou em : ", media);
}else if(media <= 5.0 && media <= 0.0){
    console.log("Você foi REPROVADO! Estude mais, Sua média ficou em : ", media);
}else{
    console.log("Digite um número válido");
}