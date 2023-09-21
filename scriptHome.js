const images = document.querySelectorAll(".gallery-image");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const counter = document.getElementById("counter");
const galleryWrapper = document.getElementById("gallery-wrapper");

let currentImageIndex = 0;
let isScrolling = false;

function updateCounter() {
    counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
}

prevArrow.addEventListener("click", () => {
    if (!isScrolling) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCounter();
        showImage();
    }
});

nextArrow.addEventListener("click", () => {
    if (!isScrolling) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCounter();
        showImage();
    }
});

function showImage() {
    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

updateCounter();
showImage();

// Enable scrolling with mouse or trackpad
galleryWrapper.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && !isScrolling) {
        // Scroll down, show next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCounter();
        showImage();
        disableScrollForAWhile();
    } else if (e.deltaY < 0 && !isScrolling) {
        // Scroll up, show previous image
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCounter();
        showImage();
        disableScrollForAWhile();
    }
});

function disableScrollForAWhile() {
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 500); // Adjust the duration as needed
}
