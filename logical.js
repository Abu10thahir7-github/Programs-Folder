let array = [1, 2, 3, 1];
let n=array.length;
let count=0;

for(i=0;i<n-1;i++){
    for(j=i+1;j<n;j++){
        if(array[i]==array[j]){
            count++;

            break;

        }
                
    }
}
if(count==1){
    console.log("ture");
}
else{
    console.log("falsse");
}