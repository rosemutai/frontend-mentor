const form = document.getElementById('form')
const error = document.getElementById('error')
const emailInput = document.getElementById('email')
const successSubmission = document.getElementById('submit-success')
const subscriptionContent = document.getElementById('subscription-form-content')
const mainContent = document.getElementById('main-content')


function displayError(messageError) {
    error.innerHTML += `<span>${messageError}</span>`
}

function isValidEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


const handleSubmit = (e) => {
    e.preventDefault(e)

     const {email} = form.elements

    if(!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Valid Email required");
        email.style.borderColor = '#ff6257';
        email.style.borderWidthn= '2px';
        email.style.backgroundColor = '#ff625733';
        emailInput.classList.add('invalid-email')
        return;
    } else {
        mainContent.style.minHeight = '100vh'
        subscriptionContent.style.display = 'none'
        successSubmission.style.display = 'block'

        // successSubmission.classList.remove('confirmation-message')
        // successSubmission.classList.add('confirmed')

    }
}


form.addEventListener('submit', handleSubmit)