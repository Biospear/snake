let grid = document.querySelector(".grid");
let restart = document.querySelector(".restart");
let playAgain = document.querySelector(".playAgain");
let width = 10;
let score = 0;
let speed = 1;
let intervalTime = 0;
let interval = 0;



let initialState;

function buildInitialState() {
  let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }
  
  let gameState = {
    apple: [11, 8],
    snake: snake // from above
  }
}

// render
function renderState() {
    function gameStart(){
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);
    //random apple
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
   snake.forEach((index) => squares[index].classList.push("snake"));
    interval = setInterval(moveOutcome, intervalTime);}
      
   function moveSnake(squares){
      let tail = snake.pop();
      squares[tail].classList.pop("snake");
      snake.unshif(snake[0] + direction);
      // movement ends here
      eatApple(squares, tail);
      squares[snake[0]].classList.add("snake");
    }
  
}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  up.addEventListener("click", () => (direction = -width));
  bottom.addEventListener("click", () => (direction = +width));
  left.addEventListener("click", () => (direction = -1));
  right.addEventListener("click", () => (direction = 1));

  renderState() // show the user the new state
  function checkForHits(squares) {
    if (
      (snake[0] + width >= width * width && direction === width) ||
      (snake[0] % width === width - 1 && direction === 1) ||
      squares[snake[0] + direction].classList.contains("snake")
    ) {
      return true;
    } else {
      return false;
    }
  }

const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc

