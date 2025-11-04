# W's Dashboard

Hệ thống quản lý tài chính với giao diện hiện đại, được xây dựng bằng React + Vite + TailwindCSS.

## ✨ Tính năng

- 📊 **Dashboard tổng quan** với thống kê chi tiết
- 📈 **Biểu đồ tiến độ** theo thời gian thực
- 🖼️ **Gallery hình ảnh** công trình
- 📋 **Bảng quản lý dự án** với tính năng:
  - Sắp xếp theo cột
  - Tìm kiếm/lọc dữ liệu
  - Progress bars
  - Trạng thái dự án
- 📱 **Responsive design** - hoạt động tốt trên mọi thiết bị

## 🛠️ Tech Stack

- **React** 18.2.0
- **Vite** 5.0.8
- **TailwindCSS** 3.3.6
- **Recharts** 2.10.3 (biểu đồ)
- **Lucide React** (icons)

## 📦 Cài đặt

### Yêu cầu
- Node.js >= 18.0.0
- npm >= 9.0.0

### Các bước cài đặt

1. Clone hoặc mở project:
```bash
cd construction-dashboard
```

2. Cài đặt dependencies (đã hoàn tất):
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại: `http://localhost:5173`

## 🚀 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## 📁 Cấu trúc thư mục

```
construction-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header và Navigation
│   │   ├── StatCard.jsx        # Thẻ thống kê
│   │   ├── ProgressChart.jsx   # Biểu đồ tiến độ
│   │   ├── Gallery.jsx         # Gallery hình ảnh
│   │   └── ProjectTable.jsx    # Bảng dự án
│   ├── data/
│   │   └── mockData.js         # Dữ liệu mẫu
│   ├── lib/
│   │   └── utils.js            # Utilities
│   ├── App.jsx                 # Component chính
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Thay đổi màu sắc chính
Chỉnh sửa trong `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Thay đổi màu chủ đạo
  }
}
```

### Thêm dữ liệu
Cập nhật file `src/data/mockData.js`

### Kết nối API
Thay thế mock data trong `App.jsx` bằng API calls

## 📝 Tính năng sắp tới

- [ ] Kết nối Backend API
- [ ] Authentication/Authorization
- [ ] Export báo cáo PDF/Excel
- [ ] Thông báo realtime
- [ ] Upload hình ảnh công trình
- [ ] Quản lý nhân sự
- [ ] Lịch sử thay đổi

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

## 📄 License

MIT License

## 👨‍💻 Tác giả

Construction Management System © 2025
