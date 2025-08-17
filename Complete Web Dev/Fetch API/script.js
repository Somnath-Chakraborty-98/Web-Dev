const url = "https://api.nobelprize.org/2.1/nobelPrizes";

let p = document.querySelector("p");
let rec;
const getDetails = async () => {
    console.log("getting data...");
    let response = await fetch(url);
    console.dir(response);
    let data = await response.json();
    console.log(data["nobelPrizes"][0]);
    rec = data["nobelPrizes"][0];
    p.innerText = "Award Year " + rec["awardYear"];
}

getDetails();