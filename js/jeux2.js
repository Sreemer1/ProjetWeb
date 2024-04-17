let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userInput = document.getElementById('guessInput').value;
    let output = document.getElementById('output');
    attempts++;

    if (userInput == secretNumber) {
        output.innerHTML = `Félicitations! Vous avez trouvé le nombre en ${attempts} tentatives.`;
    } else if (userInput < secretNumber) {
        output.innerHTML = "Trop bas! Essayez un nombre plus grand.";
    } else {
        output.innerHTML = "Trop haut! Essayez un nombre plus petit.";
    }
}
