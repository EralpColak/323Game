let storedPoints; // Declare storedPoints globally

document.addEventListener('DOMContentLoaded', function () {
    const pointCounter = document.getElementById('pointCounter');

    // Retrieve the user's points from localStorage
    storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }

    // Check if storedPoints is equal to '100'
    if (storedPoints === '100') {
        alert("You won the game:)");
        location.reload(); // Refresh the page
    }
});

window.addEventListener('beforeunload', function () {
    // Check if storedPoints is greater than or equal to 100
    if (parseInt(storedPoints) >= 100) {
        storedPoints = 0;
        localStorage.setItem('userPoints', storedPoints);
    }
    // Reset points only when the browser is closed
});

function gogame1() {
    window.location.href = 'game1.html';
}

function gogame2() {
    window.location.href = 'game2.html';
}

function gogame3() {
    window.location.href = 'game3.html';
}

function gogame4() {
    window.location.href = 'game4.html';
}
function gotorules() {
    window.location.href = "rules.html";
}

function closePage() {
    window.location.href = 'https://www.google.com'; // To close page and navigate to google
}
