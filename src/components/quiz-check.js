import quizData from "./quiz-data";

const quiz = document.getElementById("quiz");
const anwserElements = document.querySelectorAll(".anwser");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

export const deselectAnwsers = () => {
    anwserElement.forEach((anwser) => (anwser.checked = false));
};


export const getSelected = () => {
    let anwser;
    anwserElements.forEach((anwserElement) => {
        if (anwserElement.checked) anwser = anwserElement.id; });
        return anwser;
};


export const loadQuiz = () => { 
    deselectAnwsers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const anwser = getSelected();
    if (anwser) {
        if (anwser === quizData[currentQuiz].correct) score++;
        currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
        quiz.innerHTML = `
        <h2>You anwsered $(score)/$(quizData.length) questions correctly </h2> 
        <button onclick="history.go(0)">Play Again</button> ` }
    }
});

