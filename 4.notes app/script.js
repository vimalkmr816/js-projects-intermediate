//opening the menu for dark_mode

//add btn to create a new note

//save btn to save note
let index = 0;
const noteInput = document.getElementById("note_inp");

//close btn to delete notes
const closeBtn = document.getElementById("close_btn");
closeBtn.addEventListener("click", () => {
	if (index > 0) {
		index--;
		localStorage.removeItem(`${index}`);
	}
	// else {
	// 	const mtNotes = document.createElement("div");
	// 	mtNotes.innerHTML = `<span type="text" class="note_inp bg-dark border-0" id="note_input">No More Notes!!</span>`;
	// }
});

//edit btn allows to create a new note

//double clicking on note also allows to edit it
noteInput.addEventListener("dblclick", () => {
	noteInput.setAttribute("contenteditable", "true");
});

//delete all notes
const delAllNotes = document.getElementById("del_all_notes");
delAllNotes.addEventListener("click", () => {
	localStorage.clear();
});

function newNote() {
	const addBtn = document.getElementById("add_btn");
	addBtn.addEventListener("click", () => {
		noteInput.textContent = "";
		noteInput.setAttribute("contenteditable", "true");
	});
}
function editNote() {
	const editBtn = document.getElementById("edit_btn");
	editBtn.addEventListener("click", () => {
		noteInput.setAttribute("contenteditable", "true");
	});
}
function settings() {}
function deleteNote() {}
function saveNote() {
	const saveBtn = document.getElementById("save_btn");
	saveBtn.addEventListener("click", () => {
		localStorage.setItem(index++, noteInput.value);
		noteInput.setAttribute("contenteditable", "false");
	});
}
function openMenu() {
	const menuBtn = document.getElementById("menu_btn");
	const menuField = document.getElementById("menu_field");
	const closeMenuBtn = document.getElementById("close_menu_btn");
	menuBtn.addEventListener("click", () => {
		menuField.classList.add("active");
		closeMenuBtn.addEventListener("click", () => {
			menuField.classList.remove("active");
		});
	});
}
function setDarkMode() {}
function deleteAllNotes() {}
function showNotes() {}
