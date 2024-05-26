import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function UpdateTeacher() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    subject: "",
    role: "",
    image: null,
    education: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/teachers/get/${id}`)
      .then((response) => {
        setInput(response.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct FormData object
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("address", input.address);
    formData.append("phone", input.phone);
    formData.append("subject", input.subject);
    formData.append("role", input.role);
    formData.append("image", input.image);
    formData.append("education", input.education);

    try {
      await axios.put(`/api/teachers/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Teacher Added successfully");
      setInput({
        name: "",
        email: "",
        address: "",
        phone: "",
        subject: "",
        role: "",
        image: null, // Store file object in state
        education: "",
      });
      setTimeout(() => {
        window.location.href = "/teachers";
      }, 1000);
    } catch (error) {
      toast.error("failed to update teacher");
      console.log(error);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <button
            className="inline-flex items-center justify-center rounded-md bg-black px-3.5 py-1 font-semibold leading-7 text-white hover:bg-black/80"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <div className="mb-2 flex justify-center">
            <img src="/logo.svg" className="h-20" alt="" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black underline">
            Update Teacher
          </h2>
          <form
            method="POST"
            className="mt-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder={input.name}
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="address"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Address{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Address"
                    id="address"
                    name="address"
                    value={input.address}
                    onChange={(e) =>
                      setInput({ ...input, address: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Phone"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Phone"
                    id="Phone"
                    name="phone"
                    value={input.phone}
                    onChange={(e) =>
                      setInput({ ...input, phone: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="role"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Role{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Role"
                    id="role"
                    name="role"
                    value={input.role}
                    onChange={(e) =>
                      setInput({ ...input, role: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="education"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Education{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Education"
                    id="education"
                    name="education"
                    value={input.education}
                    onChange={(e) =>
                      setInput({ ...input, education: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="subject"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Subject{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    value={input.subject}
                    onChange={(e) =>
                      setInput({ ...input, subject: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="image"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Choose Image
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 cursor-pointer"
                    type="file"
                    id="image"
                    accept="image/*"
                    name="image"
                    onChange={(e) =>
                      setInput({ ...input, image: e.target.files[0] })
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Add Teacher <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
