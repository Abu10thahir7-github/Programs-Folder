

let num1 = [1, 3];
let num2 = [2,4];

let arr = num1.concat(num2);
arr.sort((a, b) => a - b);


let mid = Math.floor(arr.length / 2);


if (arr.length % 2 === 0) {
      let result = (arr[mid - 1] + arr[mid]) / 2;
    console.log(result);

} else {
    console.log(arr[mid]);
}