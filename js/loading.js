// Vẽ logo AutoCAD bằng SVG
document.addEventListener('DOMContentLoaded', function() {
    // Logo SVG path
    const logoSvg = document.getElementById('logo-svg');
    
    if (logoSvg) {
        logoSvg.innerHTML = `
            <g>
                <path class="shape shape1" d="M100,25 A75,75 0 0,1 175,100"></path>
                <path class="shape shape2" d="M175,100 A75,75 0 0,1 100,175"></path>
                <path class="shape shape3" d="M100,175 A75,75 0 0,1 25,100"></path>
                <path class="shape shape4" d="M25,100 A75,75 0 0,1 100,25"></path>
            </g>
        `;
    }

    // Loading progress simulation
    let progress = 0;
    const progressBar = document.querySelector('.progress');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.querySelector('body > *:not(#loading-screen)');

    if (progressBar && loadingScreen) {
        const interval = setInterval(() => {
            progress += Math.random() * 5;
            if (progress >= 100) {
                progress = 100;
                progressBar.style.width = progress + '%';
                clearInterval(interval);
                
                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');
                }, 500);
            }
            progressBar.style.width = progress + '%';
        }, 80);
    }
});

// Auth Status UI
function updateAuthUI(user) {
    const authContainer = document.getElementById('auth-container');
    if (authContainer) {
        if (user) {
            let avatar = user.photoURL ? `<img src="${user.photoURL}" class="rounded-circle" alt="${user.displayName}" width="30" height="30">` : `<div class="avatar-placeholder">${user.displayName.charAt(0)}</div>`;
            
            let adminMenu = '';
            if (user.role === 'admin') {
                adminMenu = `<li><a class="dropdown-item" href="/admin/dashboard.html">Trang Admin</a></li><li><hr class="dropdown-divider"></li>`;
            }

            authContainer.innerHTML = `
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        ${avatar}
                        <span class="d-none d-sm-inline mx-1">${user.displayName}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="userDropdown">
                        ${adminMenu}
                        <li><a class="dropdown-item" href="#">Hồ Sơ</a></li>
                        <li><a class="dropdown-item" href="#">Cài Đặt</a></li>
                        <li><a class="dropdown-item" id="logout-btn">Đăng xuất</a></li>
                    </ul>
                </div>
            `;
        } else {
            authContainer.innerHTML = `
                <button class="btn btn-outline-light me-2" id="login-btn">Đăng Nhập</button>
                <button class="btn btn-primary" id="signup-btn">Đăng Ký</button>
            `;
        }
    }
} 