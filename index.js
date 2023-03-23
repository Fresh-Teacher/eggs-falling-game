import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bowl from "./Bowl/Bowl.js";
import Egg from "./Egg/Egg.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Bowl: new Bowl({
    x: 167,
    y: -141,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Egg: new Egg({
    x: -85,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
