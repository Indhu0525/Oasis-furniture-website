// Function to show the order confirmation and hide the login form
// function showOrderConfirmation() {
//     document.getElementById("loginForm").style.display = "none";
//     document.getElementById("orderConfirmation").style.display = "block";
//     document.getElementById("offcanvasRightLabel").textContent = "";
//   }
  
  // Function to reset to the login form (optional)
//   function showLoginForm() {
//     document.getElementById("loginForm").style.display = "block";
//     document.getElementById("orderConfirmation").style.display = "none";
//     document.getElementById("offcanvasRightLabel").textContent = "Login";
//   }

// createaccount.js

// Get the Proceed to Payment button
// Get the Proceed to Payment button
const proceedToPaymentButton = document.getElementById('proceedToPayment');

// Show payment offcanvas when clicking the button
proceedToPaymentButton.addEventListener('click', function() {
    // Hide the checkout offcanvas
    const checkoutOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasRight'));
    checkoutOffcanvas.hide();

    // Create an instance of the payment offcanvas
    const paymentOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasPayment'));
    
    // Show the payment offcanvas
    paymentOffcanvas.show();
});

// Get the Pay Now button
const payNowButton = document.getElementById('payNowButton');

// Show order confirmation offcanvas when clicking the Pay Now button
payNowButton.addEventListener('click', function() {
    // Hide the payment offcanvas
    const paymentOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasPayment'));
    paymentOffcanvas.hide();

    // Create an instance of the confirmation offcanvas
    const confirmationOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasConfirmation'));
    
    // Show the order confirmation offcanvas
    confirmationOffcanvas.show();
});

// Attach event listeners for showing create account
document.getElementById('showCreateAccount').addEventListener('click', showCreateAccountForm);

// Show login form initially when the checkout offcanvas opens
const offcanvasElement = document.getElementById('offcanvasRight');
offcanvasElement.addEventListener('show.bs.offcanvas', showLoginForm);


