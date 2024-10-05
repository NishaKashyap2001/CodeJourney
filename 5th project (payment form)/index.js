// get the form and inut fields

const paymentForm = document.getElementById('payment-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const cardNumberField = document.getElementById('card-number');
const expiryField = document.getElementById('expiry');
const cvvField = document.getElementById('cvv');
const amountField = document.getElementById('amount');


// add event listener for form submission

paymentForm.addEventListener('submit', function(event){
    event.preventDefault();

    // collect values from the input fields

    const userName = nameField.value;
    const userEmail = emailField.value;
    const cardNumber = cardNumberField.value;
    const expiryDate = expiryField.value;
    const cvv = cvvField.value;
    const paymentAmount = amountField.value;

    if (userName === "" || userEmail === "" || cardNumber === "" || expiryDate === "" || cvv === "" || paymentAmount === "") {
        alert('Please fill out all the fields.');
    } else {
        alert('Payment submitted successfully!');
    }
});