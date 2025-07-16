// Vẽ logo AutoCAD bằng SVG
document.addEventListener('DOMContentLoaded', function() {
    // Logo SVG path
    const logoSvg = document.getElementById('logo-svg');
    
    // Tạo logo AutoCAD đơn giản (hình tượng trưng)
    if (logoSvg) {
        logoSvg.innerHTML = `
            <path d="M50,40 L50,160 L150,160 L150,40 Z M50,40 L100,20 L200,20 L150,40 Z M150,40 L200,20 L200,140 L150,160 Z" 
                  fill="none" 
                  stroke="#0078d7" 
                  stroke-width="4"/>
            <path d="M75,80 L125,80 M75,120 L125,120" 
                  fill="none" 
                  stroke="#00a2ff" 
                  stroke-width="3"/>
            <text x="100" y="100" 
                  text-anchor="middle" 
                  fill="#ffffff" 
                  font-family="Arial" 
                  font-size="16" 
                  font-weight="bold">AutoCAD</text>
        `;
    }

    // Loading progress
    let progress = 0;
    const progressBar = document.querySelector('.progress');
    const loadingScreen = document.getElementById('loading-screen');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Giả lập tiến trình tải
    const interval = setInterval(() => {
        progress += Math.random() * 3;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hoàn thành loading
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                
                // Hiển thị các phần tử trên trang với hiệu ứng tuần tự
                setTimeout(() => {
                    fadeElements.forEach(element => {
                        element.classList.add('active');
                    });
                }, 500);
            }, 500);
        }
        
        progressBar.style.width = progress + '%';
    }, 100);

    // Xử lý hiệu ứng hiển thị khi scroll
    const handleScrollAnimation = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    };

    // Thêm event listener cho scroll để kích hoạt hiệu ứng hiển thị
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Kích hoạt hiệu ứng cho các phần tử ban đầu trong viewport
    setTimeout(handleScrollAnimation, 1000);
}); 