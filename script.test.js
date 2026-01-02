const Ship = require("./ship.js");
const GameBoard = require("./gameboard.js");
const Player = require("./player.js");


describe("ship tests", () => {
    test("ship test 1", () => {
        expect(new Ship(4)).toEqual({length: 4, timesHit: 0, sunk: false});
    })
});

describe("gameboard tests", () => {

});

describe("player tests", () => {

});