document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const selectedImages = [];

    imageContainer.addEventListener('click', function (event) {
        const clickedImage = event.target;
        const imageNumber = parseInt(clickedImage.dataset.number);

        if (!isNaN(imageNumber)) {
            if (selectedImages.includes(imageNumber)) {
            } else {
                selectedImages.push(imageNumber);
            }
            checkCombination();
        }
    });

    function checkCombination() {
        if (selectedImages.length === 6 &&
            selectedImages.includes(1) &&
            selectedImages.includes(2) &&
            selectedImages.includes(4) &&
            selectedImages.includes(5) &&
            selectedImages.includes(6) &&
            selectedImages.includes(7)) {
            alert("You win!");
        } else if (selectedImages.includes(3) || selectedImages.includes(8)) {
            alert("You lose!");
        }
    }
});
function returnToMain() {
    window.location.href = 'main.html';
}
