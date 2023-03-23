/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Egg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("egg-a", "./Egg/costumes/egg-a.svg", { x: 18, y: 26 }),
      new Costume("egg-b", "./Egg/costumes/egg-b.svg", { x: 23, y: 27 }),
      new Costume("egg-c", "./Egg/costumes/egg-c.svg", { x: 28, y: 27 }),
      new Costume("egg-d", "./Egg/costumes/egg-d.svg", { x: 19, y: 27 }),
      new Costume("egg-e", "./Egg/costumes/egg-e.svg", { x: 20, y: 26 }),
      new Costume("egg-f", "./Egg/costumes/egg-f.svg", { x: 31, y: 26 })
    ];

    this.sounds = [new Sound("Collect", "./Egg/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.eggsbroken = 0;
    yield* this.startPosition();
    this.stage.vars.score = 0;
    while (true) {
      this.y -= 5;
      if (this.compare(this.y, -150) < 0) {
        this.stage.vars.score = 0;
        yield* this.startPosition();
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        this.stage.vars.score++;
        yield* this.startSound("Collect");
        yield* this.startPosition();
      }
      yield;
    }
  }

  *startPosition() {
    this.costume = "egg-a";
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
  }
}
