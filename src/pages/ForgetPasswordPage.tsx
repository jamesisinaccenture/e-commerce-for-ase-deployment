import CustomInput from "@/components/reusable/CustomInput";

const ForgetPasswordPage = () => {
  return (
    <div className="bg-gray-500 text-center p-5">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form>
        <CustomInput label="Enter your registered email:" type="email" />{" "}
        {/* Input for email */}
        <CustomInput
          label="Enter your username for recovery:"
          type="text"
        />{" "}
        {/* Input for username */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
