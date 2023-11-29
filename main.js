document.addEventListener('DOMContentLoaded', function () {
    const passwordBoxes = document.querySelectorAll('.password-box');
    passwordBoxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            openNewGamePage(index + 1);
        });
    });
});

function openNewGamePage(gameNumber) {
    window.location.href = 'game' + gameNumber + '.html';
}
