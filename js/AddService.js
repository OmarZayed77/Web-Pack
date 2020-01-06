export class AddService {
    constructor() {
        this.numbers = document.getElementById('numbers');
    }
    add() {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'number');
        this.numbers.append(input);
    }
}