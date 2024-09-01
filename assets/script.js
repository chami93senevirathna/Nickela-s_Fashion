
function openNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = "0";
  }
  
  function closeNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.offsetWidth * -1 + "px";
  }
  




document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting automatically

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (validateEmail(email) && validatePassword(password)) {
        alert("Login successful!");
        // You can proceed with form submission or authentication here
        this.submit();
    } else {
        alert("Please enter valid email and password.");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6; // Password should be at least 6 characters long
}


/*checkbox*/
function myFunction() {
    alert("Successfully Apply your Disscount Code");
  }

function myFunction1() {
    alert("Successfully Proceed ");
  }

/*Add Cart*/
function AddCart() {
    alert("Product Added to cart Successfully ");
  }

  function Submit() {
    alert("Product Added to cart Successfully ");
  }