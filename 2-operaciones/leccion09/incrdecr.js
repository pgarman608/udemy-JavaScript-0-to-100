//Aquí veremos como incrementar y decrementar numeros en JavaScript

let numero1 = 10, numero2 = 5,numsuma = numero1 + numero2;

/**
 * 1. Incremiento.
 * 
 * 1.1. Pre-incremento: Primero se va a modificar la variable a aumentar (1) y  después, se va a guardar en la otra variable.
 */

numsuma = ++numero1;

console.log("Pre-incremento");
console.log(numero1);

console.log(numsuma);

/**
 * 1.2. Post-incremento: Primero se va a guardar en la otra variable y después, se va a modifar la varible a aumentar (1).
 */

numero1 = 10, numero2 = 5,numsuma = numero1 + numero2;

numsuma = numero2++;

console.log("Post-incremento");
console.log(numero2);

console.log(numsuma);

/**
 * 2. Decremento: 
 * 
 * Funciona parecido que el incremento solo que este disminuye (1) y usa los simbolos "--".
 */

numero1 = 10, numero2 = 5,numsuma = numero1 + numero2;

numsuma = --numero1;

console.log("Pre-decremento");
console.log(numero1);

console.log(numsuma);

numero1 = 10, numero2 = 5,numsuma = numero1 + numero2;

numsuma = numero2--;

console.log("Post-decremento");
console.log(numero2);

console.log(numsuma);