/*4. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
funciones
*/

let notas = 3;
let suma = 0; 

for (let i = 1; i <= notas; i++) {
    let nota = Number(prompt(`ingrese la nota ${i}: `));
    suma += nota;
}

let promedio = suma / notas;
alert(`Su nota final es: ${promedio}`)