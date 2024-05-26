import Auth from "../models/auth.model.js";

export default async function userValidation({
  fullName,
  username,
  password,
  confirmPassword,
  email,
}) {
  // Perform validation checks
  if (!fullName || !email || !password || !confirmPassword || !username) {
    return { error: true, message: "Please fill all fields" };
  }
  const emailAlreadyExist = await Auth.findOne({ email });
  if (emailAlreadyExist) {
    return { error: true, message: "Email already exist" };
  }
  const usernameAlreadyExist = await Auth.findOne({ username });
  if (usernameAlreadyExist) {
    return { error: true, message: "Username already exist" };
  }
  if (password !== confirmPassword) {
    return { error: true, message: "confirm password do not match" };
  }
  if (password.length < 6) {
    return { error: true, message: "Password must be at least 6 characters" };
  }
  if (!email.includes("@") || !email.includes(".")) {
    return { error: true, message: "Please enter a valid email" };
  }
  if (username.length < 4) {
    return { error: true, message: "Username must be at least 4 characters" };
  }
  if (username.length > 20) {
    return { error: true, message: "Username must be at most 20 characters" };
  }

  // If all validation checks pass, return an object with 'error' as false
  return { error: false };
}
