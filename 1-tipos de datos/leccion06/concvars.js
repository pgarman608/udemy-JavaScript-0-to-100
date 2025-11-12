//Vamos a ver como concadenar variables en JavaScript.

var strNombre = "Pablo";

var strApellido = "García";

//Aqui podemos ver como podemos concadenar variables de tipo String.

var strNombreCompleto = strNombre + " " + strApellido;

console.log(strNombreCompleto);

//Tambien podemos concadenar numeros a un String como si fuesen del mismo tipo.

var strNombreNacimiento = strNombre + 0 + 3;

console.log(strNombreNacimiento);

/**
 * Si en el caso anterior ponemos entre parentesis los dos datos numericos 
 * se hará la operacion matematica en vez de la concadenacion.
 */
var strNombreSuma = strNombre + (0 + 3);

console.log(strNombreSuma);

/**
 * Y sí ponemos la suma sin parentesis al principio de la operacion 
 * se hará la operacion matematica sin la necesidad de parentesis 
 * gracias al orden en las matematicas de izquierda a derecha.
 */

var strSumaNombre = 0 + 3 + strNombre;

console.log(strSumaNombre);

