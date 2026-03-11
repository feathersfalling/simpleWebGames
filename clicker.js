// clicker.js
let score = 0;

function clickerClick() {
    score++;
    document.getElementById('score').textContent = score;
}

function resetScore() {
    score = 0;
    document.getElementById('score').textContent = score;
}

// Убедимся, что скрипт загрузился
console.log('Scipt working');