const {Board, Sensor, Servo} = require("../lib/johnny-five.js");
const board = new Board();

board.on("ready", () => {

  const slider = new Sensor("A0");
  const tilt = new Servo(9);

  slider.on("slide", () => {
    tilt.to(slider.scaleTo(0, 180));
  });
});
