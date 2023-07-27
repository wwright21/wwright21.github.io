document.addEventListener('DOMContentLoaded', function () {
    const introParagraph = document.getElementById('intro-paragraph');

    // Hide the paragraph initially
    introParagraph.style.display = 'none';

    // Delayed display after 1000 milliseconds (1 second)
    setTimeout(function () {
        introParagraph.style.opacity = 1;
        introParagraph.style.display = 'inline'; // Or 'inline', 'inline-block', etc. depending on your layout
    }, 3500);
});
