let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    

    let result = `You chose: ${playerChoice}, Computer: ${computerChoice}. `;

    if (playerChoice === computerChoice) {
        result += 'Draw! 🤝';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result += 'You won! 🎉';
        playerScore++;
    } else {
        result += 'Computer wins! 💻';
        computerScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}

console.log('Script working');