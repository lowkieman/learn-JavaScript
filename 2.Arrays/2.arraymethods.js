const fruits = ["Bananas","Oranges","Apples","Mango"];
//array.length
document.getElementById("demo").innerHTML = fruits.length; 

//array.toString()
document.getElementById("demo").innerHTML = fruits.toString();

//array.at() it gives next element in the array
document.getElementById("demo").innerHTML = fruits.at(0);

//array.join()
document.getElementById("demo").innerHTML = fruits.join(" & ");

//array.pop()-removes the last element in the array
document.getElementById("demo").innerHTML = fruits.pop(); //returns popped out element

//array.push()- add a new elem at end
fruits.push("Pineapples","Berries")
document.getElementById("demo").innerHTML = fruits.length;

//array.shift() and array.unshift()- this works on first elem to remove and add
const fruit1 = fruits.shift();             //returns the shifted out element
const fruit2 = fruits.unshift("Guavas");

document.getElementById("demo").innerHTML = fruits;

//merging arrays using concatenating concat()
const girls = ["Ivon","Ruth","Dianah","Mary","Joan"];
const boys = ["Wilfred","Vincent","Justus","Felix","Edwin"];
const boys1 = ["Tinega","Mamboleo","Omoga","Ondanya"] 
let population = girls.concat(boys);
document.getElementById("demo").innerHTML = population.length;

//array.copyWithin() - copies the element from one index to anotther
document.getElementById("demo").innerHTML = girls.copyWithin(1,4);

//array.flat()
const num = [[1, 2], [3, 4], [5, 6]];
const num2 = num.flat();
document.getElementById("demo").innerHTML = num2;

//array.flatmap()
const num3 = [1, 2, 3, 4, 5, 6];
const num4 = num3.flatMap(x => [x, x*10]);
document.getElementById("demo").innerHTML = num4;

//splicing anf slicing arrays
document.getElementById("demo").innerHTML = girls;
const moreGirls = girls.splice("Purity");
document.getElementById("demo").innerHTML = moreGirls;