const d1 = new Date();
const d2 = new Date("2023-10-20");
const d3 = new Date(2024,12,32,10,41,55)
document.getElementById("demo").innerHTML = d1 + " <br>" + d3;
document.getElementById("demo").innerHTML = d1.toDateString(); //more readable
document.getElementById("demo").innerHTML = d1.toUTCString();
document.getElementById("demo").innerHTML = d1.toISOString();