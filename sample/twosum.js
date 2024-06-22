
    
    let arr=[1,2,3,4]
    let target=6
    let n=4
    
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            if(arr[i]+arr[j]==target){
              console.log([arr[i],arr[j]])
            }
        }
    }
    
