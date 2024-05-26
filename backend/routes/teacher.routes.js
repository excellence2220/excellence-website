import express from "express";
const router = express.Router();
import multer from "multer";
import {
  deleteTeacher,
  getTeacherById,
  getTeachers,
  postTeacher,
  updateTeacher,
} from "../controllers/teachers/teachers.controllers.js";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});
router.get("/get", getTeachers);
router.post("/post", upload.single("image"), postTeacher);
router.put("/update/:id", upload.single("image"), updateTeacher);
router.delete("/delete/:id", deleteTeacher);
router.get("/get/:id", getTeacherById);

export default router;
