// Toggle Password Visibility
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Example form submission handling
const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form Submitted');
});
