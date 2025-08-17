let h1 = $("h1");
//h1.css("color", "red");
console.log(h1.css("font-size"));

h1.addClass("big-title");
h1.text("Bye");

let btns = $("button");
console.dir(btns);
//btns.css("background-color", "aquamarine");

// btns.click(function (event) {
//     alert("Button clicked: " + $(this).text()); // this = clicked button
// });

btns.on("mouseover", function (event) {
    $(this).css("color", "blue");
});

btns.on("mouseout", function () {
    $(this).css("color", "black");
});