/*

13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N

*/

let prompt= require("prompt-sync")();

for(let i=0; i<5; i++){
    let N = parseInt(prompt('Digite um número para ver a tabuada: '));
    console.log("Tabuada de 1 até "+N+" : ");
    for(let j=1; j<=N; j++){
        console.log(`${j} x ${N} = ${j*N}`);
    }
    console.log("\n");
}



