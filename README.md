# 🎯 Aesthetic Task Manager

A beautifully crafted task management application built with modern web technologies and a vintage-inspired design aesthetic.

![Aesthetic Task Manager](screenshot.png)

## ✨ Features

- **Elegant Design**: Vintage-inspired aesthetics with modern functionality
- **Drag & Drop**: Intuitive task reordering
- **Categories**: Organize tasks with customizable categories
- **Filtering & Search**: Easily find tasks with powerful filtering options
- **Responsive**: Works seamlessly on all devices
- **Local Storage**: Tasks persist between sessions
- **Keyboard Accessible**: Full keyboard navigation support

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Material-UI](https://mui.com/) - UI Components
- [DND Kit](https://dndkit.com/) - Drag and Drop
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aesthetic-task-manager.git
   ```

2. **Install dependencies**
   ```bash
   cd aesthetic-task-manager
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 🎨 Design Choices

- **Color Palette**:
  - Forest Green (`#065125`)
  - Vintage Gold (`#DDA033`)
  - Flame Orange (`#E2532F`)
  - Bone White (`#E0D8C3`)
  - Vintage Blue (`#0D97AC`)

- **Typography**:
  - Headings: Playfair Display
  - Body: Source Serif Pro

## 🔧 Project Structure

```
src/
├── components/
│   ├── TodoList/
│   │   ├── AddTodo.js
│   │   ├── TodoFilters.js
│   │   ├── TodoItem.js
│   │   ├── TodoList.js
│   │   └── TodoStats.js
│   └── layout/
│       └── Footer.js
├── constants/
│   └── categories.js
├── hooks/
│   └── useTodoList.js
├── pages/
│   ├── _app.js
│   └── index.js
└── styles/
    └── globals.css
```

## 📱 Features in Detail

### Task Management
- Create, edit, and delete tasks
- Mark tasks as complete
- Star important tasks
- Categorize tasks
- Drag and drop reordering

### Filtering & Organization
- Filter by category
- Filter by status
- Search functionality
- Clear completed tasks

### User Experience
- Smooth animations
- Intuitive interactions
- Responsive design
- Keyboard accessibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Design inspiration from vintage aesthetics
- Icons from Material-UI
- Font families from Google Fonts

