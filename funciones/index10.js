/*10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales. */
function sinVocal(cadena) {
  return cadena.replace([aeiouAEIOU]); 
}

let cadena = prompt("Escribe algo");
alert("La cadena sin vocales es: " + sinVocal(cadena));
