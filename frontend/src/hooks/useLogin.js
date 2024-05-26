import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Check if the response status indicates an error
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Login failed");
      }
      const data = await response.json();
      // console.log(data);
      toast.success("login successful");
      cookies.set("user-token", data.results.token, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 1900);
    } catch (error) {
      setLoading(false);
      // console.log(
      //   "Something went wrong in login in frontend, error in useLogin hooks" +
      //     error.message
      // );
      const errorData = JSON.parse(error.message);
      toast.error(errorData.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default useLogin;
