# connectfour*


## Welcome to my connectfour* game!
This is the second game I have created while in the SEI course at General Assembly. I chose this game in order to improve on the skills I've learned while creating my first game, Tic Tac Toe.
The goal of this two player game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens.
<br/>
<br/>



### Here is a link to my deployed game : https://lilyshowladerconnectfour.netlify.app/


## Planning Materials:

### Below is my wireframe:

<img width="613" alt="Screen Shot 2022-09-14 at 5 44 18 PM" src="https://user-images.githubusercontent.com/111258832/190268257-0850f85e-c9a0-48b2-b584-db9b604b3a48.png">


### Pseudo Code for connectfour*:
1) Set the required variables used to track the state of the game. 
   - Board - We have to track the changes made on the Connect Four board as the game is in progress.
   - There are 42 slots on the connectFour board. 
   - Turn - Turn will represent either Player 1, or Player 2. 
   - Winner - The winner can either be Player 1 or Player 2. If the game is in progress, the winner is set to null. 

2) Store cached element used to manipulate HTML elements. 
   - Cached element reference for slots. 
   - Cached element reference for message.
   - Cached element reference for reset button. 

3) When the game loads, initialize the state of the game and call a function to render this game state. The state of the game should be rendered/displayed to the user. 
   - init() - the init function initializes the state of the game. 
   - render() - the render function should run every single time a move is made. 

4) Determine required constants for the game. 
   - The constant for this game is called winningArrays, which is an array of arrays that contains all of the winning combinations for Connect Four. 

5) Build a handleClick function which will determine what happens with each click a player makes.
   - Player 1 clicks - pick a color for player one.
   - Player 2 clicks - pick a color for player two.
   - A player should not be able to click on a slot that is already full.
   - A player should not be able to click on a slot, unless the slots under it is full. 
   - No moves should be made after there is a winner. <br>

6) Build a function to determine if there is a winner, if the game is still going (null) or if it is stalemate. 

7) Build a reset button to reset the game.
   - This button will call for the init function. 


## Technologies used:
- VS Code 
- GitHub 
- HTML 
- CSS 
- Javascript 
- Whimsical
- Youtube/Youtube to MP3 converter 
- Git
  

<strong>Mobile view above:</strong>
<img width="480" alt="Screen Shot 2022-09-14 at 6 04 05 PM" src="https://user-images.githubusercontent.com/111258832/190271096-f478c9fa-6a50-42e4-bdfe-23a73cc2a395.png">


<strong>Desktop view below:</strong>
![Screen Shot 2022-09-15 at 2 11 20 PM](https://user-images.githubusercontent.com/111258832/190478688-624c47a3-db73-43a1-84bd-1829037c7319.png)


## Next steps:
- Improve layout of game within media query 
-  Include a key to differentiate between Player One and Player Two 
- Animate the token drop 
