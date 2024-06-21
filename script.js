document.addEventListener('DOMContentLoaded', function() {
    // Detect iOS user agent
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Show AR link only if on iOS
    if (isIOS) {
        document.querySelector('.ar-link').style.display = 'block';
        document.querySelector('.non-ios').style.display = 'none';
    } else {
        document.querySelector('.ar-link').style.display = 'none';
        document.querySelector('.non-ios').style.display = 'block';
    }
});
