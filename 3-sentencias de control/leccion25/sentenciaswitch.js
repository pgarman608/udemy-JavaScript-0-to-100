//Aqui veremos que es y como funciona la sentencia switch en JavaScript

let numero = 1;

let numerotexto = "Valor desconocido";
/**
 * La sentencia switch no es muy diferente a lo que puede ser un if-else.
 * La diferencia mas grande es que no compara condiciones logicas, si no,
 * compara un mismo valor contra multiples casos especificos.
 * 1. Ponemos en los parentesis que valor queremos comprobar.
 * 2. En cada case ponemos los valores especificos que queremos comprobar.
 * 3. Pondremos break; cuando queramos terminar la accion dentro del case.
 * 4. (Extra) Si queremos que haga algo cuando no esté en los valores crearemos lo haremos con un default
 */

switch (numero) {
    case 1:
        numerotexto = "Numero uno";
        break;
    case 2:
        numerotexto = "Numero dos";
        break;
    case 3:
        numerotexto = "Numero tres";
        break;
    case 4:
        numerotexto = "Numero cuatro";
        break;
    default:
        numerotexto = "Caso no encontrado";
        break;
}
//Mostraremos el texto del numero del switch
console.log(numerotexto);
