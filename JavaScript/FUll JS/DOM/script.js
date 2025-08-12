console.log("hello");
//alert("Somnath");

console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1]);

// ID should be unique
console.log("ID");
document.body.childNodes[1].innerText = "AI";
let para = document.getElementById("para");
console.dir(para);

// class can be given to multiple elements
console.log("CLASS");
let aa = document.getElementsByClassName("aa");
console.dir(aa);

// tags get all elements of same tag
console.log("TAG");
let b = document.getElementsByTagName("p");
console.dir(b);

//query selector we can get #ID/.CLASS/TAG
console.log("QUERY SELECTOR TAG");
let a = document.querySelector("p");
console.dir(a);

console.log("QUERY SELECTOR ALL TAG");
let c = document.querySelectorAll("p");
console.dir(c);

console.log("QUERY SELECTOR #ID");
let d = document.querySelector("#para");
//let d = document.querySelector("para"); both are same as ID used only once
console.dir(d);

console.log("QUERY SELECTOR ALL .CLASS");
let e = document.querySelectorAll(".aa");
console.dir(e);

console.log("FIRST CHILD");
let f = document.firstChild;
console.dir(f);

console.log("CHILDREN");
let g = document.querySelector("p").children;
console.dir(g);

console.log("LAST CHILD");
let h = document.lastChild;
console.dir(h);

console.log("DIV INNER TEXT");
let div = document.querySelector("div");
console.dir(div.innerText);

console.log("DIV INNER HTML");
console.dir(div.innerHTML);

div.innerHTML = "<ul><li>abcd</li><li>a</li><li>b</li></ul>";

console.log("DIV WITH CHANGED INNER HTML");
console.dir(div.innerHTML);

console.log("HIDDEN ELEMNT");
let h2 = document.querySelector("h2");
console.dir(h2.innerText); // hidden cannot be viwed by inner text
console.dir(h2.style);


console.log("GET SET ATTRIBUTE AND STYLE");
let h3 = document.querySelector(".h33");
console.dir(h3.innerText);
console.dir(h3.getAttribute("class"));
h3.setAttribute("class", "h3");
console.dir(h3.getAttribute("class"));
console.dir(h3.style);
//h3.style.alignItems = "center";
h3.style.backgroundColour = "red";
console.dir(h3.style);

console.log("NEW ELEMENT FROM JS - APPEND, PREPEND, AFTER ...");
let newBtn = document.createElement("button");
newBtn.innerText = "NEW ELEMNT BY JS";
newBtn.style.background = "red";
newBtn.id = "btn1";

//div.append(newBtn);
//div.prepend(newBtn);
div.after(newBtn);

// Check appendChild and deleteChild

//////////////////////////////////////////////////////////////////////////////

console.log("ANS");
let ans1 = document.querySelectorAll("h2")[1];
ans1.innerText = ans1.innerText + " from Somnath";
console.dir(ans1.innerText);