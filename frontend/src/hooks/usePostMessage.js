import React, { useState } from "react";
import toast from "react-hot-toast";
function usePostMessage() {
  const [loading, setLoading] = useState(false);

  const postMessage = async ({ name, email, message, phone }) => {
    setLoading(true);
    try {
      const response = await fetch("/api/message/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          phone,
        }),
      });
      const data = await response.json();

      console.log(data);
      toast.success("message sent successful");

      if (data.error) {
        throw new Error(data.error);
      }

      setTimeout(() => {
        window.location.reload();
      }, 1900);
    } catch (error) {
      const errorData = JSON.parse(error.message);
      toast.error(errorData.message);
    }
    setLoading(false);
  };
  return { postMessage, loading };
}

export default usePostMessage;
