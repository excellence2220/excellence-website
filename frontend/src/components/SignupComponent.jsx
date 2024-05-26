"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { useLoginContext } from "../context/loginContext";
import { Spinner } from "flowbite-react";

function SignupComponent() {
  const { signupModel, setSignupModel, setLoginModel } = useLoginContext();
  const [inputValue, setInputValue] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignup();

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  if (loading) {
    return (
      <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      </div>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading){
      return;
    }

    await signup({
      fullName: inputValue.fullName,
      username: inputValue.username,
      email: inputValue.email,
      password: inputValue.password,
      confirmPassword: inputValue.confirmPassword,
    });
    setInputValue({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  function onCloseModal() {
    setSignupModel(false);
  }

  return (
    <>
      <Modal show={signupModel} size="2xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Your email" />
              </div>
              <TextInput
                id="fullName"
                placeholder="john doe"
                name="fullName"
                value={inputValue.fullName}
                onChange={handleInputValue}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                placeholder="johndoe123"
                value={inputValue.username}
                name="username"
                onChange={handleInputValue}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={inputValue.email}
                name="email"
                onChange={handleInputValue}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                name="password"
                onChange={handleInputValue}
                value={inputValue.password}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Your password" />
              </div>
              <TextInput
                id="confirmPassword"
                type="password"
                required
                name="confirmPassword"
                value={inputValue.confirmPassword}
                onChange={handleInputValue}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">I accept Terms and Conditions</Label>
              </div>
            </div>
            <div className="w-full">
              <Button onClick={handleSubmit}>Signup to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?&nbsp;
              <button
                onClick={() => {
                  setLoginModel(true);
                  setSignupModel(false);
                }}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Login
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignupComponent;
