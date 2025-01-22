const game = {
    playerOne: 0,
    playerTwo: 0,
    currentPlayer: 'playerOne', //indicates which player is going to move
    winIndex: [ // indices for winning
        [0,1,2], [3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8], //cols
        [0,4,8],[2,4,6]//diagonals
            ]
}

let counter = 0
let winSwitch = null//true:win, false: draw
let board = [] //board of the game
const buttons = document.querySelectorAll('.btn'); //selects all mybutton/ this is my nodeList

//how the game works(conditions = moves per player)
buttons.forEach((button, index) => {
    button.addEventListener('click' , () => {
        if(game.currentPlayer == 'playerOne'){
            board[index] = 'X'
            button.textContent = 'X'
            game.currentPlayer = 'playerTwo'
            counter += 1
        }
        else{
            board[index] = 'O'
            button.textContent = 'O'
            game.currentPlayer = 'playerOne'
            counter += 1
        }
        button.disabled = true; // disabling button
        console.log(counter)
        checkWin()
    
    })
})

function checkWin(){
    for(let i = 0; i < game.winIndex.length;i++){ //loops through our object
        const [a,b,c] = game.winIndex[i]
        if(board[a] && board[a] == board[b] && board[a] == board[c]){
            if(board[a] == 'X'){
                alert("Player One wins!~")
                game.playerOne += 1
                document.querySelector('.player-one').textContent = `Player 1: ${game.playerOne}`
                winSwitch = true
                resetGame()
                return; //stops further checks
            }
            else if(board[a] == 'O'){
                alert("Player Two wins!~")
                game.playerTwo += 1
                document.querySelector('.player-two').textContent = `Player 2: ${game.playerTwo}`
                winSwitch = true
                resetGame()
                return;
            }
        }
    }
    if(counter === 9 && winSwitch !== true){ 
        alert('Draw')
        resetGame(); // not working
    }

}

function resetGame(){ //reset function
    board = [] //resets the board
    winSwitch = null;
    game.currentPlayer = 'playerOne' 
    counter = 0
    buttons.forEach((button) => {
        button.textContent = ''
        button.disabled = false
    });
}

//current problems:
// reset button or automatic reset
// strikethrough when someone won