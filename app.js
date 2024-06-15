const gameBoardObject = (() => {
    let gameBoard = Array(9);
    let gameScoreBoard = [];
    let count = 0;
    let gameInProcess = false
    let currentPlayer; // VARIABLE TO TOGGLE PLAYERS TURN
    
    const gameStatus = (() => {
        
        let winner;
        const gameStarted = () => {
            gameInProcess = true;
            let virtualGame = Math.random();
            // virtualGame < .33 ? winner = player1.playerName : virtualGame > .66 ? winner = player2.playerName : winner = "tie"
            currentPlayer = virtualGame > .5 ? currentPlayer = player1.playerName : currentPlayer = player2.playerName; 
            // winner = currentPlayer;                                
        }
        const gameInProgress = () => {  
            const togglePlayer = () => { // FUNCTION TO TOGGLE PLAYERS TURN
                currentPlayer === player1.playerName ? currentPlayer = player2.playerName : currentPlayer = player1.playerName            
            }
            const chooseBoardLocation = (indexOfGameboard) => {
                if (!!gameInProcess && !gameBoard[indexOfGameboard]) {
                    gameBoard[indexOfGameboard] = currentPlayer;
                    togglePlayer();  
                    return gameBoard                
                }   
            };
            const doWeGotAWinner = () => {
                const checkPlayer1 = (player) => {
                    if (player === firstPlayer) {return true}
                }
                const checkPlayer2 = (player) => {
                    if (player === secondPlayer) {return true}
                }
                let firstPlayer = player1.playerName;
                let secondPlayer = player2.playerName;
                let firstRow =  gameBoard.slice(0, 3);
                let secondRow  = gameBoard.slice(3, 6);
                let thirdRow = gameBoard.slice(6);
                let firstColumn = [].concat(firstRow[0]).concat(secondRow[0]).concat(thirdRow[0])
                let secondColumn = [].concat(firstRow[1]).concat(secondRow[1]).concat(thirdRow[1]);
                let thirdColumn = [].concat(firstRow[2]).concat(secondRow[2]).concat(thirdRow[2]);
                let cross1 = [].concat(firstRow[0]).concat(secondRow[1]).concat(thirdRow[2]);
                let cross2 = [].concat(thirdRow[0]).concat(secondRow[1]).concat(firstRow[2]);
                if (firstRow.every(checkPlayer1) || secondRow.every(checkPlayer1) || thirdRow.every(checkPlayer1) 
                    || firstColumn.every(checkPlayer1) || secondColumn.every(checkPlayer1) || thirdColumn.every(checkPlayer1) 
                    || cross1.every(checkPlayer1) || cross2.every(checkPlayer1)) {
                    winner = firstPlayer;
                    return winner
                    gameEnded()}
                else if (firstRow.every(checkPlayer2) || secondRow.every(checkPlayer2) || thirdRow.every(checkPlayer2) 
                    || firstColumn.every(checkPlayer2) || secondColumn.every(checkPlayer2) || thirdColumn.every(checkPlayer2) 
                    || cross1.every(checkPlayer2) || cross2.every(checkPlayer2)) {
                    winner = secondPlayer;
                    return winner
                    }
                // console.log({firstRow, secondRow, thirdRow, firstColumn, secondColumn, thirdColumn, cross1, cross2});

                // const filteredGameBoard = gameBoard.filter(e)
                // return filteredGameBoard 
                // if(gameBoard[indexOfGameboard] === 0 ||
                //     gameBoard[indexOfGameboard] === 3 ||
                //     gameBoard[indexOfGameboard] === 6) {
                //         if (gameBoard[indexOfGameboard] === gameBoard[indexOfGameboard + 1] && 
                //             gameBoard[indexOfGameboard] === gameBoard[indexOfGameboard + 2]) { 
                //                 if (gameBoard[indexOfGameboard] === 0 || 
                //                     gameBoard[indexOfGameboard] === 3 || 
                //                     gameBoard[indexOfGameboard] === 6) {
                //                         winner = gameBoard[indexOfGameboard];
                //                     }
                //             }
                //     }
            }

            const arraySplitter = () => {
                return gameBoard.filter(e => e != "");
            }
            return {chooseBoardLocation, doWeGotAWinner, arraySplitter}
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
            gameStatus.gameInProgress().chooseBoardLocation(0);
            gameStatus.gameInProgress().chooseBoardLocation(8);
            gameStatus.gameInProgress().chooseBoardLocation(1);
            gameStatus.gameInProgress().chooseBoardLocation(7);
            gameStatus.gameInProgress().chooseBoardLocation(5);
            gameStatus.gameInProgress().chooseBoardLocation(6);  
            doWeGotAWinner()         
            // return `${winner}`
                
        }
        const restartGame = () => {
            count = 0;
            gameScoreBoard[0].score = 0;
            gameScoreBoard[1].score = 0;
            gameStarted()

        }
        return {gameStarted, gameInProgress, gameEnded, restartGame, simCompleteGame}
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