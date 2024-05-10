const number = [40, 50, 50, 81, 70]
/* TODOS elementos deben cumplir con la condicion */
let rta = true
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element >=40) {
        rta = true
    }else rta = false
}

console.log('For: ', rta);

const numberDos = [40, 40, 10, 8, 7]
const rtaDos = numberDos.every(item => item <= 40)
console.log('Rta Dos:', rtaDos);

console.log('--- Validando age de  todos los mienbros del equipo: ');
// TODOS deben ser menores de 15 años

const team = [
    {
        name: 'Luis',
        age: 26
    },
    {
        name: 'Ana',
        age: 15
    },
    {
        name: 'Leo',
        age: 27
    },
    {
        name: 'Roberto',
        age: 14
    },
    {
        name: 'Rigoberto',
        age: 17
    },
    {
        name: 'Juan',
        age: 10
    },
]

const rtasTres = team.every(item => {
    if(item <= 15) true
    else false
})

console.log('Team: ', rtasTres);