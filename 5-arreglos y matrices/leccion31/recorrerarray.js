//Aqui veremos como recorrer arrays en JavaScript

let comida = new Array("pera", "manzana", "fresa","tomate","lechuga","pimientos");

/**
 * Se deben recorrer los arrays utilizando numeros como ubicacion de cada elemento 
 * dentro de unas llaves al lado del array.
 * 
 * 1º Elemento = 0, 2º Elemento = 1, 3º Elemento = 2...
 * 
 * Voy a usar un for para recorrer estos arrays.
 */

for (let index = 0; index < comida.length; index++) {
    
    console.log(index + " : " + comida[index]);
    
}