const firstEmailInput = document.getElementById('first-email');
const secondEmailInput = document.getElementById('second-email');
const error1 = document.getElementById('first-error');
const error2 = document.getElementById('second-error');
const button = document.querySelector('.btn');
const button2 = document.querySelector('.second-btn');

button.addEventListener('click', firstEmailValidation);

button2.addEventListener('click', secondEmailValidation);

function firstEmailValidation() {
    event.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = firstEmailInput.value;

    if(emailRegex.test(email)) {
        error1.classList.add('hidden');
        firstEmailInput.style.borderColor = "black";
    } else {
        error1.classList.remove('hidden');
        firstEmailInput.style.borderColor = "red";
    }
}

function secondEmailValidation() {
    event.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = secondEmailInput.value;

    if(emailRegex.test(email)) {
        error2.classList.add('hidden2');
    } else {
        error2.classList.remove('hidden2');
    }
}
