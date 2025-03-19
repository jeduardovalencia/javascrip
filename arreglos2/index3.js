let arreglo3 = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];

console.log("Números impares con índices:");
arreglo3.forEach((fila, i) => {
    fila.forEach((num, j) => {
        if (num % 2 !== 0) console.log(`Índice [${i}][${j}] → ${num}`);
    });
});

console.log("\nSuma total con índices:");
let suma = 0;
arreglo3.forEach((fila, i) => {
    fila.forEach((num, j) => {
        suma += num;
        console.log(`Índice [${i}][${j}] → Suma parcial: ${suma}`);
    });
});
console.log("Suma total:", suma);
