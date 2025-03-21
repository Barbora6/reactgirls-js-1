const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

const userStart = [230, 10];
let currentPosition = userStart;

// create Block
/*
Třída Block definuje pozici bloku na stránce.
Každý blok má 4 souřadnice:
bottomLeft – levý dolní roh
bottomRight – pravý dolní roh
topLeft – levý horní roh
topRight – pravý horní roh
Při vytvoření nového bloku se mu nastaví souřadnice podle xAxis a yAxis.
*/
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

// all my blocks
/*
Pole blocks obsahuje 16 bloků.
Každý blok je vytvořen pomocí new Block(x, y).
X a Y souřadnice určují, kde se blok vykreslí.
Bloky jsou uspořádány do několika řádků.
*/

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(120, 210),
  new Block(450, 210)
];

// draw my block
function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlock();

// add user
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// draw the user
function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

// move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }

      break;
  }
}

document.addEventListener("keydown", moveUser);

/*
Funkce moveUser(e) se spustí při stisknutí klávesy.
e.key obsahuje název stisknuté klávesy.
switch (e.key) kontroluje, která klávesa byla stisknuta.
Pokud byla stisknuta "ArrowLeft" (šipka doleva):
Sníží se currentPosition[0] o 10 → posun doleva o 10 pixelů.
Volá se drawUser();, což pravděpodobně překreslí hráče na nové pozici.
Naslouchá události "keydown" → tedy stisknutí klávesy.
Když uživatel stiskne klávesu, zavolá se moveUser(e).
Parametr e (event) obsahuje informace o stisknuté klávese.
*/
