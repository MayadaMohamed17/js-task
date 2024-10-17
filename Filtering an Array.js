function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8]
