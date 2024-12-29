// Reference to the content container
const content = document.getElementById('content');

// Load a specific section
function loadSection(section) {
    switch (section) {
        case 'about':
            import('./about.js').then(module => module.render(content));
            break;
        case 'portfolio':
            import('./portfolio.js').then(module => module.render(content));
            break;
        case 'contact':
            import('./contact.js').then(module => module.render(content));
            break;
        default:
            content.innerHTML = '<h2>Welcome to My Portfolio</h2><p>Select a section to view more information.</p>';
    }
}

// Handle navigation button clicks
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        loadSection(section);
    });
});

// Load default section on page load
loadSection();
