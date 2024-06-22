// target value position print

let arr = [1, 2, 3, 4];
let target = 3;
let n = 4;

for (let i = 0; i < n; i++) {
  if (arr[i] == target) {
    console.log(i);
  }
}

// arry last value plus one

let arry = [1, 2, 3, 4];

arry[arry.length - 1] += 1;

console.log(arry);

//anagram

let arry1 = "naman";
let arry2 = "manan";

arry1 = arry1.toLocaleLowerCase();

arry2 = arry2.toLocaleLowerCase();

arry1Split = arry1.split("").sort();
arry2Split = arry2.split("").sort();

if (arry1Split == arry2Split) {
  console.log("YES");
}
