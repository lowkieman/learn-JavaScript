//it is a block level scope ie
function myLove(){
    let myName="mamboleo";
    var lastName="tinega";
    const firstName="wilfred"
    document.write(myName)
}
//myName can't be used here
myLove();

document.getElementById("demo").innerHTML=lastName;
document.getElementById("demo").innerHTML = firstName