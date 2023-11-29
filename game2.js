document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('myCheckbox');
    const submitButton = document.getElementById('submitButton');

    let userInPage = false;
    let checkboxClicked = false;
    let submitButtonClicked = false;

    setTimeout(function () {
        userInPage = true;
    }, 30000);

    const intervalId = setInterval(function () {
        if (userInPage && checkboxClicked && submitButtonClicked) {
            alert('You gain points!');
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
            submitButtonClicked = true;
        }
    });
});
function returnToMain() {
    window.location.href = 'main.html';
}
