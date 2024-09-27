// Element access

const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('resetBtn');

let currentPlayer = 'X';           //  user       
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Create board

function createBoard() {
    gameBoard.forEach((cell, index) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-cell-index', index);
        square.innerText = cell;

        square.addEventListener('click', () => handleCellClick(square, index));
        boardElement.appendChild(square);
    });
}

// Handle cell click

function handleCellClick(square, index) {
    if (square.innerText !== '' || !isGameActive) {
        return;
    }

    square.innerText = currentPlayer;
    gameBoard[index] = currentPlayer;           // gameboard array updated

    checkResult();

    if (isGameActive) {
        currentPlayer = 'O';       //  switch to computer
        computerMove();
    }
}

// Computer move

function computerMove() {
    const availableCells = gameBoard.map((cell, index) => (cell === '' ? index : null)).filter(index => index !== null);
    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];

    if (randomIndex !== undefined) {
        gameBoard[randomIndex] = currentPlayer;
        const square = document.querySelector(`[data-cell-index="${randomIndex}"]`);
        square.innerText = currentPlayer;

        checkResult();
        currentPlayer = 'X'; // Switch back to user
    }
}

// Check result

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] === '' || gameBoard[b] === '' || gameBoard[c] === '') {
            continue;
        }
        if (gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            if (gameBoard[a] === 'X') {
                messageElement.innerText = 'User wins!'; // User wins
            } else {
                messageElement.innerText = 'User loses!'; // User loses if computer wins
            }
            break;
        }
    }

    if (roundWon) {
        isGameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        messageElement.innerText = 'Draw!';
        isGameActive = false;
        return;
    }
}

// Reset game
resetButton.addEventListener('click', resetGame);

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    messageElement.innerText = '';
    boardElement.innerHTML = '';
    createBoard();
}

createBoard();
