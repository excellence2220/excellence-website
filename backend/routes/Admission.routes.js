import express from "express";
import multer from "multer";
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});
import {
  deleteAdmission,
  getAdmission,
  getAdmissionByID,
  postAdmission,
} from "../controllers/admissions/admissions.controllers.js";
const router = express.Router();

router.get("/get", getAdmission);
router.get("/get/:id", getAdmissionByID);
router.post("/post", upload.single("image"), postAdmission);
router.delete("/delete/:id", deleteAdmission);

export default router;
