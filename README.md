# 📊 Project Management Dashboard

A full-stack **Project Management Dashboard** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application helps users manage projects, tasks, reports, and profiles through a clean and responsive dashboard.

---

## 🚀 Features

- 🔐 User Authentication (Login & Register)
- 📊 Dashboard with project statistics
- 📁 Add, Edit and Delete Projects
- ✅ Add and Manage Tasks
- 📈 Reports Dashboard
- 👤 User Profile Management
- 💾 Data Persistence
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure

```
project-management-dashboard/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ANUPKUMAR130013/project-management-dashboard.git
```

Move into the project folder:

```bash
cd project-management-dashboard
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the **backend** folder.

Example:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

> Do **not** commit your `.env` file to GitHub.

---

## ▶️ Run the Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## ▶️ Run the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📸 Screens

- Login
- Register
- Dashboard
- Projects
- Tasks
- Reports
- Profile

---

# 📌 Main Modules

### Dashboard
- Total Projects
- Total Tasks
- Completed Tasks
- Pending Tasks

### Projects
- Add Project
- Edit Project
- Delete Project

### Tasks
- Add Task
- Update Task Status
- Delete Task

### Reports
- Project Summary
- Task Summary
- Completion Percentage

### Profile
- Update Profile
- Profile Photo
- Contact Details

---

# 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Projects

```
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

# 📦 Dependencies

## Backend

- express
- mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- cors
- nodemon

## Frontend

- react
- react-router-dom
- axios
- vite

---

# 📖 Future Improvements

- Team Collaboration
- Role-Based Access
- File Uploads
- Email Notifications
- Calendar Integration
- Charts & Analytics
- Dark Mode
- Real-Time Updates

---

# 👨‍💻 Author

**Anup Kumar**

B.Tech (Information Technology)

Rajkiya Engineering College, Banda

---

# 📄 License

This project is created for educational and learning purposes.
