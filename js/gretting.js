const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  var greetText;
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours >= 7 && hours <= 11) {
    greetText = "Good morning!";
  } else if (hours > 11 && hours <= 16) {
    greetText = "Good afternoon!";
  } else if (hours > 16 && hours <= 20) {
    greetText = "Good evening!";
  } else if (hours > 20 && hours <= 24) {
    greetText = "Good night!";
  } else {
    greetText = "Hello.";
  }
  gretting.innerText = `${greetText} ${text}`;
  console.log(hours);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    //   she is not
    askForName();
  } else {
    //   she is
    paintGretting(currentUser);
  }
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function init() {
  loadName();
}

init();
