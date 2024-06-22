

 let arr = [-1, 0, 1, 2, -1, -4];
 let target = 0;
 let n = 6;

 for (let i = 0; i < n - 2; i++) {
   for (let j = i + 1; j < n - 1; j++) {
     for (let k = j + 1; k < n; k++) {
       if (arr[i] + arr[j] + arr[k] == target) {
         console.log([arr[i], arr[j], arr[k]]);
       }
     }
   }
 }

 