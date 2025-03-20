// 1. Acceder a elementos específicos del array
console.log("Ejercicio 1:");
let j = [200, -100, 45, 78, 32];
console.log(j[2]); // 45
console.log(j[4]); // 32

// 2. Imprimir elementos específicos del array
console.log("\nEjercicio 2:");
let f = ["ab", "cd", "ef", "gh"];
console.log(f[1]); // cd
console.log(f[3]); // gh

// 3. Recorrer array con forEach
console.log("\nEjercicio 3:");
let aux = [10, true, "k200", 20.7];
aux.forEach(elemento => console.log(elemento));

// 4. Imprimir números impares del array
console.log("\nEjercicio 4:");
let k = [17, 4, 64, 79, 109, 112];
k.forEach(num => {
    if (num % 2 !== 0) console.log(num);
});

// 5. Modificar elementos del array
console.log("\nEjercicio 5:");
let h = [true, true, false, true, false];
h[2] = true;
h[3] = false;
console.log(h);

// 6. Reemplazar elementos específicos en el array
console.log("\nEjercicio 6:");
let w = ["wc", "jp", "zx", "qr"];
w[1] = true;
w[3] = 30;
console.log(w);

// 7. Función para recorrer un array e imprimirlo
console.log("\nEjercicio 7:");
function recorrerArray(arr) {
    arr.forEach(elemento => console.log(elemento));
}
recorrerArray([2, 5, 7, 9]);

// 8. Función que retorna la cantidad de elementos en un array
console.log("\nEjercicio 8:");
function contarElementos(arr) {
    return arr.length;
}
console.log(contarElementos([2, 5, 7, 9]));

// 9. Usar indexOf para encontrar índices
console.log("\nEjercicio 9:");
let array = [30, 44, 54, 89, 100];
console.log(array.indexOf(44)); // 1
console.log(array.indexOf(89)); // 3
console.log(array.indexOf(70)); // -1 (No está en el array)

// 10. Agregar elementos a un array con push
console.log("\nEjercicio 10:");
let nums = [1,2,3,4,5,6,7,8,9,10];
nums.push(345);
console.log(nums);
nums.push(true);
console.log(nums);
nums.push("ADSO");
console.log(nums);
nums.push(455, 78, false);
console.log(nums);
nums.push("ABcd", true, 21);
console.log(nums);

// 11. Eliminar elementos con splice
console.log("\nEjercicio 11:");
let arr1 = [1, 2, false];
arr1.splice(2, 1);
console.log(arr1);

let arr2 = [99, false, 17, 45, 7, "abc", 78];
arr2.splice(6, 1);
console.log(arr2);

let arr3 = [-1, -55, -89, -30, 1000];
arr3.splice(1, 1);
console.log(arr3);

let arr4 = ["zxc", 767, 1298, true, false, [3], 1];
arr4.splice(1, 4);
console.log(arr4);

let arr5 = [34, ["q"], 67, 1, 99, 1/2];
arr5.splice(3, 2);
console.log(arr5);

// 12. Copiar un array
console.log("\nEjercicio 12:");
let a = [2, 6, 9, 0, 5];
let copiaDependiente = a; // Copia dependiente
console.log(copiaDependiente);

let b = ["abc", 4, 88, 99];
let copiaIndependiente = [...b]; // Copia independiente con spread operator
console.log(copiaIndependiente);

// 13. Recorrer un array con for
console.log("\nEjercicio 13:");
let letras = ["x", "y", "z", 0, 1, 2, 3];
for (let i = 0; i < letras.length; i++) {
    console.log(letras[i]);
}

// 14. Recorrer e incrementar elementos con for
console.log("\nEjercicio 14:");
let numeros = [1, 17, 8, 9, 3];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] + 1);
}

// 15. Función que retorna la longitud de un array
console.log("\nEjercicio 15:");
function longitudArray(arr) {
    return arr.length;
}
console.log(longitudArray([1, 2, 3, 4]));

// 16. Verificar si una letra está en un array
console.log("\nEjercicio 16:");
function encontrarLetra(letra) {
    let abecedario = ["a", "b", "c", "d", "e", "f", "g"];
    for (let i = 0; i < abecedario.length; i++) {
        if (abecedario[i] === letra) {
            return "La letra está en el array.";
        }
    }
    return "La letra NO está en el array.";
}
console.log(encontrarLetra("c"));
console.log(encontrarLetra("x"));

// 17. Recorrer array con forEach e imprimir elementos multiplicados por 3
console.log("\nEjercicio 17:");
let nums2 = [3, 50, 70, 600, 40];
nums2.forEach(num => console.log(num * 3));

// 18. Recorrer array con while
console.log("\nEjercicio 18:");
let index = 0;
while (index < nums2.length) {
    console.log(nums2[index]);
    index++;
}

// 19. Mostrar elementos pares de un array
console.log("\nEjercicio 19:");
nums2.forEach(num => {
    if (num % 2 === 0) console.log(num);
});

// 20. Contar cuántas veces aparece un nombre en un array
console.log("\nEjercicio 20:");
let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;
nombres.forEach(nombre => {
    if (nombre === "Maria") contador++;
});
console.log("Maria aparece:", contador, "veces");

// 21. Suma de los cuadrados de los elementos del array
console.log("\nEjercicio 21:");
let valores = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;
valores.forEach(num => {
    sumaCuadrados += num ** 2;
});
console.log("Suma de cuadrados:", sumaCuadrados);
