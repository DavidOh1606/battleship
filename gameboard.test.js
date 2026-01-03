
const GameBoard = require("./gameboard.js");

describe("gameboard tests", () => {
    let gameboardOne;
    let gameboardTwo;

    beforeEach(() => {
        gameboardOne = new GameBoard(8, 8);
        gameboardTwo = new GameBoard(4, 12);
    });

    test("gameboard test 1", () => {
        expect(gameboardOne.board.length).toBe(8);
        expect(gameboardOne.board[0].length).toBe(8);

        expect(gameboardTwo.board.length).toBe(4);
        expect(gameboardTwo.board[0].length).toBe(12);
    });

    test("gameboard test 2", () => {
        const shipOne = new Ship(4);
        const shipTwo = new Ship(3);

        gameboardOne.placeShip(shipOne, 4, 6);

        expect(gameboardOne.board[3][6].ship).toBe(null);
        expect(gameboardOne.board[4][6].ship).toBe(shipOne);
        expect(gameboardOne.board[5][6].ship).toBe(shipOne);
        expect(gameboardOne.board[6][6].ship).toBe(shipOne);
        expect(gameboardOne.board[7][6].ship).toBe(shipOne);

        expect(() => gameboardOne.placeShip(shipTwo, 3, 6)).toThrow("Overlapping other ship");
        expect(gameboardOne.board[3][6].ship).toBe(null);

        expect(() => gameboardOne.placeShip(shipTwo, -1, -1)).toThrow("Invalid placement");
        expect(() => gameboardOne.placeShip(shipTwo, 7, 7)).toThrow("Invalid placement");
    });

    test("gameboard test 3", () => {
        const ship = new Ship(4);

        gameboardOne.placeShip(ship, 0, 0);
        gameboardOne.receiveAttack(0, 0);

        expect(ship.timesHit).toBe(1);
        expect(gameboardOne.board[0][0].hit).toBe(true);

        gameboardOne.receiveAttack(0, 1);
        expect(ship.timesHit).toBe(1);
        expect(gameboardOne.board[0][1].hit).toBe(true);

        expect(() => gameboardOne.receiveAttack(0, 0)).toThrow("Tile has already been attacked");
        expect(gameboardOne.allShipsSunk()).toBe(false);

        gameboardOne.receiveAttack(1, 0);
        gameboardOne.receiveAttack(2, 0);
        gameboardOne.receiveAttack(3, 0);

        expect(gameboardOne.allShipsSunk()).toBe(true);
    });

    test("gameboard test 4", () => {

    });
});