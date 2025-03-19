/*8. Cree un programa que muestre los números impares entre 1 y n */

let numeroN = Number (prompt("ingrese un numero n"))

for (let i = 1; i < numeroN; i++) {

    if (i %2 !==0) {
        alert(`estos numero son inpares ${i}`)
    }
    
}