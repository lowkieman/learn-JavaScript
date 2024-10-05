const num = [45, 4, 9, 15, 29];
let text = "";

//forEach()
num.forEach(myFunc);

function myFunc(value, index,array){
    text += value + "<br>"
}

document.getElementById("demo").innerHTML = text;

//map()
const num2 = num.map(myFunction)
function myFunction(value, index, array){
    return value * 2;
}
document.getElementById("demo").innerHTML = num2;