import { Math } from './Math';
import { getNumbers } from './getNumbers';

export class ButtonsService {
    constructor() {
        this.math = new Math();
        this.numbers = document.getElementsByClassName('number');
        this.result = document.getElementById('result');
    }
    onSum() {
        const numbers = getNumbers(this.numbers);
        const result = this.math.sum(numbers);
        this.result.innerText = result;
    };

    onMultiply() {
        const numbers = getNumbers(this.numbers);
        const result = this.math.multiply(numbers);
        this.result.innerText = result;
        console.log("Multiply");
    };
}