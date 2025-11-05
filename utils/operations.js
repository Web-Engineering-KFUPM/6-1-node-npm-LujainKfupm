export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    return numbers.reduce((result, n) => result - n);
}

export function multiply(numbers) {
    return numbers.reduce((result, n) => result * n, 1);
}

export function divide(numbers) {
    if (numbers.length === 1) return numbers[0];
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result /= numbers[i];
    }
    return result;
}
