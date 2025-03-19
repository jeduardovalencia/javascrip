/* 4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case. */


let angulo1 = Number (prompt("ingrese primer angulo en grados "))
let angulo2 = Number (prompt("ingrese primer angulo en grados "))
let angulo3 = Number (prompt("ingrese primer angulo en grados "))
let suma_triangulo = angulo1 + angulo2 + angulo3

if(suma_triangulo = 180){
    alert(" el triangulo es de 180°")

}else if (suma_triangulo> 180 && suma_triangulo< 180){
    alert ("no es un triangulo mira los parametros")
}


