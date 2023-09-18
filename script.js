function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var menuBtn = document.querySelector(".menu-btn");

    if (navbar.classList.contains("menu-active")) {
        navbar.classList.remove("menu-active");
        menuBtn.innerHTML = "&#9776;"; // Change back to burger icon
    } else {
        navbar.classList.add("menu-active");
        menuBtn.innerHTML = "&#10005;"; // Change to cross icon
    }
}
