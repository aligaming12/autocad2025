// This file acts as a simple database for the website content.
let tutorials = [
    // --- Phần 1: Nhập môn AutoCAD ---
    {
        id: 'T000',
        title: 'Làm quen Giao diện AutoCAD',
        description: 'Khám phá chi tiết giao diện người dùng của AutoCAD, bao gồm các thanh công cụ, không gian làm việc và các cài đặt ban đầu.',
        thumbnail: 'https://img.youtube.com/vi/gDARd6SwePE/hqdefault.jpg',
        youtubeId: 'gDARd6SwePE',
        category: 'Cơ bản',
        textContent: `### Làm chủ Giao diện AutoCAD\n\n- **Thanh Ribbon:** Tìm hiểu về các tab và panel.\n- **Dòng lệnh (Command Line):** Cách sử dụng và tùy biến.\n- **Thanh trạng thái (Status Bar):** Các công cụ hỗ trợ vẽ chính xác.`
    },
    {
        id: 'T000_1',
        title: 'Các Lệnh Vẽ & Hiệu chỉnh Cơ bản',
        description: 'Tổng hợp các lệnh vẽ và hiệu chỉnh cơ bản thường dùng nhất trong AutoCAD 2D.',
        thumbnail: 'https://img.youtube.com/vi/de5LsNQuqRY/hqdefault.jpg',
        youtubeId: 'de5LsNQuqRY',
        category: 'Cơ bản',
        textContent: `### Các lệnh vẽ và hiệu chỉnh thiết yếu\n\nVideo này sẽ hướng dẫn bạn sử dụng các lệnh không thể thiếu khi làm việc với AutoCAD, bao gồm:\n\n- **Lệnh vẽ:** LINE, CIRCLE, RECTANGLE, ARC.\n- **Lệnh hiệu chỉnh:** TRIM, EXTEND, OFFSET, MOVE, COPY, ROTATE.`
    },
    {
        id: 'T000_2',
        title: 'Khóa học AutoCAD Toàn tập (Cho người mới)',
        description: 'Bài hướng dẫn đầy đủ các kiến thức và thao tác cơ bản nhất trong AutoCAD, phù hợp cho người mới bắt đầu.',
        thumbnail: 'https://img.youtube.com/vi/kbiu3nLc1GY/hqdefault.jpg',
        youtubeId: 'kbiu3nLc1GY',
        category: 'Cơ bản',
        textContent: `### Bắt đầu với AutoCAD 2024\n\nVideo này sẽ giúp bạn:\n\n- Cài đặt và thiết lập môi trường làm việc.\n- Làm quen với giao diện mới của phiên bản 2024.\n- Thực hiện các thao tác vẽ và điều hướng cơ bản.`
    },
    {
        id: 'T000_3',
        title: 'Thực hành Lệnh Line (Phần 1)',
        description: 'Bài tập thực hành chi tiết về lệnh vẽ đoạn thẳng (Line) trong AutoCAD.',
        thumbnail: 'https://img.youtube.com/vi/KEnEsZDjrFs/hqdefault.jpg',
        youtubeId: 'KEnEsZDjrFs',
        category: 'Cơ bản',
        textContent: 'Học cách sử dụng lệnh LINE một cách thành thạo qua các ví dụ và bài tập thực hành cụ thể. Phần này tập trung vào các khái niệm tọa độ và truy bắt điểm.'
    },
    {
        id: 'T000_4',
        title: 'Thực hành Lệnh Line (Phần 2)',
        description: 'Bài tập thực hành chi tiết về lệnh vẽ đoạn thẳng (Line) trong AutoCAD, phần tiếp theo.',
        thumbnail: 'https://img.youtube.com/vi/kgifyiWEX2Y/hqdefault.jpg',
        youtubeId: 'kgifyiWEX2Y',
        category: 'Cơ bản',
        textContent: 'Tiếp tục rèn luyện kỹ năng sử dụng lệnh LINE với các bài tập phức tạp hơn, tập trung vào truy bắt điểm và các hệ tọa độ tương đối.'
    },
    {
        id: 'T000_5',
        title: 'Thực hành Lệnh Line (Phần 3)',
        description: 'Bài tập thực hành nâng cao về lệnh vẽ đoạn thẳng (Line) và các ứng dụng.',
        thumbnail: 'https://img.youtube.com/vi/ZUiLXeBwMr0/hqdefault.jpg',
        youtubeId: 'ZUiLXeBwMr0',
        category: 'Cơ bản',
        textContent: 'Hoàn thiện kỹ năng với lệnh LINE qua các bài tập tổng hợp, kết hợp với các lệnh hiệu chỉnh cơ bản khác.'
    },
    // --- Phần 2: Kỹ năng Nâng cao ---
    {
        id: 'T003',
        title: 'Quản lý Layer chuyên nghiệp',
        description: 'Hướng dẫn chi tiết cách tạo, quản lý và sử dụng layer hiệu quả trong AutoCAD để tổ chức bản vẽ một cách chuyên nghiệp.',
        thumbnail: 'https://img.youtube.com/vi/vfUvBfFuWfM/hqdefault.jpg',
        youtubeId: 'vfUvBfFuWfM',
        category: 'Nâng Cao',
        textContent: `### Quản lý Layer hiệu quả\n\n- **Tạo và cấu hình Layer:** Học cách tạo layer mới, đặt tên, và gán các thuộc tính như màu sắc, kiểu đường (linetype), và độ đậm nhạt của nét vẽ.\n- **Sử dụng Layer:** Cách chuyển đổi giữa các layer, bật/tắt, đóng băng/mở băng, và khóa/mở khóa layer.\n- **Mẹo và thủ thuật:** Các mẹo hữu ích để làm việc với layer một cách nhanh chóng và hiệu quả.`
    },
    {
        id: 'T003_1',
        title: 'Làm chủ Block và WBLOCK',
        description: 'Tìm hiểu cách tạo và quản lý các khối (block) để tái sử dụng trong bản vẽ một cách hiệu quả.',
        thumbnail: 'https://img.youtube.com/vi/MVsGYKGWda8/hqdefault.jpg',
        youtubeId: 'MVsGYKGWda8',
        category: 'Nâng Cao',
        textContent: `### Làm chủ Block trong AutoCAD\n\n- **Tạo Block:** Học cách tạo một khối (block) từ các đối tượng có sẵn.\n- **Lưu Block (WBLOCK):** Cách lưu một khối ra một tệp DWG riêng biệt để sử dụng trong nhiều dự án khác nhau.\n- **Quản lý Block:** Chèn, chỉnh sửa và quản lý các khối trong bản vẽ của bạn.`
    },
    {
        id: 'T005',
        title: 'Làm chủ Lệnh Hatch (Tô vật liệu)',
        description: 'Hướng dẫn toàn diện về lệnh Hatch, giúp bạn tô vật liệu cho các mặt cắt một cách nhanh chóng và chính xác.',
        thumbnail: 'https://img.youtube.com/vi/4Ii-zVEGDZA/hqdefault.jpg',
        youtubeId: '4Ii-zVEGDZA',
        category: 'Kiến trúc',
        textContent: `### Các kỹ thuật với Lệnh Hatch\n\n- **Các loại mẫu Hatch:** Tìm hiểu về các mẫu có sẵn (Predefined), tùy chỉnh (User-defined), và tô màu (Solid).\n- **Tùy chọn Hatch:** Cách điều chỉnh góc, tỷ lệ (scale), và điểm gốc (origin) của mẫu vật liệu.\n- **Hatch nâng cao:** Sử dụng các tính năng như Annotative, Associative, và tạo các vùng hatch riêng biệt (Separate hatches).`
    },
    // --- Phần 3: Chuyên ngành ---
    {
        id: 'T004',
        title: 'Vẽ Mặt bằng Kiến trúc từ A-Z',
        description: 'Hướng dẫn chi tiết, từng bước để vẽ một mặt bằng kiến trúc hoàn chỉnh trong AutoCAD.',
        thumbnail: 'https://img.youtube.com/vi/DV_y5ixLFRI/hqdefault.jpg',
        youtubeId: 'DV_y5ixLFRI',
        category: 'Kiến trúc',
        textContent: `### Các bước thực hiện\n\n1.  **Thiết lập Layer và Dimstyle**: Chuẩn bị các lớp và kiểu kích thước cần thiết.\n2.  **Vẽ các đường trục và tường**: Dựng hệ lưới trục và vẽ tường bao, tường ngăn.\n3.  **Thêm cửa và cửa sổ**: Chèn các khối cửa đi và cửa sổ vào bản vẽ.\n4.  **Hoàn thiện và ghi kích thước**: Bố trí nội thất, ghi chú và đo kích thước cho mặt bằng.`
    },
    {
        id: 'T001',
        title: 'Tổng quan AutoCAD Electrical',
        description: 'Tổng quan về các tính năng chính và quy trình làm việc trong AutoCAD Electrical dành cho kỹ sư điện.',
        thumbnail: 'https://img.youtube.com/vi/UZfKZNlODFs/hqdefault.jpg',
        youtubeId: 'UZfKZNlODFs',
        category: 'Điện',
        textContent: `### Khám phá AutoCAD Electrical\n\n- **Quản lý dự án:** Cách tổ chức và quản lý các bản vẽ trong một dự án điện.\n- **Thư viện ký hiệu:** Sử dụng hàng ngàn ký hiệu tiêu chuẩn công nghiệp (IEC, JIC).\n- **Tạo báo cáo tự động:** Xuất các bảng kê vật liệu (BOM), danh sách dây, và nhiều hơn nữa.`
    },
    {
        id: 'T002',
        title: 'Thực hành Vẽ mạch Điện',
        description: 'Thực hành vẽ một sơ đồ mạch điện điều khiển đơn giản với các công cụ của AutoCAD Electrical.',
        thumbnail: 'https://img.youtube.com/vi/W3oB26E_XBI/hqdefault.jpg',
        youtubeId: 'W3oB26E_XBI',
        category: 'Điện',
        textContent: `### Thực hành vẽ mạch điều khiển\n\n- **Vẽ dây và đánh số:** Tìm hiểu cách vẽ các đường dây và tự động đánh số chúng.\n- **Chèn linh kiện:** Cách chèn các linh kiện như nút nhấn, rơ le, động cơ từ thư viện.\n- **Liên kết các linh kiện:** Tạo các mối liên kết thông minh giữa các linh kiện trên bản vẽ.`
    },
    {
        id: 'T006',
        title: 'Nhập môn AutoCAD 3D',
        description: 'Hướng dẫn chi tiết về môi trường 3D trong AutoCAD, bao gồm các lệnh tạo khối và hiệu chỉnh cơ bản.',
        thumbnail: 'https://img.youtube.com/vi/cuYW-kLiaD8/hqdefault.jpg',
        youtubeId: 'cuYW-kLiaD8',
        category: '3D',
        textContent: `### Khám phá không gian 3D\n\n- **Giao diện 3D:** Chuyển đổi và làm quen với không gian làm việc 3D Modeling.\n- **Các lệnh tạo khối cơ bản:** Sử dụng các lệnh như EXTRUDE, PRESSPULL, REVOLVE để tạo các vật thể 3D từ hình 2D.\n- **Hiệu chỉnh khối 3D:** Tìm hiểu cách di chuyển, xoay, và thay đổi kích thước các đối tượng trong không gian 3 chiều.`
    },
    {
        id: 'T003_2',
        title: 'Vẽ kỹ thuật hạ tầng (Nâng cao)',
        description: 'Hướng dẫn chi tiết cách thiết kế các công trình hạ tầng như mương, rãnh trong AutoCAD.',
        thumbnail: 'https://img.youtube.com/vi/w6Ii-3iJwss/hqdefault.jpg',
        youtubeId: 'w6Ii-3iJwss',
        category: 'Nâng Cao',
        textContent: `Video này dành cho người dùng đã có kinh nghiệm, tập trung vào một ứng dụng thực tế trong lĩnh vực xây dựng và hạ tầng.`
    }
];

