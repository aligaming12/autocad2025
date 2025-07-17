document.addEventListener('DOMContentLoaded', () => {
    // Featured Tutorials on Homepage
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid && typeof tutorials !== 'undefined') {
        const featured = tutorials.slice(0, 4); 
        renderFeaturedTutorials(featured);
    }

    function renderFeaturedTutorials(items) {
        featuredGrid.innerHTML = items.map(item => `
            <div class="tutorial-card">
                <a href="lesson.html?id=${item.id}" target="_blank">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="tutorial-card-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </a>
            </div>
        `).join('');
    }
});

// --- Loading Screen Logic ---
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}); 