/*5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case */


let numero = Number (prompt("ingrese un numero "))
let par = numero % 2 == 0
if (par) {
    alert ("es par ")
} else {
    alert("no es par ")
}