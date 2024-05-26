import express from "express";
import { getMessage } from "../controllers/get message/getMessage.controller.js";
import { postMessage } from "../controllers/post message/postMessage.controller.js";
import { deleteMessage } from "../controllers/delete Message/deleteMessage.controller.js";
const router = express.Router();

router.get("/get", getMessage);
router.post("/post", postMessage);
router.delete("/delete/:id", deleteMessage);

export default router;
