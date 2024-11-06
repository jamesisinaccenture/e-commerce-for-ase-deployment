/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import CustomInput from '@/components/reusable/CustomInput';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
          
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email and Phone Number */}
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            label="Email"
            name="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <CustomInput
            label="Phone Number"
            name="phoneNumber"
            type="text"
            {...register("phoneNumber")}
          />
        </div>

        {/* Password and Confirm Password */}
        <CustomInput
          label="Password"
          name="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === (errors.password ? null : true) || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            {...register("terms", { required: "You must accept the terms" })}
            type="checkbox"
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-0"
          />
          <label className="ml-2 text-sm text-gray-600">
            I agree to all the{" "}
            <span className="text-red-500">Terms</span> and{" "}
            <span className="text-red-500">Privacy Policies</span>
          </label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;