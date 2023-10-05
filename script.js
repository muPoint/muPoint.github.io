
/* Gallery script */
<script>
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
</script>

