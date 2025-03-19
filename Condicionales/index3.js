/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario. */

let numero1 = Number (prompt("Ingrese el primer numero"))
let numero2 = Number (prompt("Ingrese el segundo numero"))

if (numero1>numero2 && numero2>numero1){
    alert(`los numermayor `)

}else if (numero1<numero2 && numero1<numero2){
    alert ("el numero es menor ")

}else if (numero1 == numero2 ){
    alert("numero es igual")
}