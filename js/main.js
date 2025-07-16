// Main JavaScript file for AutoCAD Tutorial website

// Handle dropdown menus
document.addEventListener('DOMContentLoaded', function() {
    // Set up dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            this.querySelector('.dropdown-menu').classList.toggle('show');
            e.stopPropagation();
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
    
    // Handle tutorial menu interactions
    const menuItems = document.querySelectorAll('.tutorial-menu .menu-item');
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                item.classList.toggle('open');
            });
        }
    });
    
    // Handle missing images with fallbacks
    handleMissingImages();
});

// Function to handle missing images
function handleMissingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            // Create a placeholder element with the image alt text
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = `
                <div class="placeholder-icon"><i class="fas fa-image"></i></div>
                <p>${img.alt || 'Hình ảnh đang được cập nhật'}</p>
            `;
            
            // Replace the image with the placeholder
            if (img.parentNode) {
                img.parentNode.replaceChild(placeholder, img);
            }
        };
    });
}

// Handle mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
        }
        
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== "#") {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
            });
        }
        }
    });
}); 