
const array = [1, 2, 3, 4, 5];
[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

console.log(array);