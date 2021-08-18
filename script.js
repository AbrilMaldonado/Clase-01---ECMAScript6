// 1. Crear una función flecha que reciba un número y devuelva el doble del mismo.

/*
let number = parseInt(prompt("Ingrese un número"));

const doble = n => n*2;

console.log(doble(number));


//2. Crear una función flecha que reciba dos números y muestre la suma de ellos.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

let suma = (n1,n2) => n1+n2;

console.log(suma(num1,num2));


//3. Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

let mayor = (n1,n2) => {if(n1>n2){
    console.log(`El número ${n1} es el mayor`);
}  else{
    console.log(`El número ${n2} es el mayor`);
}
} 

mayor(num1,num2);


//4. Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:

let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"];

let arrayElements = (element, index, array) => {
    alert(`${index}- ${element}`);
}

frutas.forEach(arrayElements);


//5. Mostrar por pantalla las raíces cuadradas de los números del siguiente array:

let numeros = [16,29,120,64,81]

let raicesCuadradas = alert(numeros.map(Math.sqrt));


//6. Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. 
// Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

let nombre = prompt("Ingrese su nombre");
let signo = prompt("Ingrese su signo zodiacal");

let datos = (nom, sign) => alert(`Su nombre es ${nom} y su signo es ${sign}`);

datos(nombre,signo);

//7. Mostrar por pantalla los números mayores a 100 del siguiente array.

let numeros = [160,23,120,60,1,-10,8,9483]

let mayoresCien = numeros.filter(num => num > 100);
alert(mayoresCien);

*/

/* 8. Generar en base a un array, un nuevo array que tenga todos sus números
consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En
el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar
por pantalla los tres array formados. */
    
    
/* let numeros = [15,28,32,40,11,-3,0,100]

let numerosConsecutivos = numeros.map(numero => numero + 1);
let numerosPrecedentes = numeros.map(numero => numero - 1);

alert(`Números: ${numeros} \n Números consecutivos: ${numerosConsecutivos} \n Números precedentes: ${numerosPrecedentes}`); */



/* 9. Crear una función flecha que reciba un parámetro que indique el momento del día:
“Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo:
“Buenos días, buenas tardes, buenas noches”. */

/* let momento = prompt("¿En el lugar donde esta, es mañana, tarde o noche?").toLowerCase();

let saludo = (momento) => {
    if(momento === "mañana"){
        alert("¡Buenos días!");
    } else if(momento === "tarde"){
        alert("¡Buenas tardes!");
    } else{
        alert("¡Buenas noches!");
    }
}

saludo(momento); */


/* 10. Mostrar del siguiente array los nombres que comiencen con “M”. */

/* let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"];

let personasM = personas.filter(persona => persona.charAt(0) === "M");

console.log(personasM); */


/* 11. Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings
cuando corresponda:
a) function despedir (nombre){
    console.log("Adios" + nombre) }
b) function cobrar (monto,pago){
return monto - pago;}
console.log("Su vuelto es: " cobrar(monto,pago))
c) function saludar () {
console.log("Hola")} */

//a.

/* const despedir = (nombre) => {
    console.log(`Adiós ${nombre}`);}

despedir("Abril"); */

//b.

/* const monto = 20;
const pago = 60;

let cobrar = (monto, pago) => {
    return pago-monto;
}

console.log(`Su vuelto es: ${cobrar(monto,pago)}`); */

//c.

/* let saludar = () => console.log("Hola!");

saludar(); */









