# TaskFocus

TaskFocus is a simple, responsive to-do list application built with React and Tailwind CSS. It allows users to add, edit, complete, and delete tasks, with support for both light and dark themes. The app stores data in localStorage, so your tasks stay saved even after refreshing.

## Features

- Add, delete, edit, and toggle tasks
- Filter by all, active, or completed tasks
- Clear all completed tasks with one click
- Light and dark theme toggle
- Local storage support for saving tasks

## Technologies Used

- React (with functional components and hooks)
- Tailwind CSS for styling
- Context API for global state management
- Vite for fast development

## Getting Started

Follow the steps below to run this project locally.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/taskfocus.git
   cd taskfocus
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The app will run at `http://localhost:5173` (or the port shown in your terminal).

## Folder Structure

```
src/
├── components/           # Reusable UI components
├── contexts/             # Context API logic for todos, theme, and filters
├── hooks/                # Custom hooks (e.g., useLocalStorage)
├── App.jsx               # Main app component
├── index.css             # Tailwind CSS styles
├── main.jsx              # Entry point
```

## Customization

To change the project name (e.g., from TaskFocus to something else):

- Edit the heading in `App.jsx`
- Optionally, update the `<title>` in `public/index.html`
- Rename the project in `package.json`

## Live Demo


> **Note:** On free hosting plans, the app may take a few seconds to load when inactive.

## License

This project is open for learning and personal use. No commercial license is provided.