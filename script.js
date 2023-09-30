
/* MENU */
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

/* CURSOR */
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // Update the cursor's position
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});



/* MODEL-VIEWER */
function showModel(modelId) {
    const modelViewer = document.querySelector(`#${modelId}`);
    // Hide all models first
    document.querySelectorAll('model-viewer').forEach(model => {
        model.style.display = 'none';
    });
    // Show the selected model
    modelViewer.style.display = 'block';
}

/* GALLERY VIEWER */
const galleryContainer = document.querySelector('.gallery-container');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const bullets = document.querySelectorAll('.bullet');

let currentIndex = 0;

function updateBullets() {
    bullets.forEach((bullet, index) => {
        if (index === currentIndex) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
        updateBullets();
    }
});

nextArrow.addEventListener('click', () => {
    if (currentIndex < galleryContainer.children.length - 1) {
        currentIndex++;
        galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
        updateBullets();
    }
});

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentIndex = index;
        galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
        updateBullets();
    });
});

galleryContainer.addEventListener('scroll', () => {
    currentIndex = Math.round(galleryContainer.scrollLeft / galleryContainer.offsetWidth);
    updateBullets();
});

// Initialize bullets
updateBullets();
