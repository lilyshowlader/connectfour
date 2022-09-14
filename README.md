# connectfour


<strong>Welcome to my ConnectFour game!</strong><br/>
This is the second game I have created while in the SEI course at General Assembly. I chose this game in order to improve on the skills I've learned while creating my first game, Tic Tac Toe.

<img width="613" alt="Screen Shot 2022-09-14 at 5 44 18 PM" src="https://user-images.githubusercontent.com/111258832/190268257-0850f85e-c9a0-48b2-b584-db9b604b3a48.png">



<strong>Here is a link to my game</strong>: https://app.netlify.com/sites/lilyshowladerconnectfour/overview

Phone view above:
<img width="480" alt="Screen Shot 2022-09-14 at 6 04 05 PM" src="https://user-images.githubusercontent.com/111258832/190271096-f478c9fa-6a50-42e4-bdfe-23a73cc2a395.png">


Desktop view below: 
<img width="1080" alt="Screen Shot 2022-09-14 at 6 03 22 PM" src="https://user-images.githubusercontent.com/111258832/190271005-30236a39-f3d4-49cf-b39e-ed2cd22e6513.png">

Winner view:
<img width="1163" alt="Screen Shot 2022-09-14 at 6 05 31 PM" src="https://user-images.githubusercontent.com/111258832/190271280-79988268-5a37-4965-a6d0-906fc9353447.png">


<strong>Planning Materials:</strong>

<strong>Pseudo Code for Connect Four</strong>

1) Set the required variables used to track the state of the game. <br/>
a. Board - We have to track the changes made on the Connect Four board as the game is in progress. There are 42 slots on the ConnectFour board (6x7) <br/>
b. Turn - Turn will represent either Player 1, or Player 2. <br/>
c. Winner - The winner can either be Player 1 or Player 2. If the game is in progress, the winner is set to null. <br/>

2) Store cached element used to manipulate HTML elements. <br/>
a. Cached element reference for slots. <br/>
b. Cached element reference for message (displayed to the user) <br/>
c. Cached element reference for reset button. <br/>

3) When the game loads, initialize the state of the game and call a function to render this game state. The state of the game should be rendered/displayed to the user. <br/>
a. init() - the init function initializes the state of the game. <br/>
b. render() - the render function should run every single time a move is made. <br/>

4) Determine required constants for the game. <br/>
a. The constant for this game is called winningArrays, which is an array of arrays that contains all of the winning combinations for Connect Four. <br/>

5) Build a handleClick function which will determine what happens with each click a player makes <br/>
a. Player 1 clicks - pick a color for player one <br/>
b. Player 2 clicks - pick a color for player two <br/>
c. A player should not be able to click on a slot that is already full <br/>
d. A player should not be able to click on a slot, unless the slots under it is full. <br/>
e. No moves should be made after there is a winner <br/>

6) Build a function to determine if there is a winner, if the game is still going (null) or if it is stalemate. <br/>

7) Build a reset button to reset the game <br/>
a. This button will call for the init function. <br/>

<br/>
<strong>Technologies used:</strong> <br/>
1) VS Code <br/>
2) GitHub <br/>
3) HTML <br/>
4) CSS <br/>
5) Javascript <br/>
  

<br/>
<strong>Next steps:</strong> <br/>
1) Improve layout of game within media query <br/>
2) Include a key to differentiate between Player One and Player Two <br/>
3) Include a sound effect after each player's turn <br/>
4) Animate the token drop <br/>
5) Animate a bounce effect to winning message