let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  };
};

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // Returns an object with random values scaled {x: ?, y: ?}
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // Adds image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // Sets position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // Adds new Child image to game
  game.appendChild(newimg);

  // Returns details in an object
  return {
    position,
    velocity,
    newimg,
  };
};

  // Loops over pacmen array and moves each one and moves image in DOM
  function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
};

  // Detects collision with all walls and makes pacman bounce
  function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
  item.velocity.x = -item.velocity.x;
  if (
    item.position.y  + item.velocity.y + item.newimg.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
  item.velocity.y = -item.velocity.y;
};

function makeOne() {
  pacMen.push(makePac()); // adds a new PacMan
};