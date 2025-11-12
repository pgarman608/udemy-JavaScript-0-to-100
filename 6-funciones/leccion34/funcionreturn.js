//Aqui veremos como funciona la palabra reservada "return" en las funciones en JavaScript

/**
 * La palabra reservada nos permite devolver datos que 
 * se modifican dentro de la funcion a fuera de la misma funcion.
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */

function miFuncion(a,b) {
    
    return a + b;
    
}

let suma = miFuncion(10,2)

console.log(suma);
