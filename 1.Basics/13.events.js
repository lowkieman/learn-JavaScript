function myFunc(){
    document.getElementById("demo").innerHTML=Date();
}
myFunc();

const myload=document.getElementById("demo");
myload.addEventListener("load",function(){
    document.getElementById("demo").innerHTML="the time is: " + new Date().getHours();
});
