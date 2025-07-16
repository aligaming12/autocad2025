document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị modal đăng nhập
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    
    // Mở modal đăng nhập khi nhấn nút đăng nhập
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
    }
    
    // Đóng modal khi nhấn nút đóng
    if (closeBtn && loginModal) {
        closeBtn.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
    }
    
    // Đóng modal khi click bên ngoài modal
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Xử lý form đăng nhập
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Kiểm tra thông tin đăng nhập admin
            // Lưu ý: Đây chỉ là xác thực client-side đơn giản
            // Trong môi trường thực tế, nên sử dụng xác thực an toàn hơn
            if (username === 'admin' && password === 'admin123') {
                // Lưu trạng thái đăng nhập vào localStorage
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    role: 'admin',
                    displayName: 'Admin'
                }));
                
                // Hiển thị thông báo thành công và chuyển hướng
                showMessage('success', 'Đăng nhập thành công!');
                setTimeout(function() {
                    window.location.reload();
                }, 1500);
            } else {
                showMessage('error', 'Tên đăng nhập hoặc mật khẩu không đúng!');
            }
        });
    }
    
    // Kiểm tra trạng thái đăng nhập và cập nhật UI
    function checkAuthState() {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        if (isAuthenticated) {
            // Cập nhật UI cho người dùng đã đăng nhập
            if (loginBtn) {
                loginBtn.textContent = 'Đăng xuất';
                loginBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    logout();
                });
            }
            
            // Ẩn nút đăng ký
            const registerBtn = document.getElementById('registerBtn');
            if (registerBtn) {
                registerBtn.style.display = 'none';
            }
            
            // Thêm menu quản trị nếu là admin
            if (user.role === 'admin') {
                const nav = document.querySelector('nav ul');
                if (nav) {
                    // Kiểm tra nếu menu quản trị đã tồn tại
                    if (!document.querySelector('.admin-menu')) {
                        const adminLi = document.createElement('li');
                        adminLi.className = 'dropdown admin-menu';
                        adminLi.innerHTML = `
                            <a href="#">Quản trị <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu glass-effect">
                                <li><a href="admin/dashboard.html">Dashboard</a></li>
                                <li><a href="admin/tutorials.html">Quản lý bài học</a></li>
                                <li><a href="admin/users.html">Quản lý người dùng</a></li>
                            </ul>
                        `;
                        nav.appendChild(adminLi);
                    }
                }
            }
        }
    }
    
    // Xử lý đăng xuất
    function logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        showMessage('success', 'Đăng xuất thành công!');
        setTimeout(function() {
            window.location.reload();
        }, 1500);
    }
    
    // Hiển thị thông báo
    function showMessage(type, message) {
        // Kiểm tra nếu đã có thông báo, xóa đi
        const existingMessage = document.querySelector('.message-alert');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Tạo thông báo mới
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-alert ${type}`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        // Hiển thị thông báo
        setTimeout(() => {
            messageDiv.classList.add('show');
        }, 100);
        
        // Tự động ẩn sau 3 giây
        setTimeout(() => {
            messageDiv.classList.remove('show');
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }, 3000);
    }
    
    // Thêm CSS cho thông báo
    const style = document.createElement('style');
    style.textContent = `
        .message-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .message-alert.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .message-alert.success {
            background-color: rgba(0, 200, 83, 0.9);
        }
        
        .message-alert.error {
            background-color: rgba(255, 75, 75, 0.9);
        }
    `;
    document.head.appendChild(style);
    
    // Kiểm tra trạng thái đăng nhập khi tải trang
    checkAuthState();
}); 