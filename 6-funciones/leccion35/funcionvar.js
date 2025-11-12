/**
 * Aqui veremos como podemos declarar funciones como variables en JavaScript
 * 
 * Para crear estas variables con una funcion le tendremos que igualar a 
 * una variable y le quitaremos el nombre de la funcion.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

let suma = function(a, b){ return a + b};

let resultado = suma(10,5);

alert(resultado);