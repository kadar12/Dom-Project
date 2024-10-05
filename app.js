console.log("Hello World!");
let body = document.querySelector("body");
console.log(body);

let h2 = document.createElement("h2");
h2.textContent = "This is h2 addedd using javascript";
body.appendChild(h2);

let h3 = document.createElement("h3");
h3.textContent = "This is h3 comment addedd using javascipt";
body.appendChild(h3);

let h1 = document.createElement("h1");
h1.textContent = "This is another h1 comment addedd using javascript";
body.appendChild(h1);
