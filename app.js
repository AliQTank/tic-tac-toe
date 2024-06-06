const gameBoardObject = (() => {
    let gameBoard = Array(9);
    let gameScoreBoard = [];
    let count = 0;
    let gameInProcess = false
    // let currentPlayer; // TO TOGGLE PLAYERS TURN
    
    const gameStatus = (() => {
        let winner;
        const gameStarted = () => {
            gameInProcess = true;
            let currentPlayer;
            let virtualGame = Math.random();
            virtualGame < .33 ? winner = player1.playerName : virtualGame > .66 ? winner = player2.playerName : winner = "tie"
            virtualGame > .5 ? currentPlayer = player1.playerName : currentPlayer = player2.playerName; 
            const chooseBoardLocation = () => {
                
            }
            


            // const togglePlayer = () => { // FUNCTION TO TOGGLE PLAYERS TURN
            //     if (currentPlayer === player1.playerName) {
            //         currentPlayer === player2.playerName;
            //     } else {currentPlayer === player1.playerName}
            // }            
        }
        const gameEnded = () => {
            if (!!gameInProcess) {
                gameInProcess = false;
                count++;
                //CASE PLAYER 1, PLAYER TWO, TIE, ADD TO SCORE
                switch (winner){
                    case (player1.playerName):
                        gameScoreBoard[0].score++;
                        return `${gameScoreBoard[0].playerName}`
                        break;
                    case (player2.playerName):
                        gameScoreBoard[1].score++;
                        return `${gameScoreBoard[1].playerName}`
                        break;
                    case ("tie"):
                        return winner;
                        break
                    }
            }
        }

        const simCompleteGame = ()=> {
            gameStatus.gameStarted();
            gameStatus.gameEnded();
            return `${winner}`
                
        }
        const restartGame = () => {
            count = 0;
            gameScoreBoard[0].score = 0;
            gameScoreBoard[1].score = 0;
            gameStarted()

        }
        return {gameStarted, gameEnded, restartGame, simCompleteGame}
    })()

    const gameBoardStats = () => {
        return `${gameScoreBoard[0].playerName} : ${gameScoreBoard[0].score}  ${gameScoreBoard[1].playerName} : ${gameScoreBoard[1].score} `;
    }
    
    const createPlayer = function({playerName, id, score = 0}) {        
        playerName,
        id,
        score,
        gameScoreBoard.push({playerName, id, score});            
    }

    const gamesCounter = () => count;

    const returnGameBoard = () => gameBoard;

    return {gameStatus, gameBoardStats, createPlayer, gamesCounter, returnGameBoard}
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
// console.log(gameBoardObject.gameBoardStats());



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