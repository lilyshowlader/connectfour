/*------------------------------ Constants --------------------------------*/
let winningArrays = [ 
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
  [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
  [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
  [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
  [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
  [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
  [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
  [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  ]; 


/*---------------------------- Variables (state) --------------------------*/
// the variables below will change depending on user interaction 
let board
// the state of the board will change everytime the render function is called
let playerTurn
// 1 will represent player one and -1 will represent player 2.
// the playerTurn will change every time the render function is called
let winner
// the winner will have a boolean value (I think)


/*------------------------ Cached Element References ----------------------*/
const slots = document.querySelectorAll(".connect-four-board > div")
// accessing all of the divs (slots) on the connect four board (node list)
const displayMessage = document.querySelector("#display-message")
// accessing the display message to manipulate when it is player 1/2 turn/win/tie
const resetButton = document.querySelector("#reset-button")
// accessing the reset button to manipulate when user chooses to reset game
const boardElement = document.querySelector(".connect-four-board")
const messageBounce = document.querySelector('#display-message');


/*--------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener('click', handleClick)
//we are taking advantage of bubbling
resetButton.addEventListener('click', init)


/*------------------------------ Functions --------------------------------*/
// When the game loads, initialize the state of the game and call a function to render this game state. The state of the game should be rendered/displayed to the user.
// init()
// render() - note* the render function should run every single time a move is made

init()

function init() {
  messageBounce.className = "";
  board =[
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null]
  playerTurn = 1
  winner = null
  render()
}


// render function
// what has to be updated every time a move is made? 
// the slot has to be updated with the player choice
// if there is no winner, we need to display who's turn it is
// we need to know if there is a winner/if there is a "tie" and display that to the user if there is one.

function render() {

  board.forEach(function(slot, idx) {
    if (slot === 1) {
      slots[idx].classList.add('playerone')
    } else if (slot === -1) {
      slots[idx].classList.add('playertwo')
    } else {
      slots[idx].className = ('slots')
    }
  })
  if (!winner && playerTurn === 1) {
    displayMessage.textContent = "player one, it's time to play!"
    const pop = new Audio("../assets/audio/pop.wav")
    pop.play()
  } else if (!winner && playerTurn === -1) {
    displayMessage.textContent = "player two, it's time to play!"
    const pop = new Audio("../assets/audio/pop.wav")
    pop.play()
  }
  if (winner === 1) {
    messageBounce.className = 'animate__animated animate__bounce'
    displayMessage.textContent = "congrats player one, you won!"
    const helluvaParty = new Audio("../assets/audio/Helluva Party (2).mp3")
    helluvaParty.play()
    confetti.start(22000)
  } else if (winner === -1) {
    messageBounce.className = 'animate__animated animate__bounce'
    displayMessage.textContent = "congrats player two, you won!"
    const helluvaParty = new Audio("../assets/audio/Helluva Party (2).mp3")
    helluvaParty.play()
    confetti.start(22000)
  } else if (winner === 'T') {
    displayMessage.textContent = "uh oh, let's try again"
  } 
}


// handleClick function
// Build a handleClick function which will determine what happens with each click a player makes
// Clicking outside of the board shouldn't affect the board
// No moves should be made after there is a winner
// A player should not be able to click on a slot that is already full
// A player should not be able to pick a slot unless the slot under it is full
// when a slot is clicked, that changes who's turn it is - set the playerTurn
// the turn can update by multiplying by -1 (this will switch between player one (1)and two (-1)


function handleClick(evt) {
  let slotIndex = parseInt(evt.target.id) 
  // slotIndex refers to slot selected by the user 
  if (isNaN(slotIndex)) {
    return 
  } 
  if (winner) {
    return 
  }
  if (board[slotIndex]) {
    return 
  }
  const slotColumn = correctPlacement(slotIndex)
  board[slotColumn] = playerTurn
  playerTurn = playerTurn * -1
  winner = getWinner()
  render()
}


function correctPlacement(slotIndex) {
  for (let i = slotIndex + 35; i >= 0; i -= 7) {
    if (board[i] === null) {
      return i
    }
  }
}
// I have an array of 41 null elements & anytime I click on anywhere on my board, I am taking the index of what I clicked, and adding 35 to that value. 
// If we click on index 0, then add 35, i = 0. The loop checks to see if 35 is null. If it is, it returns that index (35). Then, if it is not, it's going to subtract 7 from i and then check if that is null. So now we are checking if index 28 is null and then it repeats. It's going to do this until it finds a suitable place to put a slot/token. 
// if I select on index 7, then i becomes 42 (7 + 35). Since 42 does not exist, this number is undefined. undefined is not null, which is why loop would go again until it hits 35, which DOES exist in the board and IS null so the token can be placed there.



// winner function
// this function figures out whether there is a winner, and this function runs after every single move
// using the winningArrays array, which is an array of arrays, we are looping through the inner arrays until they get a combo (value) of 4, which equals a winner

function getWinner() {
  let bestCombo = []
  winningArrays.forEach(function(combo){
    let comboValue = board[combo[0]] + board[combo[1]] + board[combo[2]] + board[combo[3]]
    bestCombo.push(Math.abs(comboValue))
  })
  let winnersCombo = bestCombo.some(function(value){
    return value === 4
  })
  if (winnersCombo === true) {
    return playerTurn * -1
  } else if (!board.some(function(value){return value === null})){
    return 'T'
  }
  return null
}