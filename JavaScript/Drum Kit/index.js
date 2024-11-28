// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick()
// {
//     alert("Clicked");
 
// }

// document.querySelector(".w").addEventListener("click", function (){
//     alert("Clicked w");
// });

// document.querySelector(".a").addEventListener("click", function (){
//     alert("Clicked a");
// });

// document.querySelector(".s").addEventListener("click", function (){
//     alert("Clicked s");
// });

// document.querySelector(".d").addEventListener("click", function (){
//     alert("Clicked d");
// });

// document.querySelector(".j").addEventListener("click", function (){
//     alert("Clicked j");
// });

// document.querySelector(".k").addEventListener("click", function (){
//     alert("Clicked k");
// });

// document.querySelector(".l").addEventListener("click", function (){
//     alert("Clicked l");
// });


/*

*/

const vecQuerySelClass = [".w", ".a", ".s", ".d", ".j", ".k", ".l"]; // document.queryslectorAll(".drum").length;

var s = "";
for (let s in vecQuerySelClass)
{
    document.querySelector(vecQuerySelClass[s]).addEventListener("click", function (){
        alert("Clicked " + vecQuerySelClass[s].toString());
    });
}