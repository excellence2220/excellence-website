import React, { useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    temporaryAddress: "",
    permanentAddress: "",
    image: "",
    guardianName: "",
    guardianPhone: "",
    school: "",
    className: "",
    course: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input name is nested (like 'name.firstName'), handle nested state update
    if (name.includes(".")) {
      const [fieldName, nestedField] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: {
          ...prevData[fieldName],
          [nestedField]: value,
        },
      }));
    } else {
      // If the input name is not nested, update the state normally
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("middleName", formData.middleName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("temporaryAddress", formData.temporaryAddress);
    formDataToSend.append("permanentAddress", formData.permanentAddress);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("guardianName", formData.guardianName);
    formDataToSend.append("guardianPhone", formData.guardianPhone);
    formDataToSend.append("school", formData.school);
    formDataToSend.append("className", formData.className);
    formDataToSend.append("course", formData.course);
    formDataToSend.append("description", formData.description);

    try {
      await axios.post("/api/admission/post", formDataToSend);
      toast.success("Admission Added successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("server error please try later");
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="grid place-content-center mb-6">
        <h1 className="text-center text-4xl font-bold">Admissions Form</h1>
        <p className="text-xl font-semibold">
          Fill the correct answer to get admission.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="block text-gray-700 font-bold mb-2"
          >
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guardianName"
            className="block text-gray-700 font-bold mb-2"
          >
            Guardian Name
          </label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guardianPhone"
            className="block text-gray-700 font-bold mb-2"
          >
            Guardian Phone Number
          </label>
          <input
            type="text"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-700 font-bold mb-2"
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 font-bold mb-2"
          >
            Date of Birth
          </label>
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="temporaryAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Temporary Address
          </label>
          <input
            type="text"
            name="temporaryAddress"
            value={formData.temporaryAddress}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="permanentAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Permanent Address
          </label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-bold mb-2"
          >
            Previous School Name
          </label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-bold mb-2"
          >
            Class
          </label>
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-gray-700 font-bold mb-2"
          >
            Course
          </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description} // Corrected to use formData.description
            onChange={handleChange} // Use the common handleChange function
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Get Admissions <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
