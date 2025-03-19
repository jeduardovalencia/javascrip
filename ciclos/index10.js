let suma = 0;
let cantidadNumeros = 10;

for (let i = 1; i <= cantidadNumeros; i++) {
    let numero = Number(prompt(`Ingrese el número ${i}:`));
    
    if ((numero)) {
        alert("Por favor, ingrese un número válido.");
        i--; 
    } else {
        suma += numero;
    }
}

let promedio = suma / cantidadNumeros;
alert(`El promedio de los 10 números es: ${promedio}`);