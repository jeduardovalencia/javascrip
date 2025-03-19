/*1. Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y
retorne su área*/ 


let base = Number(prompt("Ingrese la base:"));
let altura = Number (prompt("Ingrese la altura:"));

function calcularArea(base, altura) {
    return base * altura;
}

alert("El área es: " + calcularArea(Number(base), Number(altura)));