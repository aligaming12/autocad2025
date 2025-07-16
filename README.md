# Hướng Dẫn AutoCAD - Website Tutorial

Website hướng dẫn học AutoCAD với các chuyên đề thiết kế 2D, mô hình 3D và thiết kế điện.

## Tính năng

- Giao diện hiện đại với hiệu ứng glass morphism
- Hiệu ứng loading với animation vẽ logo
- Nội dung hướng dẫn chi tiết về AutoCAD
- Responsive trên các thiết bị di động
- Tối ưu cho GitHub Pages

## Cấu trúc thư mục

```
autocad-tutorial-web/
├── css/
│   ├── glass.css           # Hiệu ứng glass morphism
│   ├── loading.css         # Hiệu ứng loading
│   └── style.css           # Style chính
├── js/
│   ├── loading.js          # Animation loading
│   └── main.js             # JavaScript chính
├── images/
│   ├── logo/               # Logo website
│   └── tutorials/          # Hình ảnh hướng dẫn
├── tutorials/
│   ├── 2d-design.html      # Hướng dẫn thiết kế 2D
│   ├── 3d-modeling.html    # Hướng dẫn mô hình 3D
│   └── electrical.html     # Hướng dẫn thiết kế điện
└── index.html              # Trang chủ
```

## Hướng dẫn triển khai lên GitHub Pages

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập vào tài khoản GitHub của bạn
2. Tạo repository mới với tên `autocad-tutorial` (hoặc tên bạn muốn)
3. Chọn repository là Public

### Bước 2: Đẩy code lên GitHub

```bash
# Di chuyển vào thư mục dự án
cd autocad-tutorial-web

# Khởi tạo Git repository
git init

# Thêm tất cả file vào staging
git add .

# Commit các thay đổi
git commit -m "Initial commit"

# Kết nối với repository GitHub của bạn
git remote add origin https://github.com/username/autocad-tutorial.git

# Đẩy code lên GitHub
git push -u origin main
```

### Bước 3: Cấu hình GitHub Pages

1. Truy cập repository của bạn trên GitHub
2. Chọn tab "Settings"
3. Cuộn xuống phần "GitHub Pages"
4. Trong mục "Source", chọn branch "main" và thư mục "/ (root)"
5. Nhấn "Save"

Sau khi cấu hình, website của bạn sẽ được triển khai tại địa chỉ: `https://username.github.io/autocad-tutorial/`

### Bước 4: Tùy chỉnh tên miền (tùy chọn)

Nếu bạn có tên miền riêng, bạn có thể cấu hình nó cho GitHub Pages:

1. Trong phần "GitHub Pages" của Settings, nhập tên miền của bạn vào ô "Custom domain"
2. Tạo một file `CNAME` trong thư mục gốc của repository với nội dung là tên miền của bạn
3. Cấu hình DNS của tên miền để trỏ đến GitHub Pages

## Phát triển dự án

Để tiếp tục phát triển dự án, bạn có thể làm theo các bước sau:

1. Clone repository về máy tính của bạn
2. Thêm nội dung mới cho các khóa học
3. Tùy chỉnh giao diện theo ý muốn
4. Thêm tính năng mới như bình luận, đánh giá, v.v.
5. Commit và push các thay đổi lên GitHub

## Công nghệ sử dụng

- HTML5
- CSS3 (với các tính năng hiện đại như Flexbox, Grid, CSS Variables)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Tác giả

Được phát triển bởi [Tên của bạn] - [Website/Email của bạn]

## Giấy phép

Dự án này được phân phối dưới Giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết. 