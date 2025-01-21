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

let winSwitch = null; //true:win, false:draw, null:game continues
let board = [] //board of the game
const buttons = document.querySelectorAll('.btn'); //selects all mybutton/ this is my nodeList

//how the game works(conditions = moves per player)
//   
buttons.forEach((button, index) => {
    button.addEventListener('click' , () => {
        if(game.currentPlayer == 'playerOne'){
            board[index] = 'X'
            button.textContent = 'X'
            game.currentPlayer = 'playerTwo'
        }
        else{
            board[index] = 'O'
            button.textContent = 'O'
            game.currentPlayer = 'playerOne'
        }
        button.disabled = true; // disabling button
        console.log(game.currentPlayer)
        console.log(board)
        
        // console.log(buttons[game.winIndex])
    })
})
//current problem: 
// Use the winIndex to help you determine the winner on your board[]


function checkWin(){
    for(let i = 0; i < game.winIndex.length;i++){ //loops through our object
        const [a,b,c] = game.winIndex[i]
    }
}

//later on problems:
// reset button or automatic reset
// strikethrough when someone won


//[[]]