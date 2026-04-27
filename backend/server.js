import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import { createAdmin } from "./seed/createAdmin.js";
import studentRoutes from './routes/studentRoutes.js'

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://hostel-erp-ten.vercel.app"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

const startServer = async () => {
  try {
    await connectDB();
    
await createAdmin();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (err) {
    console.log("Server failed:", err);
  }
};

startServer();