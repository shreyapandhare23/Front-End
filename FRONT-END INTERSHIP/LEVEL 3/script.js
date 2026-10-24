document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const passInput = document.getElementById('pass');
    
    const nameError = document.getElementById('nameError');
    const passError = document.getElementById('passError');

    // Range slider live value updates
    const rangeInput = document.getElementById('percentageRange');
    const rangeValue = document.getElementById('rangeValue');
    
    if (rangeInput && rangeValue) {
        rangeInput.addEventListener('input', (e) => {
            rangeValue.textContent = e.target.value;
        });
    }

    // Handle Form Submission Validation
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the form from submitting automatically
        
        let isValid = true;
        let firstInvalidInput = null; // Variable to keep track of the first error field

        // Reset previous error messages and styles
        nameError.textContent = '';
        passError.textContent = '';
        nameInput.style.borderColor = '#cbd5e0';
        passInput.style.borderColor = '#cbd5e0';

        // 1. Validate Name Field
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.color = '#e53e3e';
            nameError.style.fontSize = '12px';
            nameInput.style.borderColor = '#e53e3e';
            isValid = false;
            
            // Track first error field
            if (!firstInvalidInput) {
                firstInvalidInput = nameInput;
            }
        }

        // 2. Validate Password Field (Custom Pattern: 3 to 10 chars, letters, numbers, @, #)
        const passwordPattern = /^[A-Za-z0-9@#]{3,10}$/;
        const passValue = passInput.value.trim();

        if (passValue === '') {
            passError.textContent = 'Password is required.';
            passError.style.color = '#e53e3e';
            passError.style.fontSize = '12px';
            passInput.style.borderColor = '#e53e3e';
            isValid = false;

            if (!firstInvalidInput) {
                firstInvalidInput = passInput;
            }
        } else if (!passwordPattern.test(passValue)) {
            passError.textContent = 'Password must be 3 to 10 characters (letters, numbers, @, # only).';
            passError.style.color = '#e53e3e';
            passError.style.fontSize = '12px';
            passInput.style.borderColor = '#e53e3e';
            isValid = false;

            if (!firstInvalidInput) {
                firstInvalidInput = passInput;
            }
        }

       // 3. Validate DOJ Field
        if (dojInput.value.trim() === '') {
            dojError.textContent = 'Date of Joining is required.';
            dojError.style.color = '#e53e3e';
            dojError.style.fontSize = '12px';
            dojInput.style.borderColor = '#e53e3e';
            isValid = false;

            if (!firstInvalidInput) firstInvalidInput = dojInput;
        }

        // If there are errors, focus the cursor on the first invalid input field
        if (!isValid) {
            firstInvalidInput.focus();
        } 
        // 3. Final Success Action if everything is correct
        else {
            alert('Form validated and submitted successfully!');
            form.reset();
            rangeValue.textContent = '10'; // Reset range indicator view
        }
    });
}); 