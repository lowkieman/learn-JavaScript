const cars = ["Saab",
    "volvo",
    "BMW",Date.now()];
document.getElementById("demo").innerHTML = cars[0];
cars[0] = "Toyota";
document.getElementById("demo").innerHTML = cars.sort() + "<br>" +
cars.length;

for (let i=0; i<=cars.length; i++){
    let text = "<ul>"
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"
document.getElementById("demo").innerHTML = cars.text();
