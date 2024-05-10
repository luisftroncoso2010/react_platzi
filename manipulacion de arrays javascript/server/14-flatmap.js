/* Array */
const users = [
    { userIid: 1, userName: 'Tom', attributes: ['Nice', 'Cute'] },
    { userIid: 2, userName: 'Mike', attributes: ['Lovely'] },
    { userIid: 3, userName: 'Nico', attributes: ['Nice', 'Cute'] },
]

// Entra en cada array y une cada array
const rtaMaps = users.map(user => user.attributes)
console.log('   * Map: ', rtaMaps);

// Une todos los elementos en una array, usando map y flat
const rtaMapsFlat = users.map(user => user.attributes).flat()
console.log('   * Map y Flat: ', rtaMapsFlat);

// Hace lo mismo que flat y map juntos. 
const rtaFlatmap = users.flatMap(user => user.attributes)
console.log('   * Flatmap: ', rtaFlatmap);

console.log('--- Trabajamos con calendars: ');

const calendars = {
    primaryCalendar: [
        {
            starDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 30),
            title: 'Cita 1'
        },
        {
            starDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: 'Cita 2'
        }
    ],
    
    secondaryCalendar: [
        {
            starDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 30),
            title: 'Cita 3'
        },
        {
            starDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: 'Cita 4'
        }
    ]   
}
console.log('   * Solucion uno al reto: ');
for (const propiedad in calendars) {
    console.log('   ', `Propiedad: ${propiedad}, Valor: ${calendars[propiedad].flatMap(starDate => starDate.starDate )}`);
}


const rtaRetoDos = Object.values(calendars).flatMap(item => {    
    return item.map(date => date.starDate)
})
console.log('   * Solucion tres al reto:', rtaRetoDos);

/* */