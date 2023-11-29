document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
        checkPassword();
    });
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
        alert('Password is strong.');
    } else {
        alert('Password is weak! Please follow the password rules.');
    }
}
function returnToMain() {
    window.location.href = 'main.html';
}

