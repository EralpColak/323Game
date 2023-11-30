document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const selectedImages = [];
    const pointCounter = document.getElementById('pointCounter');

    // Retrieve the user's points from localStorage
    const storedPoints = localStorage.getItem('userPoints');

    // If points are found in localStorage, update the display
    if (storedPoints !== null) {
        pointCounter.innerText = 'Points: ' + storedPoints;
    }

    imageContainer.addEventListener('click', function (event) {
        const clickedImage = event.target;
        const imageNumber = parseInt(clickedImage.dataset.number);

        if (!isNaN(imageNumber)) {
            if (selectedImages.includes(imageNumber)) {
                // Image already selected, do nothing
            } else {
                selectedImages.push(imageNumber);
            }
            checkCombination();
        }
    });

    function checkCombination() {
        if (
            selectedImages.length === 6 &&
            selectedImages.includes(1) &&
            selectedImages.includes(2) &&
            selectedImages.includes(4) &&
            selectedImages.includes(5) &&
            selectedImages.includes(6) &&
            selectedImages.includes(7)
        ) {
            // User wins
            alert("Good job. You just choose the correct programs. You earned 25 points!'");
            updatePoints(25);
            returnToMain();
        } else if (selectedImages.includes(3) || selectedImages.includes(8)) {
            alert("You lose.You didn't choose correct programs! ");
            // User loses
            returnToMain();
        }
    }
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
