const elements = [1, 1, 2, 2]
const otherelements = [3, 3, 4, 4]

const newArray = [... elements]  // Con el  spread  operations no se guarda en memoria
for (let index = 0; index < otherelements.length; index++) {
    let element = otherelements[index];
    newArray.push(element)    
}

console.log('--- Fusion de Array, For:');
console.log('   * for', newArray);
const rtaConcat = elements.concat(otherelements)
console.log('   * concat: ', rtaConcat);