let user = Number(document.getElementById("choice"));
//let btn = document.getElementById("play");
let comp = document.getElementById("compChoice");
let result = document.getElementById("result");

function run() {
  let compChoice = (Math.floor(Math.random() * 3));
  comp.value = compChoice;
  if (user.value == compChoice) {
    result.value = "No score";
  }
  else if (user.value == 0 && compChoice == 1 || user.value == 2 && compChoice == 0 || user.value == 1 && compChoice == 2) {
    result.value = "you loose";

  }
  else {
    result.value = "you win and computer looses";
  }

}
