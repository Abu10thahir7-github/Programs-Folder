//distinct subsequences

let s = "rabbbit";
let target = "rabbit";

let n = s.length;
let m = target.length;      

let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
dp[n][m] = 1;

for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
        if (s[i] == target[j]) {
            dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
        } else {
            dp[i][j] = dp[i + 1][j];
        }   
    }
}

console.log(dp[0][0]);