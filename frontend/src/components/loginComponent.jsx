"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useLoginContext } from "../context/loginContext";
import useLogin from "../hooks/useLogin";
import { Spinner } from "flowbite-react";

export default function LoginComponent() {
  const { loginModel, setLoginModel, setSignupModel } = useLoginContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  if (loading) {
    return (
      <div className="flex flex-wrap gap-2 justify-center items-center h-screen">
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      </div>
    );
  }
  const handleForm = async function (e) {
    e.preventDefault();
    if (loading) {
      return;
    }
    await login(email, password);
    setEmail("");
    setPassword("");
  };

  function onCloseModal() {
    setLoginModel(false);
    setEmail("");
  }

  return (
    <>
      <Modal show={loginModel} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button onClick={handleForm}>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <button
                onClick={() => {
                  setSignupModel(true);
                  setLoginModel(false);
                }}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
