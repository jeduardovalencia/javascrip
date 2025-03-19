/*1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no*/

let nombre= prompt("Ingresar nombre")
let edad = number (prompt("Ingrese edad:"))

if (edad>=18) {
    alert(` ${nombre} tine ${edad} es mayor de edad`)
}else
{
    alert(`${nombre} tine ${edad} es menor de edad`)
}