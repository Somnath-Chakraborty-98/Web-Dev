var randomVar1 = Math.floor(Math.random() * 6) + 1;
var randomVar2 = Math.floor(Math.random() * 6) + 1;
var str1 = "images/dice" + randomVar1.toString() + ".png";
var str2 = "images/dice" + randomVar2.toString()+ ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", str1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", str2);