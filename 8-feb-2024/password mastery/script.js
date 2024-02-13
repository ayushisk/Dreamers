var passwordInput = document.getElementById('password');
var message = document.getElementById('message');

passwordInput.addEventListener('input', function() {

  var password = passwordInput.value;

  if (validatePassword(password)) {
    message.textContent = 'Valid password!';
    message.style.color = 'green';
  } else {
    message.textContent = 'Must include at least one lowercase letter, uppercase letter, number, and special character. Must be at least 8 characters long.';
    message.style.color = 'red';
  }
});

function validatePassword(password) {
    
    var hasLower = /[a-z]/.test(password);
   
    var hasUpper = /[A-Z]/.test(password);
    
    var hasNumber = /\d/.test(password);
   
    var hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLower && hasUpper && hasNumber && hasSpecial && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}