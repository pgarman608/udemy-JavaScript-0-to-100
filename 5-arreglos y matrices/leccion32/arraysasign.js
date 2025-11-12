//Aqui veremos como asignar elementos a arrays en JavaScript

let comida = ["pera", "manzana", "fresa","tomate","lechuga","pimientos"];

console.log("Comida 1º");
console.log(comida);
console.log("------------");

/**
 * Para modificar un elemento de un array deberemos hacerlo 
 * sobre la ubicacion del elemento a modificar.
 */

comida[2] = "hamburgesa";

console.log("Comida 2º");
console.log(comida);
console.log("------------");

/**
 * Los elementos arrays tienen una funcion que nos permite añadir 
 * un elemento mas al array llamado push
 */

comida.push("pizza")

console.log("Comida 3º");
console.log(comida);
console.log("------------");

/**
 * (Extra)
 * Eliminar elementos del array.
 * pop() : Elimina el ultimo elemento del array
 * shift() : Elimina el primer elemento del array
 * splice(x,x) : Elimina el numero 
 */

comida.pop()
comida.shift()
comida.splice(1,3)

console.log("Comida 4º");
console.log(comida);
console.log("------------");