$(document).ready(function() {
    // Signup form submission
    $('#signup-form').submit(function(event) {
      event.preventDefault();
  
      const username = $('input[name="username"]').val();
      const password = $('input[name="password"]').val();
      const confirmPassword = $('input[name="confirmPassword"]').val();
  
      // Check if passwords match
      if (password !== confirmPassword) {
        showMessage('Passwords do not match');
        return;
      }
  
      // Send signup request via AJAX
      $.ajax({
        type: 'POST',
        url: '/signup',
        data: {
          username: username,
          password: password
        },
        success: function(response) {
          showMessage(response.message);
        },
        error: function(xhr, status, error) {
          showMessage('Signup failed: ' + error);
        }
      });
    });
  
    // Signin form submission
    $('#signin-form').submit(function(event) {
      event.preventDefault();
  
      const username = $('input[name="username"]').val();
      const password = $('input[name="password"]').val();
  
      // Send signin request via AJAX
      $.ajax({
        type: 'POST',
        url: '/signin',
        data: {
          username: username,
          password: password
        },
        success: function(response) {
          showMessage(response.message);
        },
        error: function(xhr, status, error) {
          showMessage('Signin failed: ' + error);
        }
      });
    });
  
    // Function to display messages
    function showMessage(message) {
      $('#message').text(message);
    }
  });
  