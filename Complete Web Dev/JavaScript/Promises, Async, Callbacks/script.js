// set time out
/*console.log("one");
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
// promise

let promise = new Promise((resolve, reject) =>{
    console.log("promise start");
    resolve("success");
    //reject("some error");
});

console.dir(promise);

function getData1(nId, getNextData1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", nId);
            resolve("Success");
            console.dir(data);
            if (getNextData1)
                getNextData1();
        }, 8000);
    }
    );
}

let data = getData1(123);

const getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("PROMISE");
        resolve("DONE");
        //reject("NOT DONE");
    });
}

let pro = getPromise();

pro.then((res) => {
    console.log("Completed", res);
});

pro.catch((err) => {
    console.log("ERROR", err);
});
*/
///////////////////////////////////////////////////////////////////////////
// promise chain

function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success");
        }, 4000);
    });
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2");
            resolve("Successfull");
        }, 4000);
    });
}

console.log("fetching data 1");
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res);
    console.dir(p1);

    console.log("fetching data 2");
    let p2 = asyncFun2();
    p2.then((res) => {
        console.log(res);
        console.dir(p1);
    });
});



