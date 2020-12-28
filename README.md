# recruitMutants
reclutador de mutantes

El servicio “/mutant/” puede detectar si un humano es mutante enviando la secuencia de ADN mediante un HTTP POST con un Json el cual tenga el 
siguiente formato: 
 
POST → /mutant/ 
{ 
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] 
} 
 
En caso de verificar un mutante, devuelve un HTTP 200-OK, en caso contrario un 403-Forbidden 

Este proyecto se realizo en Visual Studio Code con Javascript, el main del proyecto es el archivo controller.js 
