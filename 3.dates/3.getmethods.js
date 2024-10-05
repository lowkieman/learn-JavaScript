let d1,d2,d3,d4,d5,d6,d7;
d1 = new Date().getFullYear();
d2 = new Date().getMonth();
d3 = new Date().getDay();
d4 = new Date().getHours();
d5 = new Date().getMinutes();
d6 = new Date().getSeconds();
d7 = new Date().getTimezoneOffset();
const leoNi = [d1,d2,d3,d4,d5,d6,d7];
const leo = leoNi.join(" : ")

document.getElementById("demo").innerHTML = leo;
