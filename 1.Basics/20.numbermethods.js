let x = 3.122345322123;
document.getElementById("demo").innerHTML = 
x.toString() + "<br>" +  //converts a number to string
x.toExponential(1.2) + "<br>" + //converts the number to exponetial
x.toFixed(3) + "<br>" + //specify the number of decimals a number should have
x.toPrecision(3) + "<br>" + //specifies the number of precision in a number
x.valueOf() + "<br>" //returns the value of given number
+ parseInt(x)  + "<br>"

document.getElementById("demo").innerHTML = Number(new Date("1970-01-02"));
document.getElementById("demo").innerHTML = parseInt(x);
document.getElementById("demo").innerHTML = parseFloat(x);

//number properties
let m = Number.EPSILON;
let n = Number.MAX_VALUE;
let o = Number.MIN_VALUE;
let p = Number.MAX_SAFE_INTEGER;
let q = Number.MIN_SAFE_INTEGER;
let r = Number.POSITIVE_INFINITY;
let s = Number.NEGATIVE_INFINITY;
let t = Number.NaN;
document.getElementById("demo").innerHTML = t;
