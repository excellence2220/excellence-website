import React, { useState } from "react";
import usePostMessage from "../hooks/usePostMessage";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { loading, postMessage } = usePostMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
    });
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 pt-[7%]">
        <img
          src="/assets/contact.svg"
          alt="Contact"
          className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none"
        />
      </div>
      <div className="lg:w-1/2 p-8 bg-gray-100 rounded-lg lg:rounded-r-lg lg:rounded-l-none">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">Address: Nahar Chowk, Bharatpur-11, Chitwan , Nepal</p>
        <p className="mb-4">Phone: +977 9821270683 , 9866112724 </p>
        <p className="mb-4">Email: info.company2080@gmail.com</p>
        <p className="mb-4">Follow us on social media:</p>
        <div className="flex space-x-4 mb-8">
          <a href="https://www.facebook.com/excellencelearningcentreedu" target="_blank" className="text-blue-500 hover:text-blue-700">
            Facebook
          </a>
          <a href="https://www.youtube.com/channel/UCqMcERgtlSbMgM2PDyojzUg" target="_blank" className="text-blue-500 hover:text-blue-700">
            Youtube
          </a>
          <a href="https://www.instagram.com/excellencelearningcentre_edu/" target="_blank" className="text-blue-500 hover:text-blue-700">
            Instagram
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
