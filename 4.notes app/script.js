const menuBtn = document.getElementById("menu_btn");
const main = document.getElementById("main");
const menuField = document.getElementById("menu_field");
const closeMenuBtn = document.getElementById("close_menu_btn");

//opening the menu for dark_mode
menuBtn.addEventListener("click", () => {
	menuField.classList.add("active");
	closeMenuBtn.addEventListener("click", () => {
		menuField.classList.remove("active");
	});
});

const addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", () => {
	console.log("add btn works");
});
const saveBtn = document.getElementById("save_btn");
const noteInput = document.getElementById("note_input");
let index = 0;
// const note = [];
saveBtn.addEventListener("click", () => {
	localStorage.setItem(index++, noteInput.innerText);
});

const closeBtn = document.getElementById("close_btn");
closeBtn.addEventListener("click", () => {
	if (index > 0) {
		index--;
		localStorage.removeItem(`${index}`);
	}
});
