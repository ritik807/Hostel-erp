import express from "express";
import { submit, getStudents, getSingleStudent, updateStudent, deleteStudent,getMyStudent} from "../controllers/studentController.js";
import { studentMiddleware } from "../middleware/studentMiddleware.js";

const router = express.Router();

router.post("/submit", submit);
router.get("/", getStudents);

router.get("/dashboard", studentMiddleware, getMyStudent); // 👈 BEFORE :id

router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getSingleStudent);
export default router;