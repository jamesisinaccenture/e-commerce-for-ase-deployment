import React from "react";
import CustomInput from "@/components/reusable/CustomInput";
import { usePasswordPage } from "../../hooks/state/usePasswordPage";
import forget from "../../assets/forget.png";
import verify from "../../assets/verify.png";

const ForgetPasswordPage: React.FC = () => {
  const { currentPageIndex, nextPage, previousPage } = usePasswordPage();

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

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (currentPageIndex < pages.length - 1) {
                nextPage();
              }
            }}
          >
            {/* Render input only on the first page */}
            {currentPageIndex === 0 && (
              <CustomInput label={currentPage.inputLabel} type="text" />
            )}
            {currentPageIndex === 1 && (
              <CustomInput label={currentPage.inputLabel} type="text" />
            )}
            {currentPageIndex === 2 && (
              <CustomInput label={currentPage.inputLabel} type="password" />
            )}

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
              alt="Password Recovery Illustration"
              className="max-h-[450px] object-contain"
            />
          )}
          {currentPage.title === "Reset your password" && (
            <img
              src={forget}
              alt="Password Recovery Illustration"
              className="max-h-[450px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
