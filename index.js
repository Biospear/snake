
let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }

  let gameState = {
    apple: [11, 8],
    snake: snake 
  }

  let initialState;
  const snakeSpeed =1 


  function snake() {

}


function food() {

}

function keys() {

   
    renderState() 
}



const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); 

function tick() {


    renderState()
}

setInterval(tick, 1000 / 30) 


document.addEventListener('keydown', function (event) {
 
})