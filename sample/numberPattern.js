//number piramid pattern
// 1
// 23
// 234
// 4567
// 56789




let n=5
let result=''
let count=0

for(i=1;i<=n;i++){
    count=i
    for(j=1;j<=i;j++){
        
        result+=count
        count++;
    }
    result+='\n'
    
}
console.log(result);