let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//string length
document.getElementById("demo").innerHTML = text.length;

//extracting a string using charAt()
document.getElementById("demo").innerHTML = text.charAt(25);

// using charCodeAt() and at()-same as charAt()
document.getElementById("demo").innerHTML = text.charCodeAt(1) + " " + text.at(-10);

// property access[]
document.getElementById("demo").innerHTML = text[20,23];

//slice
document.getElementById("demo").innerHTML = text.slice(1,10).toLocaleLowerCase();


