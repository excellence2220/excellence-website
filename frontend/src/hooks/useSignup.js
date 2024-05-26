import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const handleErrors = ({
  fullName,
  username,
  email,
  password,
  confirmPassword,
}) => {
  if (!fullName || !username || !email || !password || !confirmPassword) {
    toast.error("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Confirm password does not match!!");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password length must be greater than 8");
    return false;
  }

  return true;
};

function useSignup() {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    const success = handleErrors({
      fullName,
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await response.json();
      toast.success("signup successful");

      if (data.error) {
        throw new Error(data.error);
      }
      cookies.set("user-token", data.token, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1900);
    } catch (error) {
      // console.log(
      //   "Something went wrong in signup, error in signup controller" +
      //     error.message
      // );
      const errorData = JSON.parse(error.message);
      toast.error(errorData.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
}

export default useSignup;
