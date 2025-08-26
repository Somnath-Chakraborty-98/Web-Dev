let questionDiv = document.querySelector(".quiz")
let questionEle = document.querySelector("#question");
let ansEle = document.querySelector("#answers");
let ansButtons = document.querySelectorAll(".btn");
let nextButton = document.querySelector("#nextBtn");

let quizResDiv = document.querySelector(".quizRes");
let quizRes = document.querySelector("#res");

let startQuiz = document.querySelector(".startQuiz");
startQuiz.addEventListener('click', () => {
    startQuiz.style.display = "none";
    questionDiv.style.display = "block";
    startWithTheQuiz();
});

let quesIndex = 0;
let score = 0;

function startWithTheQuiz(){
    quesIndex = 0;
    score = 0;

    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[quesIndex];
    let answers = currentQuestion.answers;
    console.log(answers);
    questionEle.innerText = (quesIndex + 1) + ". " + currentQuestion.question;

    ansButtons.forEach((btn, index) => {
        console.log(answers[index]);
        btn.innerText = answers[index];
    });
}