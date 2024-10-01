// BigInt variables are used to store big integer values that are too
// big to be represented by normal JS number

let x = 999999999999999;
let y = 9999999999999999;
document.getElementById("demo").innerHTML = x + " <br>" +
y;

// Creating big int
let m = 1234567890123456789012345n;
document.getElementById("demo").innerHTML = m;

let k =BigInt(1234567890987654321212334566);

document.getElementById("demo").innerHTML = k;
document.getElementById("demo").innerHTML = typeof(k)