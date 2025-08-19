let BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

const dropdown = document.querySelectorAll(".select_currency");

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