export function getNumbers(inputs) {
    const numbers = [];
    for(let i=0; i< inputs.length; i++) {
        numbers.push(inputs[i].value);
    }
    return numbers.map(num => Number(num));
}