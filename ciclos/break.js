//el break rompe abrutamente la ejecucion de un ciclo 
//no es recomendadp abusar de ese sistema
//funciona tanto el for como en while



//mostrar los numeros inicialmente hasta el 9 
//romper el ciclo con break en i igual a 5
for (let i = 0; i < 10; i++) {
    if (i === 5) {
    // Si 'i' es 5, usamos 'break' para salir del
    break;
    }
    // Si no se cumple la condición, imprimimos el
    //valor de 'i'
    console.log("Número:", i);
    }