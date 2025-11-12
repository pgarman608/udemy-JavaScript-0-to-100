//Aqui veremos como funciona la precedencia con los incrementos y decrementos numericos

let ejex = 4, ejey = 8;
let ejez = ++ejex + ejey--;
/**
 * El orden en esta situacion seria el siguiente:
 * 1. Se hace el pre-incremento
 * 2. Se hace la suma
 * 3. Se hace el post-decremento
 */
console.log(ejex);
console.log(ejey);
console.log(ejez);
