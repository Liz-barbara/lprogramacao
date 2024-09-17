
function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2, 7];
const sortedNumbers = sortNumbersAscending(numbers);

console.log(sortedNumbers); 
