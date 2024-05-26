import Auth from "../../models/auth.model.js";
import userValidation from "../../validation/auth.validation.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, username } = req.body;
    // Validate user input
    const validationResult = await userValidation({
      fullName,
      email,
      password,
      confirmPassword,
      username,
    });

    // If validation fails, send error response
    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.message });
    }

    // Check if user with the same email or username already exists
    const existingUser = await Auth.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email or username" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Auth({
      fullName,
      email,
      password: hashedPassword,
      confirmPassword,
      username,
    });

    // Generate JWT token here
    const token = generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      email: newUser.email,
      token: token,
      createdAt: new Date(newUser.createdAt).toString(),
      updatedAt: new Date(newUser.updatedAt).toString(),
    });
  } catch (error) {
    console.error("Something went wrong in signup User controller", error);
    res.status(500).json({
      message:
        "something went wrong in signup controller :- Internal server error",
    });
  }
};
