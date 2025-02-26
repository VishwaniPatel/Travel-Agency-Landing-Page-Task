document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Toggle icon between menu and close
        const icon = hamburger.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times"); // Close icon
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});
