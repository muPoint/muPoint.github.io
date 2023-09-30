
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
