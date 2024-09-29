const person = {
    firstName : "John",
    lastName : "Doe",
    age : 24,
    eyeColor : "green"
}

//accessing the propeties of the object as follows
document.getElementById("demo").innerHTML = 
person.firstName + " " + person["lastName"];

//adding new properties

person.nationality = "Kisii";

document.getElementById("demo").innerHTML=person.nationality;

//deleting properties

delete person.age;

const personDetails = 
[person.firstName,person.lastName,person.age,person.eyeColor]
document.getElementById("demo").innerHTML=personDetails;

// nested objects
const mine = {
    name : "John Doe",
    age: 24,
    myCars : {
        car1 :"Ford",
        car2 : "BMW",
        car3 : "Fiat",
        car4 : "Toyota"
    }
}

const myCollections =
 [mine.name,mine.age,mine.myCars.car1,mine.myCars.car3,mine.myCars.car4]
document.getElementById("demo").innerHTML = myCollections;