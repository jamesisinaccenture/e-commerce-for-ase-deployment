import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomInput from "@/components/reusable/CustomInput";
import forget from "../../assets/forget.png";
import verify from "../../assets/verify.png";

import { usePasswordPage } from "../../hooks/state/usePasswordPage";

const ForgetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentPageIndex,
    nextPage,
    previousPage,
    setInputValue,
    setError,
    inputValue,
    error,
  } = usePasswordPage();

  const pages = [
    {
      title: "Forgot your password?",
      description:
        "Don't worry, happens to all of us. Enter your email below to recover your password.",
      inputLabel: "Email",
      buttonText: "Submit",
    },
    {
      title: "Verify your email",
      description: "Please enter the verification code sent to your email.",
      inputLabel: "Verification Code",
      buttonText: "Verify",
    },
    {
      title: "Reset your password",
      description: "Enter your new password below.",
      inputLabel: "New Password",
      buttonText: "Reset Password",
    },
  ];

  const currentPage = pages[currentPageIndex];

  useEffect(() => {
    setInputValue("");
    setError("");
  }, [currentPageIndex]);

  const validateInput = () => {
    if (currentPageIndex === 0) {
      if (!inputValue.trim()) {
        setError("Email is required.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError("Please enter a valid email address.");
        return false;
      }
    } else if (currentPageIndex === 1) {
      if (!inputValue.trim()) {
        setError("Verification code is required.");
        return false;
      }
    } else if (currentPageIndex === 2) {
      if (inputValue.length < 6) {
        setError("Password must be at least 6 characters long.");
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateInput()) {
      if (currentPageIndex === 0) {
        nextPage();
      } else if (currentPageIndex === 1) {
        nextPage();
      } else if (currentPageIndex === 2) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-poppins">
      <div className="bg-white shadow-xl rounded-lg flex flex-col lg:flex-row w-3/4 max-w-5xl">
        <div className="w-full lg:w-1/2 p-10">
          {currentPageIndex === 0 && (
            <a
              href="/login"
              className="text-blue-500 hover:underline mb-6 block"
            >
              &lt; Back to login
            </a>
          )}
          {currentPageIndex > 0 && (
            <a
              href="#"
              className="text-blue-500 hover:underline mb-6 block"
              onClick={(event) => {
                event.preventDefault();
                previousPage();
              }}
            >
              &lt; Back to {pages[currentPageIndex - 1].title}
            </a>
          )}
          <h1 className="text-4xl font-bold mb-4">{currentPage.title}</h1>
          <p className="text-gray-600 mb-10">{currentPage.description}</p>

          <form onSubmit={handleSubmit}>
            {/* Render input fields conditionally */}
            {currentPageIndex === 0 && (
              <CustomInput
                label={currentPage.inputLabel}
                type="text"
                name="email"
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}
            {currentPageIndex === 1 && (
              <CustomInput
                label={currentPage.inputLabel}
                type="text"
                name="verificationCode"
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}
            {currentPageIndex === 2 && (
              <CustomInput
                label={currentPage.inputLabel}
                type="password"
                name="newPassword"
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-6"
            >
              {currentPage.buttonText}
            </button>
          </form>
        </div>

        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100 rounded-r-lg">
          {currentPage.title === "Forgot your password?" && (
            <img
              src={forget}
              alt="Password Recovery Illustration"
              className="max-h-[450px] object-contain"
            />
          )}
          {currentPage.title === "Verify your email" && (
            <img
              src={verify}
              alt="Verification Illustration"
              className="max-h-[450px] object-contain"
            />
          )}
          {currentPage.title === "Reset your password" && (
            <img
              src={forget}
              alt="Reset Password Illustration"
              className="max-h-[450px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
