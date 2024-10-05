const girls = ["Ivon","Ruth","Dianah","Mary","Joan"];
const boys = ["Wilfred","Vincent","Justus","Felix","Edwin"];
const boys1 = ["Tinega","Mamboleo","Omoga","Ondanya"] 
let population = girls.concat(boys);
document.getElementById("demo").innerHTML = population.sort();
document.getElementById("demo").innerHTML = population.reverse();
document.getElementById("demo").innerHTML = population.toSorted();
document.getElementById("demo").innerHTML = population.toReversed();

//sorting of nums
const num = [200,3,4,5,6,8,900,231,432,894,543];
//ascending order
document.getElementById("demo").innerHTML = num.sort(function(a,b){
    return a - b;
});

//descending order
document.getElementById("demo").innerHTML = num.sort(function(a,b){
    return b - a;
});

//sorting an array in random order
document.getElementById("demo").innerHTML = num.sort(function(){
    return 0.5 - Math.random()
});