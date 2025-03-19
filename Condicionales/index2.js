/*2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case. */

let productos = prompt("Ingrse el Productos ( lentejas, crema, arroz y vino)")

if (productos=== "vino" || productos === "crema")
{
    alert("pagan IVA")


}else if (productos === "lentejas" || productos === "arroz") {

    alert ("no paga IVA")
}


let = iva
switch (product) {

    case "crema":
        iva = "paga iva " 
        break
    case "vino":
        iva ="Paga IVA"
        break;
    case "lentejas":
        iva = "no paga iva "
        break
    case "arroz":
        iva = "no paga iva"
        break;

    default:
        iva = "productos no encontrado"
        break;

}

alert(iva)