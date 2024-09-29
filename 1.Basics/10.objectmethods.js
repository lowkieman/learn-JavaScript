const mine = {
    firstName : "John ",
    lastName: "Doe",
    age: 24,
    myCars : {
        car1 :"Ford",
        car2 : "BMW",
        car3 : "Fiat",
        car4 : "Toyota"
    },
    carColl : function(){ //this method
      return this.myCars.car1 + " " + this.myCars.car2 + " " + 
        this.myCars.car3 + " " + this.myCars.car4
    }
};

document.getElementById("demo").innerHTML = mine.carColl();


//adding new method to an object
mine.name = function() {
    return this.firstName + " " + this.lastName;
};

document.getElementById("demo").innerHTML=mine.name();

// using js methods
mine.name = function() { //uppercase
    return (this.firstName + " " + this.lastName).toUpperCase();
};

document.getElementById("demo").innerHTML=mine.name();
mine.name = function() { //lowercase
    return (this.firstName + " " + this.lastName).toLowerCase();
};
document.getElementById("demo").innerHTML=mine.name();
