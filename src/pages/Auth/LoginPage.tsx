import CustomInput from "@/components/reusable/CustomInput";

const LoginPage = () => {
  return (
    <div className="bg-gray-500 text-center p-5">
      <CustomInput label="Email Address" />
      <CustomInput label="Username" />
    </div>
  );
};

export default LoginPage;
