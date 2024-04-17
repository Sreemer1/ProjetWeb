// script.js
const cells = document.querySelectorAll('[data-cell]'); // select tout se qui est clickable
const restartButton = document.getElementById('restartButton');
let circleTurn; // valide les tours true = o false = x

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontale
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticale
    [0, 4, 8], [2, 4, 6]             // diagonal
];

// sassure que tout est bien au debut donc clear la board pour la nouvelle game
function startGame() {
    circleTurn = false; // commence avec les x
    cells.forEach(cell => {
        cell.classList.remove('circle', 'x');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}

// place les x et o tout en validant si il y a une win ou draw sinon game continu
function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? 'circle' : 'x';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
    }
}

//place le x ou o
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

// regarde si une des condition pour la victoire est valide
function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

//regarde si la condition pour un draw est valide
function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    });
}

//alterne les tours
function swapTurns() {
    circleTurn = !circleTurn; 
}

//termine la partie en fonction de si cest une win ou un daw et restart la game
function endGame(draw) {
    if (draw) {
        alert("Draw!");
    } else {
        alert(`${circleTurn ? "O's" : "X's"} Wins!`);
    }
    startGame();
}

restartButton.addEventListener('click', startGame);

startGame();

// rendre reponsive
window.addEventListener('resize', function() {
    adjustGameBoard();
});

function adjustGameBoard() {
}
