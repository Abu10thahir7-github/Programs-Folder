
let num =7
let result = 0

for(i=1;i<num;i++){
    if(num%i==0){
        result+=i
    }
}
if(result==num){
    console.log("ture")
}
else{
    console.log("false")
}