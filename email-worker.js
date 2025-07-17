// Cloudflare Worker để gửi email từ form liên hệ
// Cần đăng ký Cloudflare Email Routing và thiết lập Mailchannels

export default {
  async fetch(request, env, ctx) {
    // Xử lý CORS
    if (request.method === "OPTIONS") {
      return handleCORS();
    }

    // Chỉ chấp nhận POST request
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: corsHeaders(),
      });
    }

    try {
      // Lấy dữ liệu từ request
      const data = await request.json();
      
      // Xác thực dữ liệu
      if (!data.name || !data.email || !data.subject || !data.message) {
        return new Response(JSON.stringify({ error: "Thiếu thông tin bắt buộc" }), {
          status: 400,
          headers: corsHeaders(),
        });
      }

      // Xác thực Turnstile token
      if (!data.turnstileToken) {
        return new Response(JSON.stringify({ error: "Thiếu xác thực Turnstile" }), {
          status: 400,
          headers: corsHeaders(),
        });
      }

      // Xác thực Turnstile với Cloudflare
      const turnstileVerified = await verifyTurnstile(data.turnstileToken, env);
      if (!turnstileVerified) {
        return new Response(JSON.stringify({ error: "Xác thực Turnstile thất bại" }), {
          status: 400,
          headers: corsHeaders(),
        });
      }

      // Gửi email qua Mailchannels
      const emailSent = await sendEmail(data, env);
      
      if (emailSent) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: corsHeaders(),
        });
      } else {
        return new Response(JSON.stringify({ error: "Không thể gửi email" }), {
          status: 500,
          headers: corsHeaders(),
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: "Lỗi máy chủ nội bộ" }), {
        status: 500,
        headers: corsHeaders(),
      });
    }
  }
};

// Hàm xử lý CORS
function handleCORS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

// Headers CORS
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://alistudio.site", // Thay đổi thành domain của bạn
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
}

// Xác thực Turnstile
async function verifyTurnstile(token, env) {
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY, // Cần thiết lập trong Cloudflare Worker
        response: token,
      }),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    return false;
  }
}

// Gửi email qua Mailchannels
async function sendEmail(data, env) {
  try {
    // Định dạng nội dung email
    const emailContent = `
      Tên: ${data.name}
      Email: ${data.email}
      
      Nội dung:
      ${data.message}
    `;

    // Gửi email qua Mailchannels
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: "no-reply@alistudio.site", // Địa chỉ email bạn vừa tạo
                name: "AutoCAD Learning",
              },
            ],
          },
        ],
        from: {
          email: "no-reply@alistudio.site", // Địa chỉ email bạn vừa tạo
          name: "AutoCAD Learning Contact Form",
        },
        subject: `[Liên hệ Website] ${data.subject}`,
        content: [
          {
            type: "text/plain",
            value: emailContent,
          },
        ],
      }),
    });

    return response.status === 202;
  } catch (error) {
    return false;
  }
} 