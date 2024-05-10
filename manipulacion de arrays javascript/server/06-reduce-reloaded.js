const item = [1, 2, 3, 4, 5, 10, 1, 2]

/* El reduce resive dos posiciones obejo item*/
const rta = item.reduce((obj, item) => {
    // Pasamos el objetos, validamos si existe o no.    
    if(!obj[item]){
        // Si no existe el elemento, se iguala a uno
        obj[item] = 1;
    } else {
        // Si existe sumale uno a ese objeto
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta)


console.log('Conteo de concurrecia: ')

const nameCount = item.reduce((objeto, valore) => {
    objeto[valore] = (objeto[valore] || 0) + 1;
    return objeto;
}, {});

console.log(nameCount);

console.log('--- Trabajando con Objetos: ');
const data = [
    {
        name: 'Luis',
        level: 'Low'
    },
    {
        name: 'Andres',
        level: 'medium'
    },
    {
        name: 'Fernando',
        level: 'hight'
    },
    {
        name: 'Leo',
        level: 'Low'
    },
    {
        name: 'Ana',
        level: 'Low'
    },
]

const rtaDos = data
.map(item => item.level)
.reduce((obj, item) => {
    // Pasamos el objetos, validamos si existe o no.    
    if(!obj[item]){
        // Si no existe el elemento, se iguala a uno
        obj[item] = 1;
    } else {
        // Si existe sumale uno a ese objeto
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rtaDos);