🏠 Hostel Management System

A full-stack web application built with the MERN stack to efficiently manage hostel operations, including student records, room allocation, and fee installments.

The system supports two roles: Admin and Student, ensuring secure and structured access to data.

🚀 Features

👨‍💼 Admin Panel
- Secure login using credentials stored in .env
- Add and manage student records
- Assign room numbers and college details
- Configure total fees and installment plans
- Set due dates for each installment
- Track and update payment status

🎓 Student Panel
- Login access only after admin registration
- View personal details:
  - Name
  - Room Number
  - College Name
- Access fee information:
  - Total Amount
  - Paid Amount
  - Pending Amount
  - Installment Due Dates
- Automatic ₹100 late fee applied on overdue payments

🛠 Tech Stack

Frontend:
- React.js (ES6 Modules)
- Tailwind CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB

🔐 Authentication & Access Control

- Admin credentials are stored in environment variables (.env)
- Students cannot self-register
- Only admin-created accounts can access the system
- Role-based access ensures proper data visibility

💰 Fee Management System

- Total fees divided into installments
- Each installment has fixed amount and due date
- Late payment adds ₹100 fine automatically
- Tracks paid and pending amounts

📁 Project Structure

hostel-management/
│
├── frontend/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── .env
└── README.txt

⚙️ Environment Variables

Create .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123

▶️ Setup

Install backend:
cd backend
npm install

Install frontend:
cd frontend
npm install

▶️ Run Project

Start backend:
cd backend
npm start

Start frontend:
cd frontend
npm run dev

📈 Future Enhancements

- Online payment integration
- Email/SMS notifications
- Admin dashboard analytics
- JWT authentication
- Mobile responsive UI

📄 License

This project is for educational purposes.
