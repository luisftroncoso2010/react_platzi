let pets = ['Cat', 'dog', 'bat', "ana", "santi", "nico", "anastasia"]

let includeInArray = false
for (let index = 0; index  < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true
        break
    }    
}

console.log('   * Incluides For: ', includeInArray);

const rta = pets.includes('ana')
console.log('   * Incluides: ', rta);

function filterByTerm(array, term) {
    let empty = []
    const esta = array.includes(term)
    if(esta === true){
        empty.push(term)
    }
    return empty
}
console.log('   * Esta: ', filterByTerm(pets, 'ana'));
let esta = []
/* Validamos con el find */
pets.filter(item => {
    if(item.includes('ana')){
        esta.push(item)
    }    
})

console.log('   * Elementos que coinciden en el array: ', esta);



