function handleClick()
{
    alert("Button clicked!");
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("dblclick", handledblClick);

function handledblClick()
{
    alert("Button double clicked!");
}

let btn3 = document.getElementById("btn3");
btn3.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    alert("Button 3 clicked!");
};

function handleMouseOver()
{
    let e = event;
    console.log(e);
    alert("Mouse over the div!");
    console.log("Mouse over the div logged!");
}
///////////////////////////////////////////////////
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    alert("Button 4 clicked!");
});
//////////////////////////////////////////////////////////
const handler = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    alert("Button 5 clicked!");
}

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", handler);



/////////////////////////////////////////////////////
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btn6.textContent = "Switch to Light Mode";
    } else {
        btn6.textContent = "Switch to Dark Mode";
    }
});