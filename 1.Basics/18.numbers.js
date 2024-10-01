let m = "20";
let n = 100;
let z = "20";

document.getElementById("demo").innerHTML = m * n / z;

//Infinity
let myNum = 2;
let text = "";
while (myNum !=Infinity){
    myNum = myNum * myNum;
    text = text + myNum + "<br>"
    document.getElementById("demo").innerHTML =text;
}

//numeric strings 
let x = 10100;

let y = "200";

document.getElementById("demo").innerHTML = x - y;

//NaN

let k = 100 / "apple";
document.getElementById("demo").innerHTML = k;
