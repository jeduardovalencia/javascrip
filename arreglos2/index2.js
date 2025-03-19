let arreglo2 = [
    [["%", 7, true, "#"], ["&", 55, false, "="]],
    [[false, 0, 99, "?"], [true, 1000, "@", "¡"]],
    [[44, 55, 66, 77], [1, 2, 3, 4]]
];

console.log("Recorrido con índices usando for:");
for (let i = 0; i < arreglo2.length; i++) {
    for (let j = 0; j < arreglo2[i].length; j++) {
        for (let k = 0; k < arreglo2[i][j].length; k++) {
            console.log(`Índice [${i}][${j}][${k}] → ${arreglo2[i][j][k]}`);
        }
    }
}

console.log("\nRecorrido con índices usando forEach:");
arreglo2.forEach((grupo, i) => {
    grupo.forEach((fila, j) => {
        fila.forEach((elemento, k) => {
            console.log(`Índice [${i}][${j}][${k}] → ${elemento}`);
        });
    });
});
