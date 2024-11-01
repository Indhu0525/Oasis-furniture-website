// Event listener for "Create Account" link
document.getElementById('showCreateAccount').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('offcanvasRightLabel').innerText = 'Create Account'; 
});

// Event listener for "Login" link
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('createAccountForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('offcanvasRightLabel').innerText = 'Login'; 
});


