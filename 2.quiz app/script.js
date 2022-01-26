// i dont know what to write yet

//grabbing all sections with their ids
const startSection = document.getElementById('start_section');
const rulesSection = document.getElementById('rules_section');
const qnaSection = document.getElementById('qna_section');
const resultSection = document.getElementById('result_section');

//grabbing all buttons 
const startBtn = document.getElementById('start_btn');
const continueBtn = document.getElementById('continue_btn');
const exitBtn = document.getElementById('exit_btn');
const ans1 = document.getElementById('ans1_btn');
const ans2 = document.getElementById('ans2_btn');
const ans3 = document.getElementById('ans3_btn');
const ans4 = document.getElementById('ans4_btn');
const nextBtn = document.getElementById('next_btn');
const restartBtn = document.getElementById('restart_btn');
const quitBtn = document.getElementById('quit_btn');


startBtn.addEventListener("click", () => {
    rulesSection.classList.add('active');
    startSection.classList.remove('active');
})
continueBtn.addEventListener("click", () => {
    qnaSection.classList.add('active');
    console.log("0");
    rulesSection.classList.remove('active');
    console.log("1");
})