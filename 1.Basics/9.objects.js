const car = {
    type: "Fiat",
    model: "500",
    color: "white"
}

let carSpec = [car.type,car.model,car.color] //array
document.getElementById("demo").innerHTML = carSpec;

const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 24;
person.eyeColor = "green";

document.getElementById("demo").innerHTML=person["firstName"];