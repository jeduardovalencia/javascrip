// 3. Acceso a elementos en otro arreglo
let arreglo3 = [[[0], [2, 77]], [["&", true, "!!"], [[88]]], [[[[1]]]], "¿"];
console.log(arreglo3[1][0][1]); // true
console.log(arreglo3[2][0][0][0]); // 1
console.log(arreglo3[0][1][1]); // 77
console.log(arreglo3[1][1][0][0]); // 88
console.log(arreglo3[3]); // "¿"