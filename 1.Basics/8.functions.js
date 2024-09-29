function area(r,pi){
    return pi*r*r;
}

document.getElementById("demo").innerHTML=area(7,22/7);

function toCelsius(f){
    const deg2 = (5/9)*(f-32);
    document.write(deg2)
}
toCelsius(77)
/*
let value = toCelsius(77);
document.getElementById("demo").innerHTML = 
value;*/
