//Aqui veremos como podemos pasar un texto de numero a numeros en JavaScript

let informacion = "24";

console.log("Informacion pre-parseada: " + typeof(informacion));

/**
 * Con la funcion de JavaScript llamada "Numeric" podremos pasar 
 * todos los textos con solo numeros a un dato de tipo Number
 */
let edad = Number(informacion);

console.log("Informacion parseada: " + typeof(edad));

let votar = (edad >= 18) ? "Puede votar" : "No puede votar";

console.log(votar);
