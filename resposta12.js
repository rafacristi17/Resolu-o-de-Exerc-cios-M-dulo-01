/*
2. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
*/
let prompt= require("prompt-sync")();

for(var i=1000; i<=1999; i++){
   divisores=(i%11)
    if(divisores===5){
        console.log(`Os números entre 1000 e 1999 que são divididos por 11 que tem resto igual a 5 são: ${i}`);
}
    
}

