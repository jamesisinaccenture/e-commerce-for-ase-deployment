// import { Form } from "react-router-dom";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";

// import { FormItem, FormLabel } from "@/components/ui/form";
const InformationSettingsPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="shadow-lg p-10 mt-10">
          <div className="container">
            <h1 className="text-blue-500">Edit Your Profile</h1>
          </div>
          <div className="container">
            <div className="flex space-x-5">
              <CustomInput type="text" label="First Name" />
              <CustomInput type="text" label="Last Name" />
            </div>
            <div className="flex space-x-5">
              <CustomInput type="text" label="Username" />
              <CustomInput type="email" label="Email" />
            </div>
            <div className="flex space-x-5">
              <CustomInput type="tel" label="Contact Number" />
              <CustomInput type="text" label="Address" />
            </div>
          </div>
          <div className="container">
            <p>Password Changes</p>
            <div>
              <CustomInput type="password" label="Current Password" />
              <CustomInput type="password" label="New Password" />
              <CustomInput type="password" label="Confirm New Password" />
            </div>
          </div>
          <div className="flex container flex-row-reverse">
            <Button className="bg-blue-500">Save Changes</Button>
            <Button className="bg-white text-black shadow-none hover:bg-white hover:text-blue-500">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationSettingsPage;
