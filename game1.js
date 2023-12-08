document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const pointCounter = document.getElementById('pointCounter');


    submitButton.addEventListener('click', function () {
        checkPassword();
    });

    // Retrieve the user's points from localStorage
    const storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }
});

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const minLength = 8;
    const betterLength = 14;
    const hasUppercase = /[A-Z]/.test(enteredPassword);
    const hasLowercase = /[a-z]/.test(enteredPassword);
    const hasNumber = /[0-9]/.test(enteredPassword);
    const hasSymbol = /[!@#$%^&*()-=_+[\]{}|\\;:'",.<>/?`~]/.test(enteredPassword);

    if (
        enteredPassword.length >= minLength &&
        (enteredPassword.length >= betterLength ||
            (hasUppercase && hasLowercase && hasNumber && hasSymbol))
    ) {
        updatePoints(25);
        alert('Password is strong. You earned 25 points!');
        localStorage.setItem('colorToChange', '#191A19'); // Set 'red' or any color you prefer
        localStorage.setItem('buttonClickability', 'disabled');

        returnToMain();
    } else {
        alert('Password is weak! Please follow the password rules.');
        localStorage.setItem('colorToChange', 'red'); // Set 'red' or any color you prefer

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
document.addEventListener('DOMContentLoaded', function () {

    const pointCounter = document.getElementById('pointCounter');


    const storedPoints = localStorage.getItem('userPoints');


    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }
});


function returnToMain() {
    window.location.href = 'main.html';
}

