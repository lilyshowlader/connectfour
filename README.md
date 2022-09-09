# connectfour

Pseudo Code for Connect Four

<!-- Set the required variables used to track the state of the game
Board - we have to track the changes made on the Connect Four board as the game is in progress. 
There are 42 slots on the ConnectFour board (6x7) 
Add 7 more divs to the BOTTOM of the connectFour board to act as the ground level 
Turn - we have to track who’s turn it is/either player one or two.
Winner - either player one or two will win or the game is still in progress (null) -->

<!-- Store your cached element references that you will use to manipulate your HTML elements
One for the slots -
One for the message displayed to the user
One for the reset game button  -->

<!-- When the game loads, initialize the state of the game and call a function to render this game state. The state of the game should be rendered/displayed to the user.
init() -->
render() - note* the render function should run every single time a move is made

<!-- Figure out the required constants for the game
Similar to tic-tac-toe, the constant for this game can be winningCombos.
There are a million ways to win Connect Four, so I have to figure out how to display them all. -->

Build a handleClick function which will determine what happens with each click a player makes
Player 1 clicks - pick a color for player one
Player 2 clicks - pick a color for player two 
A player should not be able to click on a slot that is already full
Keep in mind that each click on the board falls down to the bottom of the board/need to figure this out
No moves should be made after there is a winner

Build a function to determine if there is a winner/if the game is still going/stalemate
getWinner()
Four in a row either diagonally, horizontally or vertically is a win 

Build a reset button to reset the game


