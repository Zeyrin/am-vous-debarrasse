document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.fcf-form-class');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Your form submission logic here
        // ...

        // Redirect to the index page with an alert message
        const alertMessage = "Form submitted successfully!";
        window.location.href = `/index.html?alert=${encodeURIComponent(alertMessage)}`;
    });
});