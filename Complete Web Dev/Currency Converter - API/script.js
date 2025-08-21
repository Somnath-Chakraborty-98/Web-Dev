let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".select_currency");
let button = document.querySelector("#convertBtn");
let amt = document.querySelector("#amount");
let convertedAmount = document.querySelector("#converted_amt");

for (let select of dropdown) {
    for (code in countryList) {
        //console.log(code, countryList[code]);
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
        if("INR" === code && dropdown[0] == select)
            newOption.selected = "selected";
        else if("USD" === code && dropdown[1] == select)
            newOption.selected = "selected";
    }

    select.addEventListener('change', (event) => {
        updateFlag(event.target);
    });
}

const updateFlag = (element) =>{
    //console.log(element.value);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/32.png`;
    //console.log(newSrcLink);
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

button.addEventListener("click", async (event) =>{
    event.preventDefault();
    let amtVal = amt.value;
    if (amtVal === "" || amtVal < 1)
    {
        amtVal = 1;
        amt.value = "1";
    }

    console.log(amtVal);
    // BASE_URL/FROM_CURRENCY/TO_CURRENCY.json
    const URL = `${BASE_URL}/${dropdown[0].value.toLowerCase()}/${dropdown[1].value.toLowerCase()}.json`;
    console.log(URL);

    let response = await fetch(URL);
    console.log(response);
    let data = response.json();
    let rate = data[dropdown[1].value.toLowerCase()];
    console.log(rate);

    console.log(convertedAmount.innerText);
    let finalAmount = dropdown[0].value * rate;
    finalAmount = 80;
    convertedAmount.innerText = convertedAmount.innerText + ` ${finalAmount}` + `${dropdown[1].value}`;
});