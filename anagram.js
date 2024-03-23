
let arry1='naman';
let arry2='manan';
 lowerarry1=arry1.toLocaleLowerCase();
 lowerarry2=arry2.toLocaleLowerCase();
 splitarr1=lowerarry1.split('').sort();
 splitarr2=lowerarry2.split('').sort();
 
 if(splitarr1==splitarr2){
     console.log("false");
 }
 else
 {
     console.log("true");
 }




