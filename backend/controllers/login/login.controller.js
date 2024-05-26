import Auth from "../../models/auth.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter email and password" });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.password) {
      return res.status(500).json({ message: "User password is not set" });
    }

    const isMatch = await bcrypt.compare(password, user?.password || "");
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      message: "login successfull",
      results: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        token: token,
        createdAt: new Date(user.createdAt).toString(),
        updatedAt: new Date(user.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Something went wrong in login User controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
