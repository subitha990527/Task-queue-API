# Task-queue-API

A RESTful Task Queue API built with Node.js, Express.js, and MongoDB. This project allows users to create, manage, search, filter, update, and delete tasks through API endpoints.

Features:

- Create new tasks 
- Retrieve all tasks
- Update task status
- Delete tasks  
- Search tasks by title
- Filter tasks by status
- Pagination support
- Request validation
  

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository
  
   - git clone

2. Navigate to the project folder
   
   - cd task-queue-api
     
3. Install dependencies
   
   - npm install
     
4. Create a .env file

  - MONGO_URI=mongodb://127.0.0.1:27017/taskqueue
  - PORT=5000

5. Start the server

   - npm run dev
   - Server runs on: http://localhost:5000

## API Endpoints

1. Create Task - POST /api/tasks
2. Get All Tasks - GET /api/tasks
3. Search Tasks - GET /api/tasks?search=backend
4. Filter Tasks - GET /api/tasks?status=PENDING
5. Pagination - GET /api/tasks?page=1&limit=5
6. Update Task Status - PATCH /api/tasks/
7. Delete Task - DELETE /api/tasks/
