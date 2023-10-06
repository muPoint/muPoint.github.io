/* Gallery */
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const counter = document.querySelector('.counter');

    let currentIndex = 0;

    function updateCounter() {
        counter.textContent = `${currentIndex + 1} / ${galleryContainer.children.length}`;
    }

    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
            updateCounter();
        }
    });

    nextArrow.addEventListener('click', () => {
        if (currentIndex < galleryContainer.children.length - 1) {
            currentIndex++;
            galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
            updateCounter();
        }
    });

    galleryContainer.addEventListener('scroll', () => {
        currentIndex = Math.round(galleryContainer.scrollLeft / galleryContainer.offsetWidth);
        updateCounter();
    });
});
