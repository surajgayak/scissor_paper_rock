const mychoice = document.getElementById("mychoice");
const choice = document.getElementById("choice");
const own = document.getElementById("own");

const jesus = document.getElementById("jesus");
const button = document.querySelectorAll("button");
const game = ["rock", "scissor", "paper"];

button.forEach((response) => {
  response.addEventListener("click", () => {
    const random = Math.ceil(Math.random() * game.length - 1);
    const value = game[random];
    jesus.innerText = response.innerText;
    choice.innerText = value;

    if (jesus.innerText == "rock" && choice.innerText == "rock") {
      own.innerText = " Match Draw";
    }

    if (jesus.innerText == "scissor" && choice.innerText == "scissor") {
      own.innerText = " Match Draw";
    }

    if (jesus.innerText == "paper" && choice.innerText == "paper") {
      own.innerText = " Match Draw";
    }
    if (jesus.innerText == "rock" && choice.innerText == "scissor") {
      own.innerText = "You";
    }
    if (jesus.innerText == "scissor" && choice.innerText == "rock") {
      own.innerText = "Computer";
    }
    if (jesus.innerText == "rock" && choice.innerText == "paper") {
      own.innerText = "Computer";
    }

    if (jesus.innerText == "paper" && choice.innerText == "rock") {
      own.innerText = "You";
    }
    if (jesus.innerText == "scissor" && choice.innerText == "paper") {
      own.innerText = "You";
    }
    if (jesus.innerText == "paper" && choice.innerText == "scissor") {
      own.innerText = "You";
    }
  });
});
