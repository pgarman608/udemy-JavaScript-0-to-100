//Aqui veremos como comprobar si un numero es par o impar en JavaScript

let ejex = 5, ejey = 16;

/**
 * Vamos a utilizar la estructura de if para hacer esta comparacion
 * 
 * La explicacion mas sencilla para entender es:
 * Si el resto de la division entre 2 y el numero que queramos es 0 
 * es par y si no lo es es impar
 */
if (ejex % 2 == 0) {

    console.log("El eje x es par");
    
} else {

    console.log("El eje x es impar");

}

if (ejey % 2 != 0) {

    console.log("El eje y es impar");

} else {

    console.log("El eje y es par");

}