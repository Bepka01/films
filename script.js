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
    return false;
  } else {
    alert(`${inputLogin.value}, Добро пожаловать!`);

    localStorage.setItem("userName", inputLogin.value);
    localStorage.setItem("userPass", inputPassword.value);
    console.log("userName:", localStorage.getItem("userName"));
    console.log("userPass:", localStorage.getItem("userPass"));
    inputLogin.value = "";
    inputPassword.value = "";
    window.location.href = "main.html";
  }
}

inputLogin.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validFormInput();
  }
});

inputPassword.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validFormInput();
  }
});
authBtn.addEventListener("click", validFormInput);
