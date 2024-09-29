//string indexOf()
let text = "abcdefghijklmnopqrstuvwxyz";

document.getElementById("demo").innerHTML = text.indexOf("d");

//lastIndexOf()
document.getElementById("demo").innerHTML = text.lastIndexOf("mn");

//search()
document.getElementById("demo").innerHTML = text.search("k");

//match()
document.getElementById("demo").innerHTML = text.match("tu");

// interpolation strings
let firstName,lastName;
firstName = "John";
lastName = "Doe";

let fullName = `Welcome ${firstName}, ${lastName}!`;
// The automatic replacing of the variables with real values is called
//string interpolation
document.getElementById("demo").innerHTML = fullName;

// EXPRESSION Substitution

let price = 10;
let VAT = 0.25;

let total =  `Total: ${(price * (1+VAT).toFixed(2))}`
document.getElementById("demo").innerHTML = total;