const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const digitChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?,.";

let passLength = document.querySelector("#length");
let lengthValue = document.querySelector("#lengthValue");

const savedLength = localStorage.getItem("passwordLength");
if (savedLength) {
    passLength.value = savedLength;
    lengthValue.textContent = savedLength;
} else {
    lengthValue.textContent = passLength.value;
}

passLength.addEventListener("input", () => {
    lengthValue.textContent = passLength.value;
    localStorage.setItem("passwordLength", passLength.value);
});

let includeUpperCase = document.getElementById("upper");
let includeLowerCase = document.getElementById("lower");
let includeDigits = document.getElementById("digits");
let includeSymbols = document.getElementById("symbols");

let storedInclude = localStorage.getItem("include");

if (storedInclude) {
    // Parse JSON string → back to object
    let includeObj = JSON.parse(storedInclude);

    includeUpperCase.checked = includeObj.upper;
    includeLowerCase.checked = includeObj.lower;
    includeDigits.checked = includeObj.digits;
    includeSymbols.checked = includeObj.symbols;
}

let genPassword = document.getElementById("generate");
genPassword.addEventListener("click", generatePassword);

let copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {

    let generatedPassword = document.getElementById("password").value;
    if (0 === generatedPassword.length) {
        alert("No password to copy!");
        return;
    }

    // Copy to clipboard
    navigator.clipboard.writeText(generatedPassword)
        .then(() => {
            alert("Password copied to clipboard ✅");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});

function generatePassword() {
    if (!includeUpperCase.checked && !includeLowerCase.checked && !includeDigits.checked && !includeSymbols.checked) {
        alert("Cannot generate password. You need to select at least one character type (uppercase, lowercase, numbers, or symbols).");
        return;
    }

    let includeCharTypes = {
        "upper": includeUpperCase.checked,
        "lower": includeLowerCase.checked,
        "digits": includeDigits.checked,
        "symbols": includeSymbols.checked
    };

    localStorage.setItem("include", JSON.stringify(includeCharTypes));

    // Build pool of allowed characters
    let charPool = "";
    if (includeCharTypes.upper) charPool += upperChars;
    if (includeCharTypes.lower) charPool += lowerChars;
    if (includeCharTypes.digits) charPool += digitChars;
    if (includeCharTypes.symbols) charPool += symbolChars;

    // Generate random password
    let password = "";
    let len = parseInt(passLength.value);
    for (let i = 0; i < len; i++) {
        let randIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randIndex];
    }

    let generatedPassword = document.getElementById("password");
    generatedPassword.value = password;
}