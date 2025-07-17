document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (contactForm && submitButton) {
        submitButton.disabled = true;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            submitButton.disabled = true;
            submitButton.textContent = 'Đang gửi...';
            formStatus.textContent = '';
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                'cf-turnstile-response': formData.get('cf-turnstile-response')
            };

            if (!data.name || !data.email || !data.subject || !data.message || !data['cf-turnstile-response']) {
                formStatus.textContent = 'Vui lòng điền đầy đủ thông tin và xác thực.';
                formStatus.style.color = '#f44336';
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi đi';
                return;
            }

            try {
                const response = await fetch('https://lienhe.oddtran111.workers.dev/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    formStatus.textContent = 'Gửi tin nhắn thành công! Cảm ơn bạn đã đóng góp ý kiến.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                    if (window.turnstile) window.turnstile.reset();
                    submitButton.textContent = 'Gửi đi';
                    setTimeout(() => formStatus.textContent = '', 5000);
                } else {
                    formStatus.textContent = result.error || 'Xác thực thất bại. Vui lòng thử lại.';
                    formStatus.style.color = 'red';
                    if (window.turnstile) window.turnstile.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Gửi đi';
                }
            } catch (error) {
                formStatus.textContent = 'Lỗi mạng. Vui lòng kiểm tra kết nối và thử lại.';
                formStatus.style.color = 'red';
                if (window.turnstile) window.turnstile.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Gửi đi';
            }
        });
    }
});

function onTurnstileSuccess(token) {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
} 