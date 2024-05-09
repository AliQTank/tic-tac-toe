const mygameBoardObject = (() => {
    let gameBoard = [];

    const initialize = () => "new game"

    function gameBoardStats() {
        return gameBoard;
    }
    
    const createPlayer = function({playerName, id}) {
        // Array.prototype.push(playerObject); //
        playerName,
        id,
        gameBoard.push({playerName, id});
        return gameBoard;                
    }
    return {initialize, gameBoardStats, createPlayer}
})()

console.log(mygameBoardObject.createPlayer({playerName: "player 1", id: "aaa"}));
console.log(mygameBoardObject.gameBoardStats());



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
  