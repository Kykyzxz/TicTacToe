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
let cols = 3
let rows = 3
let board = [] //board of the game
const buttons = document.querySelectorAll('.btn'); //selects all mybutton


//how to set up the board 3*3
// for(let i = 0; i < cols;i++){
//     let row = []
//     board.push(row)
//     for(let j = 0; j < rows;j++){
//         row.push('')
//     }
// }       

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
    button.disabled = true;
    console.log(game.currentPlayer)
    console.log(board)
    console.log(board[index])
    })

})
// current problem: its a nodeList and the content that I want to put inside the board is not going in why??    



//winning condition
function winCondition(){
    
}

//[[]]