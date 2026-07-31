# 📝 NotesVault

A secure and modern full-stack Notes Management application built with **React**, **FastAPI**, and **PostgreSQL**. NotesVault enables users to create, organize, search, edit, and delete personal notes through a clean and responsive interface while ensuring data privacy with JWT-based authentication.

---

## 🚀 Features

* 🔐 Secure User Authentication (JWT)
* 👤 User Registration & Login
* ➕ Create Notes
* ✏️ Edit Existing Notes
* 🗑️ Delete Notes
* 🔍 Search Notes by Title or Content
* 📅 Automatic Created & Updated Timestamps
* 🌙 Dark Mode Support
* 📱 Fully Responsive Design
* 🔒 Password Hashing using Bcrypt
* 🚫 Protected Routes
* ⚡ Fast CRUD Operations
* 🎨 Modern Tailwind CSS UI

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* FastAPI
* SQLAlchemy
* Pydantic
* JWT Authentication
* Passlib (Bcrypt)
* Alembic

### Database

* PostgreSQL
* SQLite (Optional)

---

## 📂 Project Structure

```text
NotesVault/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── auth.py
│   │   ├── database.py
│   │   ├── config.py
│   │   ├── utils.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🗄️ Database Schema

### Users

| Field    | Type            |
| -------- | --------------- |
| id       | Integer         |
| username | String          |
| email    | String          |
| password | Hashed Password |

### Notes

| Field      | Type        |
| ---------- | ----------- |
| id         | Integer     |
| title      | String      |
| content    | Text        |
| created_at | DateTime    |
| updated_at | DateTime    |
| user_id    | Foreign Key |

---

## 🔐 Authentication

* JWT Token Authentication
* Password Hashing using Bcrypt
* Protected API Endpoints
* User-specific Data Access
* Secure Login Sessions

---

## 📡 REST API Endpoints

### Authentication

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | /register | Register a New User |
| POST   | /login    | Login User          |

### Notes

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | /notes           | Fetch All Notes |
| GET    | /notes/{id}      | Get Note by ID  |
| POST   | /notes           | Create Note     |
| PUT    | /notes/{id}      | Update Note     |
| DELETE | /notes/{id}      | Delete Note     |
| GET    | /notes/search?q= | Search Notes    |

---

## ✨ Screens

* Landing Page
* Register Page
* Login Page
* Dashboard
* Create Note
* Edit Note
* Search Notes
* User Profile (Optional)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/NotesVault.git
cd NotesVault
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🌟 Future Enhancements

* 📌 Pin Notes
* ❤️ Favorite Notes
* 🏷️ Tags & Categories
* 📤 Export Notes as PDF
* ☁️ Cloud Storage
* 🤖 AI-powered Note Summarization
* 📝 Markdown Editor
* 🔔 Reminder Notifications
* 📎 File Attachments
* 🔄 Auto Save

---

## 🎯 Learning Outcomes

* Full-Stack Web Development
* REST API Design
* JWT Authentication
* CRUD Operations
* React State Management
* FastAPI Backend Development
* SQLAlchemy ORM
* PostgreSQL Integration
* Responsive UI Design
* Secure User Authentication

---

## 👩‍💻 Author

**Pooja K K**

B.E. Computer Science and Engineering

GitHub: https://github.com/PoojaK-K

LinkedIn: https://www.linkedin.com/in/poojak-k/

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star!
