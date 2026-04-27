import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { calculateFine } from "../utils/calcFine.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({ role: "student" });

    const updated = students.map((s) => ({
      ...s._doc,
      totalFine: calculateFine(s.installments), 
    }));

    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const submit = async (req, res) => {
  try {
    const { name, collegeName,roomNo, fees,installmentCount, installments, email, password } = req.body;

    const Exits = await Student.findOne({ email });
    if (Exits) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      collegeName,
      roomNo,
      fees,
      installmentCount,
      installments,
      email,
      password: hashedPassword

    });

    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


export const updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

export const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const getMyStudent = async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const student = await Student.findById(req.user.id);

    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

