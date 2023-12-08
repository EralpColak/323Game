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

        localStorage.removeItem('colorToChange');
        localStorage.removeItem('buttonClickability');

        localStorage.removeItem('colorToChange2');
        localStorage.removeItem('buttonClickability2');

        localStorage.removeItem('colorToChange3');
        localStorage.removeItem('buttonClickability3');
        
        localStorage.removeItem('colorToChange4');
        localStorage.removeItem('buttonClickability4');
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
    window.location.href = 'https://eralpcolak.github.io/323Articulate/story.html'; // To close page and navigate to google
}
/**********************************for game1 *******************************/
// Get the value from localStorage
const colorToChange = localStorage.getItem('colorToChange');

// Check if colorToChange is not null or undefined
if (colorToChange) {
    // Get the element by its ID
    const box1 = document.getElementById('box1');

    // Change the background color of box1
    box1.style.backgroundColor = colorToChange;

    // Clear the localStorage value after using it (optional)
}

// Check if the buttonClickability flag is not null or undefined in localStorage
const buttonClickability = localStorage.getItem('buttonClickability');

if (buttonClickability === 'disabled') {
    // Get the button element by its ID
    const button = document.getElementById('box1');

    // Disable the button
    button.disabled = true;

    // Optionally, you can change the button's style to indicate it's disabled
    button.style.opacity = '0.8'; // For example, reduce opacity

    // You might also want to prevent default behavior on click
    button.addEventListener('click', function(event) {
        event.preventDefault();
        return false;
    });
}


/**********************************for game2 *******************************/
// Get the value from localStorage
const colorToChange2 = localStorage.getItem('colorToChange2');

// Check if colorToChange is not null or undefined
if (colorToChange2) {
    // Get the element by its ID
    const box2 = document.getElementById('box2');

    // Change the background color of box1
    box2.style.backgroundColor = colorToChange2;

    // Clear the localStorage value after using it (optional)
}

// Check if the buttonClickability flag is not null or undefined in localStorage
const buttonClickability2 = localStorage.getItem('buttonClickability2');

if (buttonClickability2 === 'disabled') {
    // Get the button element by its ID
    const button = document.getElementById('box2');

    // Disable the button
    button.disabled = true;

    // Optionally, you can change the button's style to indicate it's disabled
    button.style.opacity = '0.8'; // For example, reduce opacity

    // You might also want to prevent default behavior on click
    button.addEventListener('click', function(event) {
        event.preventDefault();
        return false;
    });
}

/**********************************for game3 *******************************/
// Get the value from localStorage
const colorToChange3 = localStorage.getItem('colorToChange3');

// Check if colorToChange is not null or undefined
if (colorToChange3) {
    // Get the element by its ID
    const box3 = document.getElementById('box3');

    // Change the background color of box1
    box3.style.backgroundColor = colorToChange3;

    // Clear the localStorage value after using it (optional)
}

// Check if the buttonClickability flag is not null or undefined in localStorage
const buttonClickability3 = localStorage.getItem('buttonClickability3');

if (buttonClickability3 === 'disabled') {
    // Get the button element by its ID
    const button = document.getElementById('box3');

    // Disable the button
    button.disabled = true;

    // Optionally, you can change the button's style to indicate it's disabled
    button.style.opacity = '0.8'; // For example, reduce opacity

    // You might also want to prevent default behavior on click
    button.addEventListener('click', function(event) {
        event.preventDefault();
        return false;
    });
}

/**********************************for game4 *******************************/
// Get the value from localStorage
const colorToChange4 = localStorage.getItem('colorToChange4');

// Check if colorToChange is not null or undefined
if (colorToChange4) {
    // Get the element by its ID
    const box4 = document.getElementById('box4');

    // Change the background color of box1
    box4.style.backgroundColor = colorToChange4;

    // Clear the localStorage value after using it (optional)
}

// Check if the buttonClickability flag is not null or undefined in localStorage
const buttonClickability4 = localStorage.getItem('buttonClickability4');

if (buttonClickability4 === 'disabled') {
    // Get the button element by its ID
    const button = document.getElementById('box4');

    // Disable the button
    button.disabled = true;

    // Optionally, you can change the button's style to indicate it's disabled
    button.style.opacity = '0.8'; // For example, reduce opacity

    // You might also want to prevent default behavior on click
    button.addEventListener('click', function(event) {
        event.preventDefault();
        return false;
    });
}