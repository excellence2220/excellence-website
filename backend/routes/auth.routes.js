import express from "express";
import { signup } from "../controllers/signup/signup.controller.js";
import { deleteUser, getUser } from "../controllers/get users/getUsers.controller.js";
import { login } from "../controllers/login/login.controller.js";
const router = express.Router();

router.get("/", getUser);
router.post("/signup", signup);
router.post("/login", login);
router.delete('/delete/:id' , deleteUser)


export default router;
