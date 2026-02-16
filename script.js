let choices = ["Bear", "Ninja", "Hunter"];

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomIndex];

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "It's a Tie!";
  } else if (
    (playerChoice === "Bear" && computerChoice === "Ninja") ||
    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
    (playerChoice === "Hunter" && computerChoice === "Bear")
  ) {
    resultText = "You Win!";
    playerWins++;
  } else {
    resultText = "Computer Wins!";
    computerWins++;
  }

  let resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <p><strong>You chose:</strong> ${playerChoice}</p>
    <p><strong>Computer chose:</strong> ${computerChoice}</p>
    <p>${resultText}</p>
  `;

  let counterDiv = document.getElementById("counter");
  counterDiv.innerHTML = `
    Player Wins: ${playerWins} <br>
    Computer Wins: ${computerWins}
  `;

  document.getElementById("againBtn").style.display = "inline-block";
}

function resetGame() {
  document.getElementById("result").style.display = "none";
  document.getElementById("againBtn").style.display = "none";
}

