const imageContainer = document.querySelectorAll('.image-container');
const totalImages = imageContainer.length;
let currentIndex = 0;

const currentImageElement = document.getElementById('current-image');
const totalImagesElement = document.getElementById('total-images');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateCounter() {
    currentImageElement.textContent = currentIndex + 1;
}

function showImage(index) {
    imageContainer.forEach((container, i) => {
        if (i === index) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateCounter();
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCounter();
    showImage(currentIndex);
});

totalImagesElement.textContent = totalImages;
updateCounter();
showImage(currentIndex);

