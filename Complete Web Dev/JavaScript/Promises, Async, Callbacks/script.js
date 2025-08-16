// set time out
console.log("one");
setTimeout( () =>{
    console.log("hello");
}, 3000
);
console.log("two");

// callback
function sum(a, b){
    console.log("Sum function");
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    console.log("Calculator function");
    sumCallback(a, b);
}

calculator(1, 2, sum);

/////////////////////////////////////////////////////////////////////
// callback and set time out
// callback hell
function getData(nId, getNextData){
    setTimeout(() =>{

        console.log("data", nId);
        if(getNextData)
            getNextData();

    }, 3000);
}

getData(1, () =>{
    getData(2, () =>{
        getData(3);
    })
});

//////////////////////////////////////////////////////////////////////