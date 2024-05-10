const letters = ['a', 'b', 'c']

console.log("Con el for nomrla: ");
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);    
}

console.log("Con el forEach: ");
letters.forEach(item => console.log(item));


console.log("Multiplicar Array: ")

const Input = [2, 4, 5, 6, 8]
function multiplyElements(array) {
    return array.map(item => item * 2)
 }

console.log(multiplyElements(Input))