
/* Menu */
       
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    menuButton.textContent = menu.style.display === 'none' ? '+' : 'x';
});

/* modelViewer Buttons */
function showModel(modelId) {
    const modelViewer = document.querySelector(`#${modelId}`);
    // Hide all models first
    document.querySelectorAll('model-viewer').forEach(model => {
        model.style.display = 'none';
    });
    // Show the selected model
    modelViewer.style.display = 'block';
}

/* galleryViewer (Arrows/Counter) */

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

/* Caption */
function toggleCaption(captionId, button) {
    const caption = document.getElementById(captionId);
    
    if (caption.style.display === 'none' || caption.style.display === '') {
        caption.style.display = 'block';
        button.textContent = 'Close';
    } else {
        caption.style.display = 'none';
        button.textContent = 'Info';
    }
}

function closeCaption(captionId) {
    const caption = document.getElementById(captionId);
    caption.style.display = 'none';
    button.textContent = 'Info';
}


/* projectsViewer (Tabs)*/

function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Activate the hovered tab button
    const activeButton = document.querySelector(`[onmouseover="showTab('${tabId}')"]`);
    activeButton.classList.add('active');
}

// Initially show the first tab
showTab('tab1');
