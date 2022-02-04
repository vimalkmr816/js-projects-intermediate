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
const answersAll = document.querySelectorAll("button[id^=ans]");
const ansSection = document.getElementById("ans_section");
const ans1 = document.getElementById("ansa_btn");
const ans2 = document.getElementById("ansb_btn");
const ans3 = document.getElementById("ansc_btn");
const ans4 = document.getElementById("ansd_btn");
const nextBtn = document.getElementById("next_btn");
const restartBtn = document.getElementById("restart_btn");
const quitBtn = document.getElementById("quit_btn");

//moving to rules section
let index = 0;
let score = 0;
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
	checkAns();
}
nextBtn.addEventListener("click", function () {
	index++;
	if (index <= questions.length - 1) renderQuestion(index);
	else {
		resultSection.classList.add("active");
		qnaSection.classList.remove("active");
	}
});
// function startTimer() {}
// function timerAnimation() {}
function checkAns() {
	answersAll.forEach((curAns) => {
		curAns.addEventListener("click", (e) => {
			console.log(e);
			console.log(e.target.innerHTML);
			nextBtn.classList.toggle("active");
			if (e.target.innerHTML === questions[index].answer) {
				score++;
				console.log(score, "corect");
			}
		});
	});
}
restartBtn.addEventListener("click", () => {
	index = 0;
	score = 0;
	renderQuestion();
});
