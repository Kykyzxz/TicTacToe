const game = {
    playerOne: 0,
    playerTwo: 0,
    currentPlayer: 'Player 1', //indicates which player is going to move
    winIndex: [ // indices for winning
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
}
let count = 0 //count for the game
let cols = 3
let rows = 3
let board = [] //board of the game
const buttons = document.querySelectorAll('.btn'); //selects all mybutton

//how the game works(conditions = moves per player)
buttons.forEach((button, index) => {
    button.addEventListener('click' , () => {
        if(game.currentPlayer == 'Player 1'){
            board[index] = 'X'
            button.textContent = 'X'
            game.currentPlayer = 'Player 2'
        }
        else{
            board[index] = 'O'
            button.textContent = 'O'
            game.currentPlayer = 'Player 1'
        }
    button.disabled = true; // disabling button
    console.log(game.currentPlayer)
    console.log(board)
    // for(let a = 0; a < buttons.length;a++){
    //     console.log(buttons[a])
    // } printing my nodes
    })

})
// problems: 
// how many turns so I can check the winner? 5? for the count?
//winning condition
function winCondition(){
    
}


//later on problems:
// reset button or automatic reset
// strikethrough when someone won


//[[]]