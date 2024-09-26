document.getElementById("light").style.display="none";
function turnOnLights(){
    document.getElementById("dark").style.display="none"
    document.getElementById("light").style.display="inline-block";
}

function turnOffLights(){
    document.getElementById("dark").style.display="inline-block"
    document.getElementById("light").style.display="none";
}
if (time=1000){
    const turnOn=setTimeout(turnOnLights,1000);
}
else{
    const turnOff=setTimeout(turnOffLights,40000)
}

