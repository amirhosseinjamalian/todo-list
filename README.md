# 🚀 Taskify – Smart ToDo Manager

A clean and minimal ToDo List application built with **HTML, CSS and Vanilla JavaScript**, powered by **Local Storage** for persistent task management.

---

## ▶️ Live Demo
🔗 **Demo Online:** 
[🔗Click here to view the live demo](https://amirhosseinjamalian.github.io/todo-list/)

---

## 📌 Overview

Taskify is a lightweight task management app that allows users to:

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persist data using Local Storage
- Reload page without losing data

Built with pure JavaScript — no frameworks, no libraries.

---

## ✨ Features

✅ Add tasks using button or Enter key  
✅ Mark tasks as completed (toggle done state)  
✅ Delete tasks with trash icon  
✅ Persistent data using `localStorage`  
✅ Dynamic DOM manipulation  
✅ Minimal and clean UI  
✅ Scrollable task list  
✅ Responsive layout  

---

## 🛠 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Font Awesome
- Local Storage API

---

vanilla-js-todo-app/
│
├── index.html
├── style.css
├── app.js
└── font/


---

## 🧠 How It Works

🔹 When adding a task:
- Task is pushed into an array
- Stored in `localStorage`
- Dynamically added to the DOM

🔹 When marking as done:
- Class `done` toggles
- Status is saved inside a parallel array
- UI updates automatically

🔹 When deleting:
- Task removed from array
- Storage updated
- DOM element removed

🔹 On page load:
- Data is retrieved from `localStorage`
- Tasks are recreated dynamically
- Done states are restored

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/amirhosseinjamalian/todo-list.git
```

## 📂 Project Structure

🎯 Future Improvements

Add task editing feature

Add filtering (All / Active / Completed)

Add drag & drop reordering

Add dark mode

Refactor storage to use JSON instead of comma split

📄 License

Free to use for learning purposes.

👨‍💻 Author

Developed with ❤️ using Vanilla JavaScript.
