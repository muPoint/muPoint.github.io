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
