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

// var s = "";
// for (let s in vecQuerySelClass)
// {
//     document.querySelector(vecQuerySelClass[s]).addEventListener("click", function (){
//         alert("Clicked " + vecQuerySelClass[s].toString()
//         );
//     });
// }

var s = "";
var audio;
var color;
for (let s in vecQuerySelClass)
{
    document.querySelector(vecQuerySelClass[s]).addEventListener("click", function (){
        //alert("Clicked " + vecQuerySelClass[s].toString());

        //color = this.style.color;
        //this.style.color = "white";
        audio = new Audio();
        
        if (".w" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/tom-1.mp3');
        } 
        else if (".a" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/tom-2.mp3');
        }
        else if (".s" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/tom-3.mp3');
        }
        else if (".d" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/tom-4.mp3');
        }
        else if (".j" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/snare.mp3');
        }
        else if (".k" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/crash.mp3');
        }
        else if (".l" == vecQuerySelClass[s].toString()) {
            audio = new Audio('./sounds/kick-bass.mp3');
        }
        //this.style.color = color;
        audio.play();
    });
}