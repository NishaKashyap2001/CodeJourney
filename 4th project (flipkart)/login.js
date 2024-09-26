// Handle Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
      
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid username or password');
    }
});

// Handle Signup functionality
document.getElementById('signupButton').addEventListener('click', function() {
    const newUsername = prompt('Enter your new username:');
    const newPassword = prompt('Enter your new password:');

    if (newUsername && newPassword) {
       
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Signup successful! Now you can log in.');
    } else {
        alert('Please enter a valid username and password.');
    }
});

// Handle Forgot Password functionality
document.getElementById('forgotPasswordButton').addEventListener('click', function() {
    const email = prompt('Enter your email/username:');
    
    // Check if the entered username exists in localStorage
    const storedUsername = localStorage.getItem('username');

    if (email === storedUsername) {
        const newPassword = prompt('Enter your new password:');
        if (newPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password reset successful! Now you can log in with the new password.');
        } else {
            alert('Please enter a valid new password.');
        }
    } else {
        alert('Username not found!');
    }
});
