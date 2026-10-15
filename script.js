
const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;

    // Clear old messages
    document.querySelectorAll("small").forEach(function (error) {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    let valid = true;

    // Name validation: letters and spaces only
    if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").textContent =
            "Enter a name using letters and spaces only.";
        valid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    }

    // Phone validation: exactly 10 digits
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Phone number must contain exactly 10 digits.";
        valid = false;
    }

    // Department validation
    if (department === "") {
        document.getElementById("departmentError").textContent =
            "Please select a department.";
        valid = false;
    }

    // Successful registration
    if (valid) {
        document.getElementById("successMessage").textContent =
            "Employee registered successfully!";

        form.reset();
    }
});
