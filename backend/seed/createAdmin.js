import bcrypt from "bcryptjs";
import Student from "../models/Student.js";

export const createAdmin = async () => {
  const admin = await Student.findOne({ role: "admin" });

  if (!admin) {
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    await Student.create({
      email: process.env.ADMIN_EMAIL,
      password: hashed,
      role: "admin",
      name: "Admin"
    });

    console.log("Admin created");
  }
};