🏠 Hostel Management System

A full-stack web application built with the MERN stack to efficiently manage hostel operations, including student records, room allocation, and fee installments.

The system supports two roles: Admin and Student, ensuring secure and structured access to data.

🚀 Features
👨‍💼 Admin Panel
Secure login using credentials stored in .env
Add and manage student records
Assign room numbers and college details
Configure total fees and installment plans
Set due dates for each installment
Track and update payment status
🎓 Student Panel
Login access only after admin registration
View personal details:
Name
Room Number
College Name
Access fee information:
Total Amount
Paid Amount
Pending Amount
Installment Due Dates
Automatic ₹100 late fee applied on overdue payments
🛠 Tech Stack

Frontend

React.js (ES6 Modules)
Tailwind CSS

Backend

Node.js
Express.js

Database

MongoDB
🔐 Authentication & Access Control
Admin credentials are securely stored in environment variables
Students cannot self-register
Only admin-created accounts can access the system
Role-based access ensures proper data visibility
💰 Fee Management System
Total fees are divided into structured installments
Each installment includes:
Fixed amount
Due date
Late payments automatically incur a ₹100 penalty
Real-time tracking of paid and pending dues
📁 Project Structure
hostel-management/
│
├── frontend/          # React application
├── backend/           # Express + Node backend
│   ├── models/        # Database schemas
│   ├── routes/        # API endpoints
│   ├── controllers/   # Business logic
│   └── config/        # Configuration files
│
├── .env
└── README.md
⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123
▶️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/hostel-management.git
cd hostel-management
2. Install dependencies

Backend

cd backend
npm install

Frontend

cd frontend
npm install
▶️ Running the Application
Start Backend Server
cd backend
npm start
Start Frontend
cd frontend
npm run dev
