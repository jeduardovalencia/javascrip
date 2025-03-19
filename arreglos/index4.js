// 4. Modificación y eliminación en arreglos
let arreglo4 = [[50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1, -8, -2]];
arreglo4[1][1] = "?";
arreglo4[3][1] = 9;
arreglo4[0][0] = "¡";
arreglo4[1].splice(2, 1);
arreglo4[0].splice(2, 1);
arreglo4[3].splice(2, 1);
console.log(arreglo4);