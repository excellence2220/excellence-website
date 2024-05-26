import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import connectDB from "./dbConfig/db.connection.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import admissionRoutes from "./routes/Admission.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();
// Parse requests with content-type - application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api/user", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/admission", admissionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
