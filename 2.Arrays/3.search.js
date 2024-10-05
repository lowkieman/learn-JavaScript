const girls = ["Ivon","Ruth","Dianah","Mary","Joan"];
const boys = ["Wilfred","Vincent","Justus","Felix","Edwin"];
const boys1 = ["Tinega","Mamboleo","Omoga","Ondanya"] 
let population = girls.concat(boys,boys1);
document.getElementById("demo").innerHTML = population.length;

document.getElementById("demo").innerHTML = population.indexOf("Ivon");
document.getElementById("demo").innerHTML = population.lastIndexOf("Mary");
document.getElementById("demo").innerHTML = population.includes("Ruth");
if (population.includes("Ruth") !== true){
    document.getElementById("demo").style.background = "green";
}
else{
    document.getElementById("demo").style.background = "lime";
}