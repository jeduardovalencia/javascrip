let arreglo1 = [["a", "z", "t"], [789, 887, 451], [true, false, 0]];

console.log("Recorrido con índices usando for:");
for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo1[i].length; j++) {
        console.log(`Índice [${i}][${j}] → ${arreglo1[i][j]}`);
    }
}

console.log("\nRecorrido con índices usando forEach:");
arreglo1.forEach((fila, i) => {
    fila.forEach((elemento, j) => {
        console.log(`Índice [${i}][${j}] → ${elemento}`);
    });
});
