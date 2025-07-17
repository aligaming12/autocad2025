document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (contactForm && submitButton) {
        // Disable the submit button initially
        submitButton.disabled = true;

        contactForm.addEventListener('submit', async (e) => {
            // Prevent the default form submission
            e.preventDefault();
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Đang gửi...';
            formStatus.textContent = '';
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const turnstileResponse = formData.get('cf-turnstile-response');
            
            // Validate data
            if (!name || !email || !subject || !message || !turnstileResponse) {
                formStatus.textContent = 'Vui lòng điền đầy đủ thông tin.';
                formStatus.style.color = '#f44336';
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi đi';
                return;
            }
            
            try {
                // Send data to Cloudflare Worker
                const response = await fetch('https://lienhe.oddtran111.workers.dev/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message,
                        turnstileToken: turnstileResponse
                    })
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    // Success
                    formStatus.textContent = 'Gửi tin nhắn thành công! Cảm ơn bạn đã đóng góp ý kiến.';
                    formStatus.style.color = '#34a853';
                    
                    // Clear the form fields after a short delay
                    setTimeout(() => {
                        contactForm.reset();
                        // IMPORTANT: Reset the turnstile widget to get a new token for the next submission
                        if (window.turnstile) {
                            window.turnstile.reset();
                        }
                        submitButton.disabled = true;
                        submitButton.textContent = 'Gửi đi';
                    }, 3000);
                } else {
                    // API error
                    formStatus.textContent = result.error || 'Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.';
                    formStatus.style.color = '#f44336';
                    submitButton.disabled = false;
                    submitButton.textContent = 'Gửi đi';
                    
                    // Reset the turnstile widget
                    if (window.turnstile) {
                        window.turnstile.reset();
                    }
                }
            } catch (error) {
                // Network error
                formStatus.textContent = 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet và thử lại.';
                formStatus.style.color = '#f44336';
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi đi';
                
                // Reset the turnstile widget
                if (window.turnstile) {
                    window.turnstile.reset();
                }
            }
        });
    }
});

// This function is called by the Turnstile widget when the challenge is successfully completed
window.onTurnstileSuccess = function (token) {
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
}; 