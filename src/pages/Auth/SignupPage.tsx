import { useForm } from 'react-hook-form';

import CustomInput from '@/components/reusable/CustomInput';
import { SignupFormData } from '@/models/auth.model';
import { signupSchema } from "@/schema/authSchema";

import { zodResolver } from '@hookform/resolvers/zod';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <CustomInput
              label="First Name"
              type="text"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <CustomInput
              label="Last Name"
              type="text"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <CustomInput
              label="Email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <CustomInput
              label="Contact Number"
              type="text"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <CustomInput
            label="Address"
            type="text"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            label="Username"
            type="text"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            label="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <CustomInput
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Hidden Date Created Field */}
        <input
          type="hidden"
          value={new Date().toISOString()}
          {...register("dateCreated")}
        />

        <div className="flex items-center">
          <input
            {...register("terms")}
            type="checkbox"
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-0"
          />
          <label className="ml-2 text-sm text-gray-600">
            I agree to all the{" "}
            <span className="text-black underline">Terms</span> and{" "}
            <span className="text-black underline">Privacy Policies</span>
          </label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms.message}</p>
        )}

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
