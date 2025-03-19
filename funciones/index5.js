/*5. Escriba una función que reciba un número n como parámetro y genere su factorial. */

let n = Number (prompt("escribe un numero entero"))

function factorial(n){
  let resultado = 1
for (let i = 1 ; i  <= n  ; i++) {
    resultado *= i;
        }
        return resultado;
}
alert (`el factorial de ${n} es ${resultado}`)