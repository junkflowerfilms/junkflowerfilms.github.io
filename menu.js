// create JS file for menu button functionality

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuLinks = document.querySelectorAll(".dropdown-menu a");

    // Toggle menu visibility on button click
    menuButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            dropdownMenu.classList.remove("show"); // Hide menu
        });
    });
});
