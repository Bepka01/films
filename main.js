const headBtn = document.querySelector(".header__btn-add");
const ulMovieList = document.querySelector(".movie-list");
const modalWindow = document.querySelector(".modal-overlay");
const btnClose = document.querySelector(".header__btn-close");
const btnModalClose = document.querySelector(".modal-close");
const modalBtnAgree = document.querySelector(".modal-agree");
const addedFilm = document.querySelector(".input__film");
const btnCancel = document.querySelector(".modal-cancel");

function addFilms() {
  const liFilm = document.createElement("li");
  liFilm.classList.add("movie-item");
  const nameFilm = document.createElement("span");
  nameFilm.classList.add("movie-title");
  nameFilm.textContent = addedFilm.value;
  if (nameFilm.textContent === "") {
    alert("Напишите название");
    return;
  }

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("movie__btn");
  btnDelete.textContent = "Удалить фильм";

  btnDelete.addEventListener("click", function deleteFilm() {
    liFilm.remove();
  });

  const checkboxId = `movie${Date.now()}`;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("movie-checkbox");
  checkbox.id = checkboxId;

  const label = document.createElement("label");
  label.classList.add("movie-label");
  label.textContent = "Просмотрено";
  label.htmlFor = checkboxId;

  liFilm.appendChild(nameFilm);
  liFilm.appendChild(checkbox);
  liFilm.appendChild(label);

  liFilm.appendChild(btnDelete);
  ulMovieList.prepend(liFilm);
  addedFilm.value = "";
  closeModalWindow();
}

const currUser = localStorage.getItem("userName");
const currPass = localStorage.getItem("userPass");
console.log("Текущее имя пользователя :", currUser);
console.log("Текущий пароль пользователя :", currPass);

function closeModalWindow() {
  modalWindow.style.display = "none";
}
btnModalClose.addEventListener("click", closeModalWindow);

function showModalWindow() {
  modalWindow.style.display = "flex";
}
headBtn.addEventListener("click", showModalWindow);

modalBtnAgree.addEventListener("click", addFilms);

addedFilm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addFilms();
  }
});

btnCancel.addEventListener("click", closeModalWindow);
