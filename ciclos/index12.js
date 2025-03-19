let suma = 0;
let n = Number(prompt("Ingrese un número mayor que 0:"));

if (n > 0) {
    let i = 1;
    while (i <= n) {
        suma += i * i;
        i++;
    }
    alert(`La suma de los cuadrados de 1 a ${n} es: ${suma}`);
} else {
    alert("Ingrese un número válido mayor que 0.");
}