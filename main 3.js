let secretNum;

let score;

let procces = document.querySelector(".procces");
let scoreTxt = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let userInput = document.querySelector(".user-num");

let lang = "ru";

const againBtnTxt = () => {
  if (lang == "en") {
    return "Again";
  } else {
    return "Заново";
  }
};

const headerTxt = () => {
  if (lang == "en") {
    return "Guess My Number";
  } else {
    return "Угадай число";
  }
};

const proccesTxtG = () => {
  if (lang == "en") {
    return "Start guessing...";
  } else {
    return "Игра идёт...";
  }
};

const proccesTxtWin = () => {
  if (lang == "en") {
    return "🎉 Currect number!";
  } else {
    return "🎉 Правильно!!";
  }
};

const proccesTxtGG = () => {
  if (lang == "en") {
    return "👎 Game Over";
  } else {
    return "👎 Проиграл GG";
  }
};

const proccesTxtW = () => {
  if (lang == "en") {
    return "🚫 Wrong number!";
  } else {
    return "🚫 Неправильно";
  }
};

const proccesTxtNG = () => {
  if (lang == "en") {
    return "⚠️ No number given";
  } else {
    return "⚠️ Введите число";
  }
};

const proccesTxtL = () => {
  if (lang == "en") {
    return "📉 Number is less then 0!";
  } else {
    return "📉 Число равен или меньше 0!";
  }
};

const proccesTxtM = () => {
  if (lang == "en") {
    return "📈 Number is more then 10!";
  } else {
    return "📈 Число больше 10ти";
  }
};

const checkBtn = () => {
  if (lang == "en") {
    return "Check";
  } else {
    return "Проверить";
  }
};

const scoreText = () => {
  if (lang == "en") {
    return "Score";
  } else {
    return "Попытки";
  }
};

const highScoreTxt = () => {
  if (lang == "en") {
    return "Highscore";
  } else {
    return "Лучший результат";
  }
};

function scoreUdt() {
  scoreTxt.textContent = `${score}`;
}

highScore.textContent = "0";

function highScoreUdt() {
  highScore.textContent = `${score}`;
}

let gameEnded = false;

scoreUdt();

let btn = document.querySelector(".check-btn");

function start() {
  score = 5;
  secretNum = Math.trunc(Math.random() * 10) + 1;
  console.log(secretNum);
  procces.textContent = proccesTxtG();
  userInput.value = "";
  document.querySelector(".secretNum").textContent = "?";
  userInput.style.boxShadow = "0 0 0 0 white";
  scoreUdt();
  document.querySelector(".secretNum_bg").style.boxShadow =
    "0 0 0 0px yellowgreen";
  document.querySelector(".secretNum").style.color = "black";
  document.querySelector(".secretNum_bg").style.background = "white";
  gameEnded = false;
}

function changeLang() {
  document.querySelector(".headerText").textContent = headerTxt();
  document.querySelector(".again").textContent = againBtnTxt();
  document.querySelector(".check-btn").textContent = checkBtn();
  document.querySelector(".Stext").textContent = scoreText();
  document.querySelector(".HStext").textContent = highScoreTxt();
  if (userInput.value == secretNum) {
    document.querySelector(".procces").textContent = proccesTxtWin();
  } else if (score == 0) {
    document.querySelector(".procces").textContent = proccesTxtGG();
  } else {
    document.querySelector(".procces").textContent = proccesTxtG();
  }
  if (lang == "en") {
    document.querySelector(".langChange").textContent = "🌐EN"
  } else {
    document.querySelector(".langChange").textContent = "🌐RU"
  }
}

start();
changeLang();

document.querySelector(".again").addEventListener("click", () => {
  start();
  btn.style.transform = "scale(1)";
});

document.querySelector(".langChange").addEventListener("click", () => {
  if (lang == "en") {
    lang = "ru";
  } else {
    lang = "en";
  }
  changeLang();
});

btn.addEventListener("click", () => {
  let userNum = userInput.value;
  if (score != 0 && gameEnded == false) {
    if (!userNum) {
      procces.textContent = proccesTxtNG();
    } else if (userNum <= 0) {
      procces.textContent = proccesTxtL();
    } else if (userNum > 10) {
      procces.textContent = proccesTxtM();
    } else if (userNum == secretNum) {
      procces.textContent = proccesTxtWin();
      document.querySelector(".secretNum").textContent = secretNum;
      highScoreUdt(score);
      userInput.style.boxShadow = "0 0 15px 5px yellowgreen";
      document.querySelector(".secretNum_bg").style.boxShadow =
        "0 0 15px 5px yellowgreen";
      document.querySelector(".secretNum_bg").style.background = "yellowgreen";
      gameEnded = true;
      btn.style.transform = "scale(0)";
    } else {
      procces.textContent = proccesTxtW();
      document.querySelector(".secretNum_bg").style.boxShadow =
        "0 0 10px 5px rgb(176, 18, 18)";
      userInput.style.boxShadow = "0 0 10px 3.5px rgb(176, 18, 18)";
      score--;
      scoreUdt();
    }
  }
  if (score == 0) {
    procces.textContent = proccesTxtGG();
    gameEnded = true;
    document.querySelector(".secretNum_bg").style.boxShadow =
      "0 0 10px 5px red";
    document.querySelector(".secretNum_bg").style.background = "red";
    userInput.style.boxShadow = "0 0 15px 6px red";
    btn.style.transform = "scale(0)";
  }
});
