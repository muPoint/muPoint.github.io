
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

/* GALLERY BULLETS */

const galleryItems = document.querySelectorAll('.gallery-item');
       const bullets = document.querySelectorAll('.bullet');
       let currentIndex = 0;

       // Function to show the current image
       function showImage(index) {
           galleryItems.forEach((item, i) => {
               if (i === index) {
                   item.style.display = 'block';
               } else {
                   item.style.display = 'none';
               }
           });
           bullets.forEach((bullet, i) => {
               bullet.classList.toggle('active', i === index);
           });
       }

       // Initial display
       showImage(currentIndex);

       // Arrow click handlers
       document.querySelector('.prev-arrow').addEventListener('click', () => {
           currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
           showImage(currentIndex);
       });

       document.querySelector('.next-arrow').addEventListener('click', () => {
           currentIndex = (currentIndex + 1) % galleryItems.length;
           showImage(currentIndex);
       });

       // Bullet click handlers
       bullets.forEach((bullet, i) => {
           bullet.addEventListener('click', () => {
               currentIndex = i;
               showImage(currentIndex);
           });
       });
