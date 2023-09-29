
/*MENU*/
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});


/*MODEL-VIEWER*/
function showModel(modelId) {
    const modelViewer = document.querySelector(`#${modelId}`);
    // Hide all models first
    document.querySelectorAll('model-viewer').forEach(model => {
        model.style.display = 'none';
    });
    // Show the selected model
    modelViewer.style.display = 'block';
}


