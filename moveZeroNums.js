// zero nums move



let arr = [0, 1, 0, 3, 12];

let zeroNum = arr.filter((num) => num == 0);

let nonZeroNum = arr.filter((num) => num != 0);

let result = nonZeroNum.concat(zeroNum);

console.log(result);