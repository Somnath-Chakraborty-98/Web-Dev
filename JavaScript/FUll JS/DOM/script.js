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