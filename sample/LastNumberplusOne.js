

let arr = [9,3];
let n = arr.length;
let carry = 1;
for (let i = n - 1; i >= 0; i--) {
    let sum = arr[i] + carry;
    arr[i] = sum % 10;
    carry = Math.floor(sum / 10);
}

if (carry > 0) {
    arr.unshift(carry);
}

console.log(arr);