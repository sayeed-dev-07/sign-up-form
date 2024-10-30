const err1 = document.querySelector('.error-1');
const err2 = document.querySelector('.error-2');
const err3 = document.querySelector('.error-3');
const err4 = document.querySelector('.error-4');
const err5 = document.querySelector('.error-5');

const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    });
});

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateInput(input) {
    const firstName = document.querySelector('#firstName').value.trim();
    const secondName = document.querySelector('#secondName').value.trim();
    const phoneNumber = document.querySelector('#number').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirmPass').value.trim();

    // Resetting classes and hiding error messages
    input.classList.remove('valid', 'invalid');

    // Validate based on input type
    if (input.id === 'firstName') {
        if (firstName === '') {
            err1.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err1.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }

    if (input.id === 'secondName') {
        if (secondName === '') {
            err2.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err2.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }

    if (input.id === 'number') {
        if (phoneNumber === '') {
            err3.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err3.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }

    if (input.id === 'email') {
        if (!emailRegex.test(email)) { // Validate email using regex
            err3.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err3.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }

    if (input.id === 'password') {
        if (password.length < 8) {
            err4.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err4.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }

    if (input.id === 'confirmPass') {
        if (password !== confirmPassword) {
            err5.removeAttribute('hidden');
            input.classList.add('invalid');
        } else {
            err5.setAttribute('hidden', true); // Hide error message if valid
            input.classList.add('valid');
        }
    }
}

// Reset function to clear the form and reset styles
function resetForm() {
    inputs.forEach(input => {
        input.value = '';  // Clear input value
        input.classList.remove('valid', 'invalid');  // Remove validation classes
        err1.setAttribute('hidden', true);  // Hide error messages
        err2.setAttribute('hidden', true);
        err3.setAttribute('hidden', true);
        err4.setAttribute('hidden', true);
        err5.setAttribute('hidden', true);
        // Reset the label position
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            // label.style.transform = 'translateX(0) translateY(0) scale(1)'; // Reset label position
            label.style.color = ''; // Reset label color if needed
        }
    });
}

// // Add click event to the button to reset the form
btn.addEventListener('click', (e) => {
    e.preventDefault()
    resetForm()
});