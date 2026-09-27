# Employee Management System

A full-stack Employee Management System built using **React.js**, **Node.js**, **Express.js**, and **MySQL**. This application helps organizations manage employees, departments, and administrative tasks through a secure web interface.

---

# Project Overview

The Employee Management System is a web application that allows an administrator to manage employees efficiently.

The admin can:

- Login securely
- Add new employees
- Edit employee details
- Delete employees
- Manage employee categories/departments
- View dashboard statistics
- Upload employee profile images
- View employee information

Employees can:

- Login using their own credentials
- View their profile information
- Logout securely

The project follows a **Client-Server Architecture** where:

- React handles the frontend
- Express.js handles the backend APIs
- MySQL stores the data
- JWT manages authentication
- Multer uploads employee images

---

# Technologies Used

## Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap
- HTML5
- CSS3
- JavaScript (ES6)

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt Password Hashing
- Multer
- Cookie Parser
- CORS

---

## Database

- MySQL

---

# Project Structure

```
Employee Management System
│
├── Front-End Folder
│   ├── src
│   │   ├── Components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── assets
│   │
│   └── package.json
│
├── Server Side
│   ├── Routes
│   │   ├── AdminRoute.js
│   │   └── EmployeeRoute.js
│   │
│   ├── utils
│   │   └── db.js
│   │
│   ├── Public
│   │   └── Images
│   │
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Features

## Admin Module

### Secure Login

The administrator logs in using email and password.

JWT generates a secure authentication token which is stored inside browser cookies.

---

### Dashboard

The dashboard displays:

- Total Employees
- Total Admins
- Total Salary Paid
- Admin Records

This information is fetched from MySQL using SQL aggregate functions.

Example:

```sql
SELECT COUNT(id) FROM employee;
SELECT SUM(salary) FROM employee;
```

---

### Employee Management

Admin can

- Add Employee
- Edit Employee
- Delete Employee
- View Employee List

Employee information includes

- Name
- Email
- Password
- Address
- Salary
- Department
- Profile Image

---

### Category Management

Admin can create different departments like

- HR
- IT
- Finance
- Marketing

Each employee belongs to one category.

---

### Image Upload

Employee images are uploaded using **Multer**.

Images are stored inside

```
Server Side/Public/Images
```

Image names are automatically generated to avoid duplicate filenames.

---

## Employee Module

Employees can

- Login
- View Profile
- Logout

Passwords are encrypted using **bcrypt** before storing them in MySQL.

---

# Authentication

Authentication is implemented using **JSON Web Token (JWT)**.

Flow

```
User Login
      ↓
Server verifies credentials
      ↓
JWT Token Generated
      ↓
Token Stored in Cookies
      ↓
Protected Routes Verified
```

Only authenticated users can access protected pages.

---

# Database

Database Name

```
employeems
```

Tables

```
admin
category
employee
```

---

## Admin Table

Stores administrator login details.

Fields

- id
- email
- password

---

## Category Table

Stores employee departments.

Fields

- id
- name

Examples

- HR
- IT
- Finance

---

## Employee Table

Stores employee information.

Fields

- id
- name
- email
- password
- address
- salary
- image
- category_id

---

# API Endpoints

## Authentication

```
POST /auth/adminlogin
POST /employee/employee_login
GET /verify
```

---

## Employee

```
GET /employee/detail/:id
GET /auth/employee
POST /auth/add_employee
PUT /auth/edit_employee/:id
DELETE /auth/delete_employee/:id
```

---

## Category

```
GET /auth/category
POST /auth/add_category
```

---

## Dashboard

```
GET /auth/admin_count
GET /auth/employee_count
GET /auth/salary_count
GET /auth/admin_records
```

---

# How It Works

### Step 1

React collects login details.

↓

### Step 2

Axios sends the data to Express backend.

↓

### Step 3

Express checks MySQL.

↓

### Step 4

If credentials are correct,

JWT token is generated.

↓

### Step 5

Frontend receives success response.

↓

### Step 6

Dashboard loads employee information.

---

# Security Features

- JWT Authentication
- Password Encryption (bcrypt)
- Cookie Authentication
- CORS Protection
- File Upload Validation

---

# Future Improvements

- Role Based Access Control
- Search Employee
- Pagination
- Attendance Module
- Payroll System
- Leave Management
- Email Notifications
- Forgot Password
- Dark Mode
- Responsive Dashboard
- Charts and Analytics
- Export Employee Data to Excel/PDF

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install frontend dependencies

```bash
cd Front-End Folder
npm install
npm run dev
```

Install backend dependencies

```bash
cd Server Side
npm install
node index.js
```

---

# MySQL Setup

Create Database

```sql
CREATE DATABASE employeems;
```

Import database

or

Create tables manually.

Update

```
utils/db.js
```

with your MySQL username and password.

---


---

# Learning Outcomes

This project helped in understanding

- Full Stack Development
- REST API Development
- CRUD Operations
- React Components
- React Routing
- Express Server
- MySQL Integration
- JWT Authentication
- Password Hashing
- Image Upload
- Database Relationships
- API Testing
- Frontend-Backend Communication

---

# Conclusion

The Employee Management System is a complete CRUD-based web application that demonstrates how React, Express, Node.js, and MySQL work together to build a secure and scalable employee management platform. The project covers authentication, database management, image upload, routing, API development, and modern full-stack web development concepts.
