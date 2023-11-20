document.addEventListener('DOMContentLoaded', function () {
    const passwordBoxes = document.querySelectorAll('.password-box');
    passwordBoxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            openNewGamePage(index + 1);
        });
    });
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        checkPassword();
    });
    const checkbox = document.getElementById('myCheckbox');

    let userInPage = false;
    let submitButtonClicked = false;
    setTimeout(function () {
        userInPage = true;
    }, 3000);

    const intervalId = setInterval(function () {
        if (userInPage && checkbox.checked && submitButtonClicked) {
            alert('You gain points!');
            clearInterval(intervalId);
        }
    }, 1000);

    submitButton.addEventListener('click', function () {

        submitButtonClicked = true;
    });





});





//************************************** */
function openNewGamePage(gameNumber) {
    window.location.href = 'game' + gameNumber + '.html';
}

function returnToMain() {
    window.location.href = 'main.html';
}

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const correctPasswords = [".", ",", "!"]; // burda gerekli kuralları yazalım

    if (correctPasswords.some(password => enteredPassword.toLowerCase().includes(password))) {
        alert('Password is correct!');
    } else {
        alert('Password is incorrect!');
    }
}




// ***************************************************** game 4
document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const selectedImages = [];

    imageContainer.addEventListener('click', function (event) {
        const clickedImage = event.target;
        const imageNumber = parseInt(clickedImage.dataset.number);

        if (!isNaN(imageNumber)) {// chatgptye yaptırdım click kontrol birde yanlışlıkla tıklarsa geri aldırmaca
            if (selectedImages.includes(imageNumber)) {
            } else {

                selectedImages.push(imageNumber);
            }
            checkCombination();
        }
    });

    function checkCombination() { //Burası doğru fotolara tıklanıp tıklanmadığına bakıyor.
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







