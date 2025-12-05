const inputLogin = document.querySelector(".authorization__login");
const inputPassword = document.querySelector(".authorization__password");
const authBtn = document.querySelector(".btn__auth");

function validFormInput() {
  if (inputLogin.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("Заполните форму");
    return false;
  }
  if (inputPassword.value.length < 6) {
    alert("Пароль должен содержать минимум 6 символов");
  } else {
    alert(`${inputLogin.value}, Добро пожаловать!`);
    inputLogin.value = "";
    inputPassword.value = "";
  }
}

authBtn.addEventListener("click", validFormInput);
