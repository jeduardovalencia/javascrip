//12. Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje informando
//  si el estudiante aprobó o no la materia, para que la materia se de como aprobada el promedio del
//  estudiante debe ser mayor o igual a 3,0.
let 

function nota() {

  let acu = 0
  for (let i = 0; i < 5; i++) {
    let notas = Number (prompt(`ingrese nota${i}` ))
    acu += notas



    
  }
  return acu/5
}

console.log(nota())