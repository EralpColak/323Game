document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('myCheckbox');
    const submitButton = document.getElementById('submitButton');
    const pointCounter = document.getElementById('pointCounter');

    // Retrieve the user's points from localStorage
    const storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }

    let userInPage = false;
    let checkboxClicked = false;
    let submitButtonClicked = false;

    setTimeout(function () {
        userInPage = true;
    }, 5000);

    const intervalId = setInterval(function () {
        if (userInPage && checkboxClicked && submitButtonClicked) {
            clearInterval(intervalId);
         
        } 
    }, 1000);

    checkbox.addEventListener('click', function () {
        checkboxClicked = checkbox.checked;
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!checkboxClicked) {
            alert('Please check the checkbox before submitting.');
        } else {
            if (!userInPage){
                alert("You haven't red the script in estimated time.")
                localStorage.setItem('colorToChange2', 'red'); // Set 'red' or any color you prefer
                returnToMain();
            
        }else if (userInPage){
            submitButtonClicked = true;
            alert('Thanks for being better citizen. You earned 25 points!');
            updatePoints(25);
            localStorage.setItem('colorToChange2', '#191A19'); // Set 'red' or any color you prefer
            localStorage.setItem('buttonClickability2', 'disabled');
            returnToMain();
            
        }
            // Add points when the submit button is clicked
        }
    });
});

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
