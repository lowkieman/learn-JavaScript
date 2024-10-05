let d1,d2,d3,d4,d5,d6,d7;
d7 = new Date();
d1 = d7.setFullYear(2030);
d2 = d7.setMonth(11);
d3 = d7.setDay(25);
d4 = d7.setHours(20);
d5 = d7.setMinutes(20);
d6 = d7.setSeconds(20);
const leoT = [d1,d2,  d3, d4, d5, d6];

document.getElementById("demo").innerHTML = d1();
