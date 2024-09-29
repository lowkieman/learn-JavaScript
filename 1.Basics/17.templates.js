let header = "Template Strings";
let tags = ["templates strings","javascript","es6"];

let html = `<h2>${header}</h2> <ul>`;

for (const x of tags){
    html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html.toLocaleUpperCase();