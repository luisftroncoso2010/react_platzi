const  { areIntervalsOverlapping } = require('date-fns')

const number = [1, 2, 3, 4]
console.log('Buscamos un numero par dentro de un array: ');

let rta = false
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element % 2 === 0) {
        rta = true
        break
    }
}

console.log('   * Respuesta Uno: ', rta);

const rtaDos = number.some(item => item % 2 === 0)
console.log('   * Respuesta Dos: ', rtaDos);

console.log('--- Ordenes de compra: ');
const orders = [
    {
        custumerName: 'Luis',
        total: 60,
        delievered: true
    },
    {
        custumerName: 'Leo',
        total: 50,
        delievered: false
    },
    {
        custumerName: 'Valdo',
        total: 1000,
        delievered: true
    },
    {
        custumerName: 'Morena',
        total: 100,
        delievered: true
    },
    {
        custumerName: 'ana',
        total: 100,
        delievered: true
    },
    {
        custumerName: 'Azul',
        total: 200,
        delievered: false
    }
]

const rtaTres = orders.some(item => item.delievered)
console.log('   * Respuesta Tres, Ordenes: ', rtaTres);


const dates = [
    {
        starDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: 'Cita de trabajo'
    },
    {
        starDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 12, 30),
        title: 'Cita con mi jefe'
    },
    {
        starDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: 'Cena'
    },
]

const newAppointment = {
    starDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 24)
}

const isOverlap = (newDate) => {
    return  dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.starDate, end: date.endDate},
            {start: newDate.starDate, end: newDate.endDate}
        )
    })
}
// PAra validar quien se super pone
console.log('--- isOverlap: ', isOverlap(newAppointment));