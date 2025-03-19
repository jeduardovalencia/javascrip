/*
usamos continue cuanod queremos saltar de una iteracion a otra 
*/

//imprimir los numeros de 0 a 9 exceptuando el 5
for (let i = 0; i < 10; i++) {
    if (i === 5) {
    // Si 'i' es 5, usamos 'break' para salir del
    continue;
    }
    // Si no se cumple la condición, imprimimos el
    //valor de 'i'
    console.log("Número:", i);
    }