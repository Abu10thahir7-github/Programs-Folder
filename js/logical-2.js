
let n = 19;
let cout = 0;

while (cout <= 5) {
    let num2 = 0;
    let num = n;
    while (num > 0) {
        let num1 = num % 10;
        num2 += num1 * num1;
        num = Math.floor(num / 10);
    }
    n = num2;
    if (n === 1) {
        console.log("true");
        break;
    } else {
        cout++;
    }
}

if (cout === 6) {
    console.log("flase");
}





