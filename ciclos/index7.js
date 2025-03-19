/*7. Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50. */

let numero = 10;
let resultado = 0;

for (let i = 1; i <= 10; i++) {
    resultado = i * numero;
    console.log(`${i} x ${numero} = ${resultado}`);
}