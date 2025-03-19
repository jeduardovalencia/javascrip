/*9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
S el programa se detendrá, de lo contrario continuará ejecutándose*/


let respuesta = "N";


while (respuesta !== "S" && respuesta !== "s") {

    respuesta = prompt("Desea salir s/n ");

    if (respuesta === "S" || respuesta === "s") {
        alert("El programa ha terminado");
    } else {
        alert("El programa continúa ejecutándose");
    }
}