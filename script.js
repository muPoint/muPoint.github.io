function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

window.addEventListener("resize", function () {
    var menuBtn = document.querySelector(".menu-btn");
    var navbar = document.getElementById("navbar");

    if (window.innerWidth <= 1768) {
        menuBtn.style.display = "block";
        navbar.style.display = "none";
    } else {
        menuBtn.style.display = "none";
        navbar.style.display = "block";
    }
});

// Initialize menu state based on window width
if (window.innerWidth <= 1768) {
    var menuBtn = document.querySelector(".menu-btn");
    var navbar = document.getElementById("navbar");
    menuBtn.style.display = "block";
    navbar.style.display = "none";
}
