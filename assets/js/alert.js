document.addEventListener("DOMContentLoaded", function () {
    // Function to get URL parameter by name
    function getURLParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Function to display an alert message
    function showAlertMessage() {
        // Check for the 'alert' URL parameter
        var alertMessage = getURLParameter('alert');

        // Display an alert if the 'alert' parameter is present
        if (alertMessage) {
            alert(alertMessage);
        }
    }

    // Call the showAlertMessage function
    showAlertMessage();
});
