//grabbing all sections with their ids
const startSection = document.getElementById("start_section");
const rulesSection = document.getElementById("rules_section");
const qnaSection = document.getElementById("qna_section");
const resultSection = document.getElementById("result_section");

//grabbing all buttons
const startBtn = document.getElementById("start_btn");
const continueBtn = document.getElementById("continue_btn");
const exitBtn = document.getElementById("exit_btn");
const quest = document.querySelector(".question");
const answers = document.querySelectorAll(".ans");
const ans1 = document.getElementById("ans1_btn");

const ans2 = document.getElementById("ans2_btn");
const ans3 = document.getElementById("ans3_btn");
const ans4 = document.getElementById("ans4_btn");
const nextBtn = document.getElementById("next_btn");
const restartBtn = document.getElementById("restart_btn");
const quitBtn = document.getElementById("quit_btn");

//moving to rules section
let index = 0;

renderQuiz();

function renderQuiz() {
	startBtn.addEventListener("click", () => {
		startSection.classList.remove("active");
		rulesSection.classList.add("active");
		startQuiz();
	});
}

function startQuiz() {
	continueBtn.addEventListener("click", () => {
		rulesSection.classList.remove("active");
		qnaSection.classList.add("active");
		renderQuestion(index);
	});
}
function renderQuestion(index) {
	//remove next btn until ans is selected
	quest.innerHTML = questions[index].question;
	ans1.innerHTML = questions[index].options[0];
	ans2.innerHTML = questions[index].options[1];
	ans3.innerHTML = questions[index].options[2];
	ans4.innerHTML = questions[index].options[3];
	answers.addEventListener("click", () => {
		nextBtn.classList.add("active");
	});
}
nextBtn.addEventListener("click", function () {
	console.log(index, questions.length - 1);
	index++;
	if (index <= questions.length - 1) renderQuestion(index);
	else {
		resultSection.classList.add("active");
		qnaSection.classList.remove("active");
	}
});
function startTimer() {}
function timerAnimation() {}
function checkAns() {}
