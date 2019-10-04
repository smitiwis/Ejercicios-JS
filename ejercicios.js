// EJERCICIOS 1
// alert("Bienvenido al mundo de Javascript");

//EJERCICIO 2
//document.write("Hola mundo");

//EJERCICIO 3

/* var numero1 = 25;
var numero2 = 13;
var resultado = numero2 + numero1;
document.write("La suma de 25 + 13 es: ", resultado);
 */

//EJERCICIO 4

/*  var nombre = prompt("¿Cual es su nombre?");
 document.write ("Hola amigo ", nombre); */

// EJERCICIO 5
/* 
var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");

if (numero1 > numero2) {
    document.write("El numero: ", numero1, " es el mayor");
} else if (numero1 < numero2) {
    document.write("El numero: ", numero2, " es el mayor");
} else if (numero1 == numero2) {
    document.write("Los numeros ingresados son Iguales");
} */

// EJERCICIO 6

/* var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");
var num3 = prompt("Ingrese el tercer numero");

if (num1 > num2 && num1 > num3) {
    document.write("El numero mayor es " + num1);
} else {
    if (num2 > num1 && num2 > num3) {
        document.write("El numero mayor es " + num2);
    } else {
        if (num3 > num1 && num3 > num2) {
            document.write("El numero mayor es " + num3);
        } else {
            document.write("Los numeros son iguales");
        }
    }
} */


//EJERCICIO 7

/* 
var num1 = prompt("Ingrese el primer numero");

if (num1 % 2 == 0) {
    document.write("El numero ingresado es divisible de DOS");
} else {
    document.write("El numero ingresado NO es divisible de DOS");
}
 */

//EJERCICIO 8

/* var meces = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abrl',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
var num_meces = meces.length;

for (var i = 0; i <= 11; i++) {

    //console.log(meces[i])	 		Forma 1
    //document.write("<li>",meces[i],"</li>");	forma 2

} */

//EJERCICIO 9

/* var valores = [true, 5, false, "Hola", "Adios", 2];
var num = (valores[3].length);
var num1 = (valores[4].length);
var A = valores[1];
var B = valores[5];
if (num < num1) {
    document.write(valores[4], " Es el texto con màs CARACTERES que ", valores[3], "<br>");
}


var suma = A + B;
var resta = A - B;
var multiplicacion = A * B;
var Divicion = A / B;
document.write("Suma: ", suma, "<br>");
document.write("Resta: ", resta, "<br>");
document.write("Divicion: ", Divicion, "<br>");
document.write("Multiplicacion: ", multiplicacion, "<br>"); */


//EJERCICIO 10


var motor = 1;

switch (motor) {

    case 0:
        console.log("No hay un valor definido para el tipo de bomba");
        break;

    case 1:
        console.log("La nona es una bomba de agua");
        break;

    case 2:
        console.log("La bomba es de gasolina"); 
        break;

    case 3:
        console.log("La bomba es de hormigon");
        break;
    case 4:
        console.log("La bomba es de alimenticia");
        break;

    default:
        console.log("La numero de bomba existe");

}


