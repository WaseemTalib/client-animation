let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');


// div2.style.backgroundColor = "yellow";
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1400,
    height: 650,
    wireframes: false
  }
});
engine.timing.timeScale = 0.8;

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(0, 150, 10, 600, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(500, 650, 1800, 10, { isStatic: true });

var boxA = Bodies.rectangle(550, 200, 270, 170);
var boxC = Bodies.rectangle(450, 200, 270, 170);
var boxB = Bodies.rectangle(400, 200, 270, 170);

// var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

World.add(engine.world, [leftWall, bottomWall, boxA, boxB, boxC]);

Engine.run(engine);

Render.run(render);








