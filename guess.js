let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

    function checkGuess() {
        const guess = Number(document.getElementById('guessInput').value);
        const messageDiv = document.getElementById('message');
        attempts++;

        if (!guess) {
            messageDiv.textContent = 'Enter the number';
            return;
        }

        if (guess === secretNumber) {
             messageDiv.textContent = `🎉 Congrats! You guessed the number ${secretNumber} in ${attempts} tries!`;
        } else if (guess > secretNumber) {
            messageDiv.textContent = '📈 Lower!';
        } else {
            messageDiv.textContent = '📉 Higher!';
        }
    }

    function newGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById('message').textContent = 'New game! Enter the number.';
        document.getElementById('guessInput').value = '';
		
console.log('Scipt working');