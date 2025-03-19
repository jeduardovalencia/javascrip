
// 2. Acceso a elementos de un arreglo más profundo
let arreglo2 = [[["%", 7, true, "#"]], [[false, 0, 99, "?"]], [[44, 55, 66, 77]]];
console.log(arreglo2[1][0][3]); // "?"
console.log(arreglo2[2][0][2]); // 66
console.log(arreglo2[0][0][2]); // true
console.log(arreglo2[0][0][0]); // "%"