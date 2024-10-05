//Math constants
document.getElementById("demo").innerHTML = Math.E  + "<br>" +//Euler 
Math.PI + "<br>" +
Math.LOG10E +"<br>" +
Math.LOG2E +"<br>" +
Math.LN10 +"<br>" +
Math.LN2 +"<br>" +
Math.SQRT1_2 +"<br>" +
Math.SQRT2 ;

//math methods
let m = Math.E;
document.getElementById("demo").innerHTML =
m + "<br>" +
Math.round(m) + "<br>" +
Math.ceil(m) + "<br>" +
Math.floor(m) + "<br>" +
Math.trunc(m) + "<br>" +
Math.sign(m) + "<br>" +
Math.pow(3,m) + "<br>" +
Math.sqrt(20) + "<br>" +
Math.abs(m) + "<br>" +
Math.sin(m) + "<br>" +
Math.sinh(m) + "<br>" +
Math.cos(m) + "<br>" +
Math.cosh(m) + "<br>" +
Math.log(m) + "<br>" +
Math.log2(m) + "<br>" +
Math.log10(m) + "<br>" +
Math.random();

//math random
const getRandom = Math.floor(Math.random()*10);
document.getElementById("demo").innerHTML = getRandom;