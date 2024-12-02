/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import forget from "@/assets/images/forget.png";
import verify from "@/assets/images/verify.png";
import CustomInput from "@/components/reusable/CustomInput";
import { FormField, FormItem, FormMessage, Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import z from "zod";
import { ROUTES } from "@/routes/endpoints";

const ForgetPasswordPage: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const formEmail = useForm({
    resolver: zodResolver(
      z.object({
        email: z
          .string()
          .min(1, { message: "Email is required" })
          .email("Valid email is needed"),
      })
    ),
    defaultValues: { email: "" },
  });

  const formVerification = useForm({
    resolver: zodResolver(
      z.object({
        verificationCode: z
          .string()
          .min(4, "Validation Code must be 4 numbers")
          .max(4, "Validation Code must be 4 numbers"),
      })
    ),
    defaultValues: { verificationCode: "" },
  });

  const formNewPassword = useForm({
    resolver: zodResolver(
      z
        .object({
          newPassword: z
            .string()
            .min(8, "New password must be at least 8 characters"),
          confirmPassword: z
            .string()
            .min(8, "Confirmation must be at least 8 characters"),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
          message: "Passwords doesn't match",
          path: ["confirmPassword"],
        })
    ),
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  const pages = [
    {
      title: "Forgot your password?",
      description:
        "Don't worry, happens to all of us. Enter your email below to recover your password.",
      inputLabel: "Email",
      buttonText: "Submit",
      form: formEmail,
    },
    {
      title: "Verify your email",
      description: "Please enter the verification code sent to your email.",
      inputLabel: "Verification Code",
      buttonText: "Verify",
      form: formVerification,
    },
    {
      title: "Reset your password",
      description: "Enter your new password below.",
      inputLabel: "New Password",
      buttonText: "Reset Password",
      form: formNewPassword,
    },
  ];

  const currentPage = pages[currentPageIndex];

  const submitEmail = () => nextPage();
  const submitVerification = () => nextPage();
  const submitNewPassword = () => {};

  const nextPage = () => setCurrentPageIndex((pageIndex) => pageIndex + 1);

  const previousPage = () =>
    setCurrentPageIndex((pageIndex) => Math.max(pageIndex - 1, 0));

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <div className="flex max-md:flex-col-reverse max-w-[80rem] w-full gap-10 item-center justify-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-2 justify-center max-w-80">
            {currentPageIndex > 0 && (
              <Button
                variant="link"
                onClick={(e) => {
                  e.preventDefault();
                  previousPage();
                }}
                className="text-blue-500 hover:text-blue-500/80 px-0"
              >
                &lt; Back to {pages[currentPageIndex - 1].title}
              </Button>
            )}
            <h1 className="text-4xl font-bold mb-4">{currentPage.title}</h1>
            <p className="text-gray-600 mb-10">{currentPage.description}</p>

            {currentPageIndex === 0 && (
              <Form {...formEmail}>
                <form onSubmit={formEmail.handleSubmit(submitEmail)}>
                  <FormField
                    control={formEmail.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          label={currentPage.inputLabel}
                          type="text"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-2 justify-center">
                    <Button className="w-full bg-store-primary hover:bg-store-primary/80 text-white mt-6">
                      {currentPage.buttonText}
                    </Button>

                    <Button variant="link" asChild>
                      <Link
                        to={ROUTES.LOGIN}
                        className="text-blue-500 hover:text-blue-500/80"
                      >
                        Back to login
                      </Link>
                    </Button>
                  </div>
                </form>
              </Form>
            )}
            {currentPageIndex === 1 && (
              <Form {...formVerification}>
                <form
                  onSubmit={formVerification.handleSubmit(submitVerification)}
                >
                  <FormField
                    control={formVerification.control}
                    name="verificationCode"
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          label={currentPage.inputLabel}
                          type="number"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-2 justify-center">
                    <Button className="w-full bg-store-primary hover:bg-store-primary/80 text-white mt-6">
                      {currentPage.buttonText}
                    </Button>

                    <Button variant="link" asChild>
                      <Link
                        to={ROUTES.LOGIN}
                        className="text-blue-500 hover:text-blue-500/80"
                      >
                        Back to login
                      </Link>
                    </Button>
                  </div>
                </form>
              </Form>
            )}
            {currentPageIndex === 2 && (
              <Form {...formNewPassword}>
                <form
                  onSubmit={formNewPassword.handleSubmit(submitNewPassword)}
                  className="flex flex-col gap-4"
                >
                  <FormField
                    control={formNewPassword.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          label={currentPage.inputLabel}
                          type="password"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formNewPassword.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          label={currentPage.inputLabel}
                          type="password"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-2 justify-center">
                    <Button className="w-full bg-store-primary hover:bg-store-primary/80 text-white mt-6">
                      {currentPage.buttonText}
                    </Button>

                    <Button variant="link" asChild>
                      <Link
                        to={ROUTES.LOGIN}
                        className="text-blue-500 hover:text-blue-500/80"
                      >
                        Back to login
                      </Link>
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center rounded-r-lg">
          {currentPage.title === "Forgot your password?" && (
            <img
              src={forget}
              alt="Password Recovery Illustration"
              className="max-h-[400px] object-contain"
            />
          )}
          {currentPage.title === "Verify your email" && (
            <img
              src={verify}
              alt="Verification Illustration"
              className="max-h-[400px] object-contain"
            />
          )}
          {currentPage.title === "Reset your password" && (
            <img
              src={forget}
              alt="Reset Password Illustration"
              className="max-h-[400px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
