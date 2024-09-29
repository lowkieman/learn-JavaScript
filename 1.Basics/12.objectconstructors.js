//constructor function for a Person object
function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a person object
const myFather = new Person("John","Doe", 24,"red");

//creating more persons as follows
const myMother = new Person("Wilfred", "Tinega",15,"blue");
const myBrother = new Person("Vincent", "Motari",27,"green");
const mySister = new Person("Justus","Ondanya",34,"red");

//display age
document.getElementById("demo").innerHTML =
 "My father's age is " + myFather.age + ". " + 
 "My mothers's age is" + myMother.age + ". My brother's age is "
  + myBrother.age  + ". My sister's age is " + mySister.age;