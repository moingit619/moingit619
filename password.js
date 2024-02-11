// JavaScript for Password Page
document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var passwordInput = document.getElementById('passwordInput').value;
  var errorMessage = document.getElementById('errorMessage');
  
  if (passwordInput === '123456') { // Change 'yourpassword' to your actual password
    // Redirect to another page upon successful login
    window.location.href = 'https://moingit619.github.io/moingit619/workhub.html'; // Redirect to the next page
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
  }
});
