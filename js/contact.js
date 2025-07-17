document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    // Replace with your actual Web3Forms access key
    const accessKey = 'd0d8494c-4c6e-4b6d-a279-2c7b808945f3';
    // Replace with your actual hCaptcha site key
    const hcaptchaSiteKey = '50b2fe65-b00b-4b98-9520-567a5b3a3a4b';

    const accessKeyInput = form.querySelector('input[name="access_key"]');
    if (accessKeyInput) {
        accessKeyInput.value = accessKey;
    }

    const hcaptchaDiv = form.querySelector('.h-captcha');
    if (hcaptchaDiv) {
        hcaptchaDiv.setAttribute('data-sitekey', hcaptchaSiteKey);
    }
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        
        formStatus.innerHTML = "Đang gửi...";
        formStatus.style.color = "#333";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                formStatus.innerHTML = json.message || "Gửi tin nhắn thành công!";
                formStatus.style.color = "green";
            } else {
                console.log(response);
                formStatus.innerHTML = json.message || "Đã có lỗi xảy ra!";
                formStatus.style.color = "red";
            }
        })
        .catch(error => {
            console.log(error);
            formStatus.innerHTML = "Đã có lỗi xảy ra!";
            formStatus.style.color = "red";
        })
        .then(function () {
            form.reset();
            // Reset hCaptcha if it's rendered
            if (window.hcaptcha) {
                const widgetID = hcaptchaDiv.querySelector('iframe')?.dataset.hcaptchaWidgetId;
                if(widgetID) {
                    window.hcaptcha.reset(widgetID);
                }
            }
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        });
    });
}); 