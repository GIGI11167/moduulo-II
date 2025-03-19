// primeros ejercicios 18-03-25//

var nombre = "gene";
let edad = 15;
const ciudad = "caracas";
console.log("su nombre es " + nombre + " tiene " + edad + " años de edad , y vive en " + ciudad );

// segundo 

let nombre1 = "daniel";
let edad2 = 29 ;
let años = 2025;
let  pro = "programacion modulo ll ";
console.log("su nombre es " + nombre1 + " tiene " + edad2 + " años de edad , y da un curso de " + pro + " este año "+ años );

// tercero
let suma = (a,b) =>{ return a + b};
suma(2,5);

//cuarto

let edad3 = 40;
if (edad3 < 35 ) { console.log("menor de edad");} else {console.log("mayor de edad");} 

// cinco

let dia = 5;
let nombredia;

switch (dia) { case 1: nombredia = "lunes"; break; case 2: nombredia= "martes"; break; case 3: nombredia = "miercoles"; break; case 4: nombredia = "jueves"; break; case 5: nombredia = "viernes"; break; case 6: nombredia = "sabado"; break; 
default: nombredia = "dia invalido" ; }
console.log(nombredia)

// 6

console.log("determinar cual numero es par o impar ")
let nombre89 = prompt("ingrese un numero: ");
if (nombre89 % 2 == 0 ) {console.log("el numero es par");} else {console.log("el numero es impar");}

// ejercicios 19-03-25

//numeros pares del 1 al 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
 }

 //escriba un programa que solicite al usuario su año de nacimiento y determine su edad

let nombre = prompt("ingrese su nombre: ")
let año_de_nacimiento = prompt("ingrese su año de nacimiento ")
let año_actual = 2025;
calcular_edad = año_actual - año_de_nacimiento;
console.log( calcular_edad );

// tabla de multiplicar

var numero = prompt("Ingrese un número para ver su tabla de multiplicar:");

for (var i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

//utilizar funcion 

function suma(a, b ,c ){
    return a + b + c ;
}

let de = 2
let di = 2
let du = 2
sum = suma( de, di, du );
console.log(sum);

//adicional para puntos extras , numero par e impar
let x = prompt("ingresar un numero: ");
if (x % 2 == 0) {console.log("el numero es par");} else {console.log("el numero es impar");}