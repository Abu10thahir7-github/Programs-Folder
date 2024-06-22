
let n = 10;
let str='';
for (let index = 0; index < n; index++) {
    for (let space = 0; space < n-index; space++) {
        str += ' ';

        
    }
    for (let i = 0; i < index; i++) {
        str += '*';        
    }
    str += '\n';
    
    
}
console.log(str);
