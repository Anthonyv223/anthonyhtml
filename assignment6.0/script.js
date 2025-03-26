// Display a message in the browser console
console.log("CSS + JavaScript is powerful!");

// Show an alert message when the page loads
window.onload = function () {
    alert("Welcome to Assignment 5 with JavaScript!");
};

// Function to toggle between light mode and dark mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");

    // Display a message in the console when the button is clicked
    console.log("Theme changed!");
}