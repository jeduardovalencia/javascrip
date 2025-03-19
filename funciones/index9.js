function contarVocales(cadena) {
  let cantidad = 0;

  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase(); // Convertimos la letra a minúsculas
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      cantidad++;
    }
  }
  return cantidad;
}

let cadena = prompt("Escribe algo");
alert("La cantidad de vocales es: " + contarVocales(cadena));