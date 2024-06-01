/* Loops */
var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

/*Funcion para llamar a lor estudiantes */
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`) 
}

/*Ciclo for */
console.log('   * for normal');
for (let i = 0; i < estudiantes.length; i++) {      
    saludarEstudiantes(estudiantes[i])
}

/*for of */
console.log('   * for of');
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

/* While  */
console.log('--- Ciclo while ');
var estudianteListaDos = ['Maria', 'Sergio', 'Rosa', 'Daniel']

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudianteListaDos.length > 0){
    console.log(estudianteListaDos);
    let estudiante = estudianteListaDos.shift()
    saludarEstudiante(estudiante)
}

console.log('    * Practica while');
var listaEstudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

/* Solucion con splice */
function solution(estudiantes, deathCount, nuevo) {
    if(deathCount === 0){
        estudiantes.push(nuevo)
        return estudiantes
    } else {
        estudiantes.splice(estudiantes.length - deathCount, deathCount)
        estudiantes.push(nuevo)   
        return estudiantes       
    } 
}
console.log(solution(listaEstudiantes, 1, 'Alba'));

function solutionDos(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) {
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }
  console.log(solutionDos(listaEstudiantes, 2, 'Ines'));


function solutionTres(estudiantes, deathCount, nuevo) {   
   while(deathCount > 0){
       estudiantes.pop()
       deathCount--
   }
   estudiantes.push(nuevo);
   return estudiantes;
}

console.log(solutionTres(listaEstudiantes, 2, 'Ines'));