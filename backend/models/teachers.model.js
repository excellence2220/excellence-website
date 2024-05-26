import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
    },
    image: {
      type: String,
    },
    subject: {
      type: [String],
    },
    address: {
      type: String,
    },
    education: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
