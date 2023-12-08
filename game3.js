document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const pointCounter = document.getElementById('pointCounter');
    // Retrieve the user's points from localStorage
    const storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }
    submitButton.addEventListener('click', checkSliderCombination);
});

function checkSliderCombination() {
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    let selectedCount = 0;

    toggleSwitches.forEach((toggleSwitch, index) => {
        if (toggleSwitch.checked) {
            selectedCount++;
        }
    });

    if (
        selectedCount === 3 &&
        toggleSwitches[0].checked &&
        toggleSwitches[1].checked &&
        toggleSwitches[4].checked
    ) {
        // User wins
        alert('Good job. You just choose the necessary cookies. You earned 25 points!');
        updatePoints(25); // Add 25 points for winning
        localStorage.setItem('colorToChange3', '#191A19'); // Set 'red' or any color you prefer
        localStorage.setItem('buttonClickability3', 'disabled');
        returnToMain();
    } else {
        alert("You lose. You didn't choose correct cookies.");
        localStorage.setItem('colorToChange3', 'red'); // Set 'red' or any color you prefer
        // User loses
        returnToMain();
    }
}

function updatePoints(pointsToAdd) {
    const pointCounter = document.getElementById('pointCounter');
    const currentPoints = parseInt(pointCounter.innerText.split(':')[1].trim());
    const newPoints = currentPoints + pointsToAdd;
    pointCounter.innerText = 'Points: ' + newPoints;
    localStorage.setItem('userPoints', newPoints);
}

function returnToMain() {
    window.location.href = 'main.html';
}
