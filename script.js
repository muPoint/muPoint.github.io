function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var menuBtn = document.querySelector(".menu-btn");

    if (navbar.style.display === "block") {
        navbar.style.display = "none";
        menuBtn.innerHTML = "&#9776;"; // Change back to burger icon
    } else {
        navbar.style.display = "block";
        menuBtn.innerHTML = "&#10005;"; // Change to cross icon
    }
}

window.addEventListener("resize", function () {
    var menuBtn = document.querySelector(".menu-btn");
    var navbar = document.getElementById("navbar");

    if (window.innerWidth <= 2768) {
        menuBtn.style.display = "block";
        navbar.style.display = "none";
    } else {
        menuBtn.style.display = "none";
        navbar.style.display = "block";
    }
});

// Initialize menu state based on window width
if (window.innerWidth <= 2768) {
    var menuBtn = document.querySelector(".menu-btn");
    var navbar = document.getElementById("navbar");
    menuBtn.style.display = "block";
    navbar.style.display = "none";
}
