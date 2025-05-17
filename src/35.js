function sum(numbers) {
    if (numbers.length === 0) {
        throw new Error('No numbers provided');
    }
    
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
