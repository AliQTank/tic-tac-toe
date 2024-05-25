const gameBoardObject = (() => {
    let gameBoard = [];
    let count = 0;

    const gameStatus = () => {
        const gameStarted = () => {
        }
        const gameEnded = () => {
            count++;
        }
        return {gameStarted, gameEnded}
    }

    function gameBoardStats() {
        return gameBoard;
    }
    
    const createPlayer = function({playerName, id, score}) {
        // Array.prototype.push(playerObject); //
        playerName,
        id,
        score,
        gameBoard.push({playerName, id, score});
        return gameBoard;                
    }
    return {gameStatus, gameBoardStats, createPlayer}
})()

const player1 = {
    playerName: "John Doe",
    id: "JD1",
    turn: false
}
Object.defineProperty(player1, "score", {value: 0});
const player2 = {
    playerName: "Jane Danna",
    id: "Jane",
    turn: false
}
Object.defineProperty(player2, "score", {value: 0})
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
  