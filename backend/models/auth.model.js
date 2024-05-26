import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email should be unique"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username should be unique"],
      minlength: [4, "Username must be at least 4 characters"],
      maxlength: [20, "Username must be at most 20 characters"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("User", authSchema);

export default Auth;
