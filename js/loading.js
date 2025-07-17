window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        // Add a small delay to prevent flickering on fast connections
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 200);
    }
}); 