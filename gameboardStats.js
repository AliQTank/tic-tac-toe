const VisualStatsGameboard = document.getElementById("gameboardStats");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const board = document.getElementById("board");
const h2p1 = document.createElement("h2");
const h2p2 = document.createElement("h2");
const scorep1 = document.createElement("p");
const scorep2 = document.createElement("p");
const buttonToStartNewRound = document.createElement("button");
const howManyGamesPlayed = document.createElement("p");
const currentPlayerIndicator = document.createElement("p"); //NOT USED YET
buttonToStartNewRound.innerText = "start".toUpperCase();
buttonToStartNewRound.addEventListener("click", cleanAndRemove);
buttonToStartNewRound.addEventListener("click", addStarter);
howManyGamesPlayed.innerText = `games played so far: ${gameBoardObject.gamesCounter()}`;
h2p1.innerText = gameBoardObject.player1Name();
h2p2.innerText = gameBoardObject.player2Name();
scorep1.innerText = gameBoardObject.player1Score();
scorep2.innerText = gameBoardObject.player2Score();
currentPlayerIndicator.innerText = "game not started"
player1.appendChild(h2p1);
player1.appendChild(scorep1);
player2.appendChild(h2p2);
player2.appendChild(scorep2);
board.appendChild(buttonToStartNewRound);
board.appendChild(howManyGamesPlayed);
board.appendChild(currentPlayerIndicator);
