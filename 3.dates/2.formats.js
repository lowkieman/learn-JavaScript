const getDate = new Date();
document.getElementById("demo").innerHTML = getDate;
document.getElementById("demo").innerHTML = getDate.toDateString();

//ISO dates
document.getElementById("demo").innerHTML = getDate.toISOString();

//UTC dates
document.getElementById("demo").innerHTML = getDate.toUTCString()