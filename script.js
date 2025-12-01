const HeadBtn = document.querySelector(".header__btn-add");
const ulMovieList = document.querySelector(".movie-list");
const deleteFilm = document.querySelector(".movie__btn");

function addFilms() {
  const addedFilm = prompt("Какой фильм вы хотите добавить");
  if (!addedFilm) return;

  const liFilm = document.createElement("li");
  liFilm.classList.add("movie-item");
  const nameFilm = document.createElement("span");
  nameFilm.classList.add("movie-title");
  nameFilm.textContent = addedFilm;

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
  liFilm.appendChild(btnDelete);
  liFilm.appendChild(checkbox);
  liFilm.appendChild(label);

  ulMovieList.appendChild(liFilm);
}

HeadBtn.addEventListener("click", addFilms);
