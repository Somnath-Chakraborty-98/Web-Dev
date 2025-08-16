const draw = {
    strText: "It's a draw",
    bgColour: "darkslategray"
};

const won = {
    strText: "You won",
    bgColour: "green"
};

const lost = {
    strText: "You Lost",
    bgColour: "red"
};

const resultTexts = {
  rockScissors: "Rock beats Scissors",
  paperRock: "Paper beats Rock",
  scissorsPaper: "Scissors beats Paper",
};

  const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let compScore = 0;

let usersChoice = 0;
let compsChoice = 0;

let btnClick = document.querySelectorAll(".btn");
let resultBox = document.querySelector(".move h3");

btnClick.forEach(div => {
  div.addEventListener("click", () => {
    handleChoice(div.id);
  });
});

function handleChoice(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    resultBox.textContent = `${draw.strText} (Both chose ${playerChoice})`;
    resultBox.style.backgroundColor = draw.bgColour;
    return;
  }

  // Player wins cases
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    resultBox.textContent = `${won.strText}! ${resultTexts[playerChoice + capitalize(computerChoice)]}`;
    resultBox.style.backgroundColor = won.bgColour;
  } else {
    compScore++;
    document.getElementById("comp-score").textContent = compScore;
    resultBox.textContent = `${lost.strText}! ${resultTexts[computerChoice + capitalize(playerChoice)]}`;
    resultBox.style.backgroundColor = lost.bgColour;
  }
}

// helper: capitalize first letter (to match keys in resultTexts)
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


