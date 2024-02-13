function validateInput(input) {
    // check if the input is numeric
    if (isNaN(input.value)) {
      input.setCustomValidity("Input must be a number.");
    } else {
      // check the length of the input
      if (input.value.length < 3 || input.value.length > 10) {
        input.setCustomValidity("Input must be between 3 and 10 characters.");
      } else {
        input.setCustomValidity(""); // reset the custom validity message
      }
    }
  }
  
  // listen for the form submit event
  document.getElementById("myForm").addEventListener("submit", function(event) {
    // if the input is not valid, prevent the form from submitting
    if (!validateInput(document.getElementById("inputField"))) {
      event.preventDefault();
    }
  });