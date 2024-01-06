document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate form inputs
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (fname === "" || lname === "" || email === "" || password === "") {
            displayErrorMessage("All fields are required");
        } else {
            // You can perform additional validation or submit the form data to a server here
            alert("Registration successful!");
        }
    });

    function displayErrorMessage(message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.textContent = message;

        form.appendChild(errorMessage);
        setTimeout(function () {
            errorMessage.remove();
        }, 3000);
    }
});