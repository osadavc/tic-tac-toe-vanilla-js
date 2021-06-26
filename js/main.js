import Game from "./Game.js";
import GameView from "./GameView.js";

console.log("Hello");

let game = new Game();
let gameView = new GameView();

var tl = gsap.timeline();

tl.from("h1", {
  duration: 0.8,
  y: -50,
  opacity: 0,
})
  .from(
    ".restart",
    {
      opacity: 0,
    },
    "-=.4"
  )
  .from(
    ".board-tile",
    {
      opacity: 0,
    },
    "-=.1"
  )
  .from(
    ".header",
    {
      opacity: 0,
    },
    "-=.5"
  );

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

const onTileClick = (i) => {
  game.makeMove(i);
  gameView.updateBoard(game);
  game.nextTurn();
};

let playerX = document.querySelector(".playerX");
let playerO = document.querySelector(".playerO");

const newGame = () => {
  game = new Game();
  location.reload();
};

document.querySelector(".restart").addEventListener("click", () => {
  newGame();
  gameView.updateBoard(game);
});
