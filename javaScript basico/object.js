
/* Este es el objeto */
var miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto: ${this.modelo} ${this.annio}`);
    }   
}

/* Se imprime el objeto */
console.log(miAuto);

/*Accedemos a los valores del objeto */
console.log(miAuto.annio); 

/*Object funcion constructora */
console.log('--- Object. Funcion Constructora: ');

function Auto(marca, modelo, annio) {
    this.marca = marca 
    this.modelo = modelo
    this.annio = annio   
}

var autoNuevo = new Auto('Tesla', 'Model 3', 2020)
var autoNuevoDos = new Auto('Tesla', 'Model X', 2018)
var autoNuevotres = new Auto('Toyota', 'Corolla', 2020)
console.log(autoNuevo)
console.log(autoNuevoDos)
console.log(autoNuevotres)

// console.log('   * Ejemplo de 5 autos diferentes')
// let autosNuevos = []

// for (let i = 0; i < 5; i++) {
//     var marca = prompt('Ingre marca: ')
//     var modelo = prompt('Ingresa modelo: ')
//     var annio = prompt('Ingresa modelo: ')

//     autosNuevos.push(new Auto(marca, modelo, annio))       
// }

// for (let i = 0; i < autosNuevos.length; i++) {
//     console.log(autosNuevos[i])    
// }

console.log('   * Practica creando objetos: ')

var auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    licensePlate: 'xv2025'    
}

function solution(car) {
    if(car.licensePlate === undefined || car.licensePlate === null){       
        return car.drivingLicense = false
    }else{        
        return car.drivingLicense = true
    }
}
//console.log('licensePlate' in auto)

solution(auto)
console.log(auto);