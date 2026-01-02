const Ship = require("./ship.js");
const GameBoard = require("./gameboard.js");
const Player = require("./player.js");


describe("ship tests", () => {
    let shipOne;
    let shipTwo;
    let shipThree;
    let shipFour;

    beforeEach(() => {
        shipOne = new Ship(4);
        shipTwo = new Ship(3);
        shipThree = new Ship(2);
        shipFour = new Ship(1);

    })

    test("ship test 1", () => {
        expect(shipOne.length).toBe(4);
        expect(shipOne.timesHit).toBe(0);
        expect(shipOne.sunk).toBe(false);

        expect(shipTwo.length).toBe(3);
        expect(shipTwo.timesHit).toBe(0);
        expect(shipTwo.sunk).toBe(false);

        expect(shipThree.length).toBe(2);
        expect(shipThree.timesHit).toBe(0);
        expect(shipThree.sunk).toBe(false);

        expect(shipFour.length).toBe(1);
        expect(shipFour.timesHit).toBe(0);
        expect(shipFour.sunk).toBe(false);
    });

    test("ship test 2", () => {
        shipOne.hit();
        shipOne.hit();
        shipTwo.hit();
        shipTwo.hit();
        shipThree.hit();
        shipThree.hit();
        shipFour.hit();
        shipFour.hit();
        shipFour.hit();

        expect(shipOne.length).toBe(4);
        expect(shipOne.timesHit).toBe(2);
        expect(shipOne.sunk).toBe(false);
        
        expect(shipTwo.timesHit).toBe(2);
        expect(shipTwo.sunk).toBe(false);

        expect(shipThree.timesHit).toBe(2);
        expect(shipThree.sunk).toBe(true);

        expect(shipFour.timesHit).toBe(3);
        expect(shipFour.sunk).toBe(true);
    });
});

describe("gameboard tests", () => {

});

describe("player tests", () => {

});