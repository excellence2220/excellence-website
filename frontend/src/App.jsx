import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import { PageNotFound } from "./pages/PageNotFound";
import { useLoginContext } from "./context/loginContext";
import LoginComponent from "./components/loginComponent";
import SignupComponent from "./components/SignupComponent";
import AdmissionForm from "./pages/AdmissionPage";
import { FooterComponent } from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {
  const { setLoginModel, setSignupModel } = useLoginContext();
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulating a delay of 2 seconds to demonstrate loading state
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 2 seconds
    }, 2000);

    return () => clearTimeout(loadingTimer); // Cleanup timer on unmount
  }, []); // Run only on initial render

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <NavbarComp
            setLoginModel={setLoginModel}
            setSignupModel={setSignupModel}
          />
          <LoginComponent />
          <SignupComponent />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <FooterComponent />
        </>
      )}
    </>
  );
}

export default App;
