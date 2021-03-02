function validate(e, regex, msgPlace) {
  let result = regex.test(e.target.value);
  result ? (msgPlace.innerHTML = "") : (msgPlace.innerHTML = "Error");
}

const regexpName = /^[A-Za-zА-Яа-я ]+$/;
let name = document.querySelector(".name");
let msgErrorName = document.querySelector(".errorName");
name.addEventListener("change", (e) => validate(e, regexpName, msgErrorName));

const regexpEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
let email = document.querySelector(".email");
let msgErrorEmail = document.querySelector(".errorEmail");
email.addEventListener("change", (e) =>
  validate(e, regexpEmail, msgErrorEmail)
);

const regexpTel = /tel/;
let tel = document.querySelector(".tel");
let msgErrorTel = document.querySelector(".errorTel");
email.addEventListener("change", (e) => validate(e, regexpTel, msgErrorTel));
