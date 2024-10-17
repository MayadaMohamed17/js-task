function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5, 6, 7]
