let procces = document.querySelector(".procces");
let scoreTxt = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let userInput = document.querySelector(".user-num");
let lang = "ru";
let secretNum;
let score;

const againBtnTxt = () => {
  if (lang == "en") {
    return "Again";
  } else {
    return "Again";
  }
};
const headerTxt = () => {
  if (lang == "en") {
    return "Guess My Number";
  } else {
    return "Guess My Number";
  }
};
const proccesTxtG = () => {
  if (lang == "en") {
    return "Start guessing...";
  } else {
    return "Start guessing and write one number";
  }
};
const proccesTxtWin = () => {
  if (lang == "en") {
    return "🎉 Currect number!";
  } else {
    return "🎉 Currect number! You won a chocolate cake! (but in your dreams )";
  }
};
const proccesTxtGG = () => {
  if (lang == "en") {
    return "👎 Game Over";
  } else {
    return "👎 Game Over. You failed";
  }
};
const proccesTxtW = () => {
  if (lang == "en") {
    return "🚫 Wrong number!";
  } else {
    return "🚫 Wrong number! Write another number";
  }
};
const proccesTxtNG = () => {
  if (lang == "en") {
    return "⚠️ No number given";
  } else {
    return "⚠️ No number given. Write qaysidur number";
  }
};
const checkBtn = () => {
  if (lang == "en") {
    return "Check";
  } else {
    return "Check";
  }
};
const scoreText = () => {
  if (lang == "en") {
    return "Score";
  } else {
    return "Score";
  }
};
const highScoreTxt = () => {
  if (lang == "en") {
    return "Highscore";
  } else {
    return "Highscore";
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
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  procces.textContent = proccesTxtG();
  userInput.value = "";
  document.querySelector(".secretNum").textContent = "?";
  userInput.style.boxShadow = "0 0 10px 1px white";
  scoreUdt();
  document.querySelector(".secretNum_bg").style.boxShadow =
    "0 0 0 0px yellowgreen";
  document.querySelector(".secretNum").style.color = "black";
  document.querySelector(".secretNum_bg").style.background = "white";
  document.querySelector(".secretNum_bg").style.boxShadow = "0 0 10px 5px white";
  document.querySelector(".secretNum_bg").style.borderRadius = "20px"
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
}
start();
document.querySelector(".again").addEventListener("click", () => {
  start();
  btn.style.transform = "scale(1)";
});
btn.addEventListener("click", () => {
  let userNum = userInput.value;
  if (score != 0 && gameEnded == false) {
    if (!userNum) {
      procces.textContent = proccesTxtNG();
    } else if (userNum <= 0) {
      procces.textContent = proccesTxtL();
    } else if (userNum == secretNum) {
      procces.textContent = proccesTxtWin();
      document.querySelector(".secretNum").textContent = secretNum;
      highScoreUdt(score);
      userInput.style.boxShadow = "0 0 15px 5px yellowgreen";
      userInput.style.border = "1px solid yellowgreen"
      document.querySelector(".secretNum_bg").style.boxShadow =
        "0 0 15px 5px yellowgreen";
      document.querySelector(".secretNum_bg").style.background = "yellowgreen";
      gameEnded = true;
      btn.style.transform = "scale(0)";
    } else {
      procces.textContent = proccesTxtW();
      document.querySelector(".secretNum_bg").style.boxShadow =
        "0 0 10px 5px rgb(176, 18, 18)";
      document.querySelector(".secretNum_bg").style.background =
      "red";
      userInput.style.boxShadow = "0 0 10px 3.5px rgb(176, 18, 18)";
      userInput.style.border = "1px solid rgb(176, 18, 18)"
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
