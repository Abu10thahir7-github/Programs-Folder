

const nums = ["10", "2"];

nums.sort((a, b) => {
  const newA = parseInt(a + b);
  const newB = parseInt(b + a);
  return newB - newA;6
});

let ans = "";
for (let x of nums) {
  ans += x;
}

if (ans[0] === '0') {
  return '0';
}

console.log(ans);