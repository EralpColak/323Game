document.addEventListener('DOMContentLoaded', function () {
    const pointCounter = document.getElementById('pointCounter');

    // Retrieve the user's points from localStorage
    const storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }
});

//window.addEventListener('beforeunload', function () {
//Reset points only when the browser is closed
//  localStorage.setItem('userPoints', 0);
//});


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