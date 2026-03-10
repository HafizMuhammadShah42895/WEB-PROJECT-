<div align="center">

# 🏠 Service Booking Platform
### Connecting Users with Home Service Professionals

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co)

*A full-stack web application for booking home services, built with Node.js, Express, MySQL, and EJS.*

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 👤 User Management | Sign up, view, update, and delete user accounts |
| 🔧 Worker Registration | Service providers register with details and pricing |
| 📅 Service Booking | Users book workers for various home services |
| 🛡️ Admin Dashboard | Manage users, workers, and orders in one place |
| 🗄️ Advanced SQL | Showcases JOINs, subqueries, aggregates & HAVING clauses |

---

## 🛠️ Tech Stack
```text
Backend          →  Node.js · Express.js
Database         →  MySQL
Template Engine  →  EJS
Middleware       →  Body-parser
```

---

## 📋 Prerequisites

- **Node.js** v12 or higher
- **MySQL** Server
- **npm** or yarn

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "web +dadabase project"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure the Database

Extract and import the database from `DATABASE.zip`, then update your credentials in `connection.js`:
```javascript
const mysql = require('mysql2');

var con = mysql.createConnection({
    host:     "localhost",
    user:     "your_username",   // ← change this
    password: "your_password",   // ← change this
    database: "pro"
});
```

### 4. Start the Server
```bash
node index.js
```

> 🌐 Open your browser at **http://localhost:1112**

To change the default port, edit `index.js`:
```javascript
const port = 1112; // change to your desired port
```

---

## 📂 Project Structure
```
web +dadabase project/
├── public/
│   ├── images/                  # Static images
│   └── stylesheets/             # CSS files
│       ├── idex.css
│       ├── about us.css
│       └── contact us.css
├── views/                       # EJS templates
│   ├── pro.ejs                  # Home page
│   ├── sign_up.ejs              # User registration
│   ├── Become_Worker.ejs        # Worker registration
│   ├── Book_Now.ejs             # Booking form
│   ├── admin.ejs                # Admin dashboard
│   ├── disuser.ejs              # Display users
│   ├── disworker.ejs            # Display workers
│   ├── disorder.ejs             # Display orders
│   ├── join.ejs                 # JOIN query results
│   ├── subquery.ejs             # Subquery results
│   ├── having.ejs               # HAVING clause results
│   └── agregate.ejs             # Aggregate function results
├── connection.js                # Database configuration
├── index.js                     # Main application entry
├── package.json                 # Dependencies
└── DATABASE.zip                 # Database backup
```

---

## 🌐 Routes

### Public Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/about_us` | About page |
| `/services` | Services listing |
| `/contact_us` | Contact page |
| `/sign_up` | User registration form |
| `/Become_Worker` | Worker registration form |
| `/Book_Now` | Service booking form |

### Admin Pages

| Route | Description |
|---|---|
| `/admin_login` | Admin login |
| `/admin` | Admin dashboard |
| `/disuser` | View all users |
| `/disworker` | View all workers |
| `/disorder` | View all orders |

### CRUD Operations

| Route | Method | Description |
|---|---|---|
| `/signup` | POST | Register new user |
| `/becomeworker` | POST | Register as worker |
| `/booknow` | POST | Create a booking |
| `/duser` | GET | View/Update/Delete users |
| `/duser/update/:id` | POST | Update user name |
| `/duser/delete/:id` | POST | Delete user |
| `/dworker` | GET | View/Delete workers |
| `/dworker/delete/:wid` | POST | Delete worker |
| `/dorder` | GET | View/Delete orders |
| `/dorder/delete/:oid` | POST | Delete order |

### Advanced SQL Demos

| Route | Description | SQL Concept |
|---|---|---|
| `/join` | Orders with user & worker details | `INNER JOIN` |
| `/subquery` | Users who have placed orders | Subquery |
| `/having` | Cities ranked by order count | `GROUP BY` + `HAVING` |
| `/agregate` | Worker count by service type | Aggregate Functions |

---

## 🗄️ Database Schema

<details>
<summary><strong>👤 user</strong></summary>

| Column | Type | Description |
|---|---|---|
| `id` | INT | Primary Key (Auto Increment) |
| `name` | VARCHAR | User's full name |
| `email` | VARCHAR | User's email address |
| `password` | VARCHAR | Hashed password |

</details>

<details>
<summary><strong>🔧 worker</strong></summary>

| Column | Type | Description |
|---|---|---|
| `wid` | INT | Primary Key (Auto Increment) |
| `name` | VARCHAR | Worker's full name |
| `cnic` | VARCHAR | National ID number |
| `email` | VARCHAR | Worker's email address |
| `priceperhour` | DECIMAL | Hourly service rate |
| `servicetype` | VARCHAR | Type of service offered |

</details>

<details>
<summary><strong>📦 order</strong></summary>

| Column | Type | Description |
|---|---|---|
| `oid` | INT | Primary Key (Auto Increment) |
| `id` | INT | Foreign Key → `user.id` |
| `wid` | INT | Foreign Key → `worker.wid` |
| `hours` | INT | Number of hours booked |
| `address` | VARCHAR | Service location address |
| `city` | VARCHAR | Service city |
| `odate` | DATETIME | Order timestamp |

</details>

---

## 📝 API Examples

<details>
<summary><strong>Register a New User</strong></summary>
```http
POST /signup
Content-Type: application/x-www-form-urlencoded

name=John Doe&email=john@example.com&pass=password123
```

</details>

<details>
<summary><strong>Register as a Worker</strong></summary>
```http
POST /becomeworker
Content-Type: application/x-www-form-urlencoded

name=Jane Smith&cnic=12345-1234567-1&email=jane@example.com&price=500&servicetype=Plumber
```

</details>

<details>
<summary><strong>Book a Service</strong></summary>
```http
POST /booknow
Content-Type: application/x-www-form-urlencoded

id=1&wid=1&hours=3&addres=123 Main St&city=Karachi
```

</details>

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch → `git checkout -b feature/YourFeature`
3. Commit your changes → `git commit -m 'Add some feature'`
4. Push to the branch → `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Built as a database project demonstrating real-world SQL operations
- Uses **EJS** for clean server-side rendering
- Implements **RESTful API** principles throughout

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

⭐ **Star this repository if you find it helpful!**

</div>
