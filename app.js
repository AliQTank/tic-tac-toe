const gameBoardObject = (() => {
    let gameBoard = Array(9).fill(undefined);
    let gameScoreBoard = [];
    let count = 0;
    let gameInProcess = false
    let currentPlayer; // VARIABLE TO TOGGLE PLAYERS TURN
    
    const gameStatus = (() => {        
        let winner = undefined, tie ="its a tie";
        const gameStarted = () => {
            if (!!gameInProcess) {
            } else if (!!currentPlayer) {
                gameInProcess = true;
                return currentPlayer;
            } else {
                gameInProcess = true;
                let virtualGame = Math.random();
                currentPlayer = virtualGame > .5 ? currentPlayer = gameScoreBoard[0].playerName : currentPlayer = gameScoreBoard[1].playerName; 
                return currentPlayer;
                // winner = currentPlayer;
                }            
        }
        const gameInProgress = () => {  
            const togglePlayer = () => { // FUNCTION TO TOGGLE PLAYERS TURN
                currentPlayer === gameScoreBoard[0].playerName ? currentPlayer = gameScoreBoard[1].playerName : currentPlayer = gameScoreBoard[0].playerName            
            }
            const chooseBoardLocation = (indexOfGameboard) => {
                if (!!gameInProcess && !gameBoard[indexOfGameboard] && !winner) {
                    gameBoard[indexOfGameboard] = currentPlayer;
                    togglePlayer();
                    doWeGotAWinner();
                    return gameBoard                
                }   
            };
            const doWeGotAWinner = () => {
                const checkPlayer1 = player => player === firstPlayer;
                const checkPlayer2 = player => player === secondPlayer;
                const noMoreCellsAvailable = player => player !== undefined;
                let firstPlayer = gameScoreBoard[0].playerName, secondPlayer = gameScoreBoard[1].playerName;
                let firstRow =  gameBoard.slice(0, 3), secondRow  = gameBoard.slice(3, 6), thirdRow = gameBoard.slice(6);
                let firstColumn = [].concat(firstRow[0], secondRow[0], thirdRow[0]);
                let secondColumn = [].concat(firstRow[1], secondRow[1], thirdRow[1]);
                let thirdColumn = [].concat(firstRow[2], secondRow[2], thirdRow[2]);
                let cross1 = [].concat(firstRow[0], secondRow[1], thirdRow[2]);
                let cross2 = [].concat(thirdRow[0], secondRow[1], firstRow[2]);
                const checkAndCheckers = (() => {
                    if (firstRow.every(checkPlayer1) || secondRow.every(checkPlayer1) ||
                        thirdRow.every(checkPlayer1) || firstColumn.every(checkPlayer1) ||
                        secondColumn.every(checkPlayer1) || thirdColumn.every(checkPlayer1) ||
                        cross1.every(checkPlayer1) || cross2.every(checkPlayer1)) {
                            winner = gameScoreBoard[0].playerName;
                            console.log(winner);
                            return winner;
                    } else if (firstRow.every(checkPlayer2) || secondRow.every(checkPlayer2) ||
                                thirdRow.every(checkPlayer2) || firstColumn.every(checkPlayer2) ||
                                secondColumn.every(checkPlayer2) || thirdColumn.every(checkPlayer2) ||
                                cross1.every(checkPlayer2) || cross2.every(checkPlayer2)) {
                                    winner = gameScoreBoard[1].playerName;
                                    console.log(winner);
                                    return winner;
                    } else if (gameBoard.every(noMoreCellsAvailable)) {
                        winner = tie;
                        console.log(winner);
                        return winner}                  
                }) ()      
                return {checkAndCheckers}
            }
            const arraySplitter = () => gameBoard.filter(e => e != "");

            return {chooseBoardLocation, /*doWeGotAWinner,*/ arraySplitter}
        }
        const gameEnded = () => {
            if (!!gameInProcess) {
                let thisWinner = winner;
                winner = undefined
                gameBoard = Array(9).fill(undefined);
                gameInProcess = false;
                count++;
                //CASE PLAYER 1, PLAYER TWO, TIE, ADD TO SCORE
                switch (thisWinner){
                    case (gameScoreBoard[0].playerName):
                        gameScoreBoard[0].score++;                        
                        // return `${gameScoreBoard[0].playerName}`
                        return `${gameScoreBoard[0].playerName}: ${gameScoreBoard[0].score} ${gameScoreBoard[1].playerName}: ${gameScoreBoard[1].score} `
                        break;
                    case (gameScoreBoard[1].playerName):
                        gameScoreBoard[1].score++;                        
                        // return `${gameScoreBoard[1].playerName}`
                        return `${gameScoreBoard[0].playerName}: ${gameScoreBoard[0].score} ${gameScoreBoard[1].playerName}: ${gameScoreBoard[1].score}`
                        break;
                    case (tie):                        
                        return tie;
                        break
                    }                    
            }
        }

        const simCompleteGame = ()=> {
            // gameStatus.gameStarted();
            console.log(gameStarted());
            console.log(gameInProgress().chooseBoardLocation(8));
            console.log(gameInProgress().chooseBoardLocation(1));
            console.log(gameInProgress().chooseBoardLocation(7));
            console.log(gameInProgress().chooseBoardLocation(5));
            console.log(gameInProgress().chooseBoardLocation(6));
            // console.log(gameInProgress().doWeGotAWinner());   
            console.log(gameEnded());          
        }
        const restartGame = () => {
            gameInProcess = false
            count = 0;
            gameScoreBoard[0].score = 0;
            gameScoreBoard[1].score = 0;
            gameBoard = Array(9).fill(undefined);            
        }
        return {gameStarted, gameInProgress, gameEnded, restartGame, simCompleteGame}
    })()

    const gameBoardStats = () => {
        return `${gameScoreBoard[0].playerName} : ${gameScoreBoard[0].score}  ${gameScoreBoard[1].playerName} : ${gameScoreBoard[1].score} `;
    }
    
    const createPlayer = function({playerName, id, score = 0}) {        
        playerName, id, score,
        gameScoreBoard.push({playerName, id, score});            
    }

    const gamesCounter = () => count;

    const returnGameBoard = () => gameBoard;

    const retCurrentPlayer = () => currentPlayer;

    return {gameStatus, gameBoardStats, createPlayer, gamesCounter, returnGameBoard, retCurrentPlayer}
})()


const initialitation = (() => {
    const playerone = {playerName: "O", id: "JD1", turn: false};
    const playertwo = {playerName: "X", id: "Jane", turn: false};
    console.log(gameBoardObject.createPlayer(playerone));
    console.log(gameBoardObject.createPlayer(playertwo));    
})();

// console.log(gameBoardObject.gameStatus.gameStarted());



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
// https://cert.efset.org/cYpJxP <-----------------ENLACE DE CERTIFICADO QUBA INGLES C2