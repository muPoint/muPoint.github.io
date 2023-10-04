
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
const counter = document.querySelector('.counter');

let currentIndex = 0;

function updateCounter() {
    counter.textContent = `${currentIndex + 1} / ${galleryContainer.children.length}`;
}

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
        updateBullets(); updateCounter();
    }
});

nextArrow.addEventListener('click', () => {
    if (currentIndex < galleryContainer.children.length - 1) {
        currentIndex++;
        galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
        updateBullets(); updateCounter();
    }
});

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentIndex = index;
        galleryContainer.scrollTo({ left: currentIndex * galleryContainer.offsetWidth, behavior: 'smooth' });
        updateBullets(); updateCounter();
    });
});

galleryContainer.addEventListener('scroll', () => {
    currentIndex = Math.round(galleryContainer.scrollLeft / galleryContainer.offsetWidth);
    updateBullets(); updateCounter();
});

// Initialize bullets
updateBullets();
updateCounter();


/*captions*/
const captionButtons = document.querySelectorAll('.caption-button');
const closeCaptionButtons = document.querySelectorAll('.close-caption-button');
const captions = document.querySelectorAll('.caption');

captionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        captions[index].classList.toggle('show-caption');
        button.style.display = 'none'; // Hide the "+" button
    });
});

closeCaptionButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        captions[index].classList.remove('show-caption');
        captionButtons[index].style.display = 'block'; // Show the "+" button when closing the caption
    });
});

/*email pop*/

function openPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
