

//grabbing all sections with their ids
const startSection = document.getElementById('start_section');
const rulesSection = document.getElementById('rules_section');
const qnaSection = document.getElementById('qna_section');
const resultSection = document.getElementById('result_section');

//grabbing all buttons 
const startBtn = document.getElementById('start_btn');
const continueBtn = document.getElementById('continue_btn');
const exitBtn = document.getElementById('exit_btn');
const quest = document.querySelector(".question");
const answers = document.querySelectorAll(".ans");
const ans1 = document.getElementById('ans1_btn');
const ans2 = document.getElementById('ans2_btn');
const ans3 = document.getElementById('ans3_btn');
const ans4 = document.getElementById('ans4_btn');
const nextBtn = document.getElementById('next_btn');
const restartBtn = document.getElementById('restart_btn');
const quitBtn = document.getElementById('quit_btn');

//moving to rules section

renderQuiz();

function renderQuiz() {
    startQuiz();
}

function startQuiz() {
    startBtn.addEventListener("click", () => {
        rulesSection.classList.add('active');
        startSection.classList.remove('active');
        renderQuestions();
    })
}

function renderQuestions() {
    //moving to qna section
    continueBtn.addEventListener("click", () => {
        qnaSection.classList.add('active');
        rulesSection.classList.remove('active');
        // console.log(questions[0].answer);
        // console.log(clicked(answers[0]));
        questions.forEach(curQue => {
            quest.innerHTML = curQue.question;
            ans1.innerHTML = curQue.options[0];
            ans2.innerHTML = curQue.options[1];
            ans3.innerHTML = curQue.options[2];
            ans4.innerHTML = curQue.options[3];
            // console.log(curQue.numb);
            // answers.forEach(ans => {
            //     clicked(ans);
            //     if (clicked(ans) === questions[curQue].answer) {
            //         // renderNextQuestion();
            //         console.log(ans, "congrats");
            //     }
            // });
        })
    })
}
// function renderNextQuestion()

function clicked(curBtn) {
    // document.
    curBtn.addEventListener('click', (e) => {
        // console.log(curBtn, "this is my answer");
        return (e.target);
    })
    // return 0;
}
