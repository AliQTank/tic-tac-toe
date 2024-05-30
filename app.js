const gameBoardObject = (() => {
    let gameBoard = [];
    let count = 0;
    let gameInProcess = false
    let winner;

    const gameStatus = (() => {
        const gameStarted = () => {
            gameInProcess = true;
            let virtualGame = Math.random();
            if (virtualGame < .33) {
                winner = "John Doe";
            } else if (virtualGame >= .33 && virtualGame <= .66) {
                winner = "Jane Danna"
            } else {
                winner = "tie";

            }
        }
        const gameEnded = () => {
            if (!!gameInProcess) {
                gameInProcess = false;
                count++;
                //CASE PLAYER 1, PLAYER TWO, TIE, ADD TO SCORE
                switch (winner){
                    case ("John Doe"):
                        gameBoard[0].score++;
                        return `${gameBoard[0].playerName}`
                        break;
                    case ("Jane Danna"):
                        gameBoard[1].score++;
                        return `${gameBoard[1].playerName}`
                        break;
                    case ("tie"):
                        return "its a tie";
                        break
                    }

            }

            
            //CLICK OR TAP TO CLEAN BOARD FOR NEW GAME
        }

    const simCompleteGame = ()=> {
        gameStatus.gameStarted();
        gameStatus.gameEnded();
        return `${winner}`
        // gameBoardObject.gameBoardStats();
        // gameBoardObject.gamesCounter;        
    }
        const restartGame = () => {
            count = 0;
            gameBoard[0].score = 0;
            gameBoard[1].score = 0;
            gameStarted()

        }
        return {gameStarted, gameEnded, restartGame, simCompleteGame}
    })()

    const gameBoardStats = () => {
        return `${gameBoard[0].playerName} : ${gameBoard[0].score}  ${gameBoard[1].playerName} : ${gameBoard[1].score} `;
    }
    
    const createPlayer = function({playerName, id, score = 0}) {        
        playerName,
        id,
        score,
        gameBoard.push({playerName, id, score});
        // return gameBoard;                
    }

    const gamesCounter = () => count;

    return {gameStatus, gameBoardStats, createPlayer, gamesCounter}
})()

const player1 = {
    playerName: "John Doe",
    id: "JD1",
    turn: false
}

const player2 = {
    playerName: "Jane Danna",
    id: "Jane",
    turn: false
}

console.log(gameBoardObject.createPlayer(player1));
console.log(gameBoardObject.createPlayer(player2));
console.log(gameBoardObject.gameBoardStats());



// // FACTORY PATTERN
// const createUser = ({ firstName, lastName, email }) => ({
//     firstName,
//     lastName,
//     email,
//     fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   });

//   const user1 = createUser({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@doe.com",
//   });

//   const user2 = createUser({
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "jane@doe.com",
//   });

//   console.log(user1);
//   console.log(user2);

// const calculator = (function () {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
//   })();

// console.log(calculator.add(3,5))
//   calculator.add(3,5); // 8
//   calculator.sub(6,2); // 4
//   calculator.mul(14,5534); // 77476