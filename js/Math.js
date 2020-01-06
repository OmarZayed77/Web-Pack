export class Math {
    multiply(numbers) {
        return numbers.reduce((result, num) => result * num, 1);
    };

    sum(numbers) {
        return numbers.reduce((result, num) => result + num, 0);
    };
}