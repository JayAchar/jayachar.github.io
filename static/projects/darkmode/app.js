// Select dark mode toggle button
const darkToggle = document.querySelector(".adjust");

// Change dark-mode attribute function
darkToggle.addEventListener('click', function() {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})
