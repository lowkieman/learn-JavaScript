let text = "Hello, I love coding in \f JS.";
textFormat=text.toUpperCase();
document.getElementById("demo").innerHTML = 
textFormat;

//template string

const text2 = 
`the quick way to get poorer 
is to love women
than you love yourself`
document.getElementById("demo").innerHTML = text2.toLocaleUpperCase();
