// Event listener for "Forgot Password?" link
document.getElementById('showForgotPassword').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
    document.getElementById('offcanvasRightLabel').innerText = 'Forgot Password';
});

// Event listener for "Back to Login" link in Forgot Password form
document.getElementById('backToLogin').addEventListener('click', function() {
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('offcanvasRightLabel').innerText = 'Login';
});