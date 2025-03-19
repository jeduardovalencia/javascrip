let suma = 0;
let cantidad = 0;
let numero = Number(prompt("Ingrese un número (0 para salir):"));

while (numero !== 0) {
    suma += numero;
    cantidad++;
    numero = Number(prompt("Ingrese otro número (0 para salir):"));
}

if (cantidad > 0) {
    alert(`El promedio es: ${suma / cantidad}`);
} else {
    alert("No se ingresaron números.");
}
